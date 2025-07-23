# roofrite

# Build

NPM and Git are required for this project:
* [NPM](https://nodejs.org/en/download/)
* [Git (for window)](https://gitforwindows.org/)

Install both programs.

Open GitBash

Use `cd` to specify the location of repository (Zach: I used documents).

Use `git clone` and copy-paste in the project url.

Use `cd roofrite` to access your local roofrite directory.

This website is built with [Eleventy](https://www.11ty.dev/docs/), which depends upon Node.js version 18 or higher.Eleventy itself can then be installed with the command:
```
npm install @11ty/eleventy
```

To build the website locally and run the server, run the command:
```
npm start
```
Then visit <http://localhost:8080/>

# Update

To update the website's content, you'll edit Markdown files, which end with the `.md` file extension. For example, the file `index.md` holds the main contents of the homepage.

Open GitBash
Use `git status` to see the names of the files that have changed.
Use `git diff` to see the individual changes between files. Use spacebar to iterate through them. Use q to quit.
Use `git add fileName` if you've added files to your directory.
Use `get commit -a -m "commit message"` to commit all the changes you've made.
Use `get commit fileName -m "commit message"` to commit all the changes you've made to a specific file.
Use `get push` to send committed changes to gitHub.
* You may be asked to authenticate. Use your gitHub email and username in the commandline, and then sign in when prompted through the browser.

# Deploy

Using Git, commit your changes to the `main` branch; then visit <https://roofrite.pages.dev/>
