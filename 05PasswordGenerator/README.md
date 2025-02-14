Link: http://password-generator-ashy-sigma.vercel.app/

To run it:

npm create vite@latest
// To start react

npm i
// To install node modules

npm run dev
// To run the web app


// Installing TailwindCSS in Vite (acc to new doc)
// Firstly create a vite project and intall npm init by using "npm i"

npm install tailwindcss @tailwindcss/vite
// In target vite project

plugins: [react(), tailwindcss()],
// In vite.config.js file put it like that

import tailwindcss from '@tailwindcss/vite'
// Import tailwindCSS in "vite.config.js"

@import "tailwindcss";
// Add it in "index.css" file which is inside "src" directory

<link href="/src/index.css" rel="stylesheet">
// Add it to "index.html"

npm run dev
// acc to package.json

// Note: if a tag which is not a closing tag like "img" put error close the tag to solve it - "<img />" or "/>" at end
