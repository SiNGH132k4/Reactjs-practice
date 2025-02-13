# To start react
`npm create vite@latest`

### To install node modules
`npm i`

### To run the web app
`npm run dev`


## Installing TailwindCSS in Vite (acc to new doc)
 Firstly create a vite project and intall npm init by using "npm i"

### In target vite project
`npm install tailwindcss @tailwindcss/vite`

***

### In vite.config.js file put it like that
`plugins: [react(), tailwindcss()],`

### Import tailwindCSS in "vite.config.js"
`import tailwindcss from '@tailwindcss/vite`

***

### Add it in "index.css" file which is inside "src" directory
`@import "tailwindcss";`

***

### Add it to "index.html"
`<link href="/src/index.css" rel="stylesheet">`

***

## Acc. to package.json
`npm run dev`

> Note: if a tag which is not a closing tag like "img" put error close the tag to solve it - "<img />" or "/>" at end

Links
[".md file layout"](https://youtu.be/bpdvNwvEeSE?si=jLJCT5MvYjCnSBt_)