// Simple accessible blog filtering + debounced search
(() => {
  const searchInput = document.getElementById('blog-search');
  const filterBtns = Array.from(document.querySelectorAll('.filter-btn'));
  const cards = Array.from(document.querySelectorAll('.blog-card'));
  const noResults = document.getElementById('blog-no-results');

  let activeCategory = 'all';

  // Utility: debounce
  function debounce(fn, wait = 200) {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...args), wait);
    };
  }

  function updateButtons(activeBtn) {
    filterBtns.forEach(btn => {
      const pressed = btn === activeBtn;
      btn.classList.toggle('active', pressed);
      btn.setAttribute('aria-pressed', String(pressed));
    });
  }

  function filterBlog() {
    const query = (searchInput.value || '').trim().toLowerCase();
    let visible = 0;

    cards.forEach(card => {
      const cat = (card.dataset.category || '').toLowerCase();
      const title = (card.dataset.title || '').toLowerCase();
      const categoryMatch = activeCategory === 'all' || cat === activeCategory;
      const textMatch = !query || title.includes(query);
      const show = categoryMatch && textMatch;
      card.style.display = show ? '' : 'none';
      if (show) visible++;
    });

    if (visible === 0) {
      noResults.style.display = '';
    } else {
      noResults.style.display = 'none';
    }
  }

  const debouncedFilter = debounce(filterBlog, 150);

  // Wire up search input
  if (searchInput) {
    searchInput.addEventListener('input', debouncedFilter);
    // optional: support Enter to focus first visible card link
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const first = cards.find(c => c.style.display !== 'none');
        if (first) {
          const a = first.querySelector('a');
          if (a) a.focus();
        }
      }
    });
  }

  // Wire up filter buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      activeCategory = btn.dataset.category || 'all';
      updateButtons(btn);
      debouncedFilter();
      // Optionally update URL query params for shareability/history:
      try {
        const url = new URL(window.location);
        if (activeCategory && activeCategory !== 'all') url.searchParams.set('category', activeCategory);
        else url.searchParams.delete('category');
        if (searchInput.value) url.searchParams.set('q', searchInput.value);
        else url.searchParams.delete('q');
        window.history.replaceState({}, '', url);
      } catch (e) {
        // ignore (e.g. not allowed in some contexts)
      }
    });
    // keyboard interaction already handled because it's a native button
  });

  // Restore state from URL (optional, non-breaking)
  (function restoreFromURL() {
    try {
      const params = new URL(window.location).searchParams;
      const cat = params.get('category');
      const q = params.get('q');
      if (q && searchInput) searchInput.value = q;
      if (cat) {
        const btn = filterBtns.find(b => b.dataset.category === cat);
        if (btn) {
          activeCategory = cat;
          updateButtons(btn);
        }
      }
    } catch (e) { /* ignore */ }
    // Initial filter run
    filterBlog();
  })();

})();
