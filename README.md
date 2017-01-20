## HMR Dev Server

Run 

		npm run dev


Run it on a specific port (detault 8080)

		
		PORT=3000 npm run dev


Run it for the about.html page (default index)
		

		PAGE=about npm run dev


## Build Generator


Run
		
		(PAGE=index) npm run build



## Start a static server and serve builds


		(PORT=8080) npm start


## SVG Text Generator
		
		(FILL=white) (STROKE=transparent) (FONTSIZE=72) npm run svg "My Text" mytext


It will generate My Text to /src/assets/mytext.svg with the font defined in svg.js
