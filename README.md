# Ell Exercise

I build this prototype to explore how a design works in the browser. Some sections are populated with dummy text; others use images in place of actual text content.

## To see it in action:
* Use Chrome or Safari, this isn't tested on FF, IE, or Edge.
* See working example on [GitHub pages](https://akiryk.github.io/ell-exercise/index.html)
* It's only somewhat responsive — doesn't break at small screen sizes but not designed for small screens yet point.

## To download and run locally:
1. `cd your/local/directory`
2. `git clone https://github.com/akiryk/hanging_hashtags.git`
3. Run `yarn` ([yarn package manager](https://yarnpkg.com/en/)) *or* `npm install`.
4. Run `gulp server`
5. Visit http://localhost:3000/

## To set up a local working environment:
1. `cd your/local/directory`
2. `git clone https://github.com/akiryk/hanging_hashtags.git`
3. Run `yarn` ([yarn package manager](https://yarnpkg.com/en/)) *or* `npm install`.
4. Tell riot to watch 'tag' files and compile them as they change.
```bash
  # TODO: configure gulp to do this automatically.
  # For now, go to console and:
  ./node_modules/.bin/riot -w src/tags src/js/app.js
  # Or, if you install riot globally:
  riot -w src/tags src/js/app.js
```
5. Run `gulp`

## Interactivity:
There are three areas in which I've thought about how to handle interactivity.

1. Student links under "Support Levels" in the sidebar. I propose toggling the names of students into or out of view when a user clicks on the buttons to the right of "High Support", "Moderate Support", and "Low Support."
2. Comment and Add New Comment buttons. Clicking on the comment button in the header should take the user down the page to the comments section. When adding a comment, the comment form should toggle in and out of view. See [wireframe mockup](https://raw.githubusercontent.com/akiryk/ell-exercise/master/docs/images/comments.gif).
3. Share button in the header. Clicking the share button should spawn a modal displaying a form with email and message fields, plus a list of school district colleagues. Typing a name into the email field should trigger an autocomplete action, helping users find correct email addresses. See [wireframe mockup](https://raw.githubusercontent.com/akiryk/ell-exercise/master/docs/images/sharing.jpg).

I'll say more about this in person!
