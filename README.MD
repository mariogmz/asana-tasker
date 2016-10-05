# Asana Tasker
This is a web based client for the Asana API, built with React + Redux + :heart: + :coffee:, along with other techologies such as sass, webpack, and a dev webserver made with nodeJs.

It is using my APP_KEY since I created an account only for testing purposes.

It allows you to see my tasks on asana and either mark each one as complete or undone, and then clicking each one of them also displays some ~ranting~ info I wrote.

## What I intend to build
![Mockup](https://s9.postimg.org/u1aj7ciun/Screen_Shot_2016_10_04_at_5_36_26_PM.png)

_The semifinal version does not look the same, but it works_

## Requirements
To run this project you might need to have `node` alongside `babel`, `webpack` installed globally, this is included inside the `package.json` file, the `node` version is included in the `.rvmrc` file to avoid confusions about what node js version you should use.

## How to run
First of all, since this is node _ish_, as usual, run in your terminal:
```
npm install && npm start
```
This will install all the required dependencies and will run `node devServer.js` through the `npm start` command.

Open ![http://localhost:3333/](http://localhost:3333/) in the browser you most like, and I wish you like Google Chrome as I do, and... voila!

## Final Thoughts
This was exciting to build, because everything was almost new for me, I had to research and study key concepts like crazy:

- ECMA2015 a.k.a. ES6.
- How to bundle applications using `webpack`.
- React JS as Facebook shows in its tutorials.
- Redux as it is.
- Then the integration of all the parts.
- Issues and unexpected situations.

Now thanks to this I can build something using React, but still needs to be refactored.

Any comments or suggestions you can always send me an email to *mariogomezmtz@gmail.com* or suggest a code change through a Pull Request.
