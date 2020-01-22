**Keyword Charting Tool Sourcing from SWAPI API**

Presenting the prototype for SWAPI API source scraping for "Disney +"

This particular tool can be fed into a chart showing keywords that are most often used.

To setup:\
Simply clone the repo\
Open two terminals\
In the first, use the command `npm run dev`\
In the second, use the command `npm run ui`

The stack uses:
* `pug` compiler for easy templating
* `express` on `node.js`
* `request.js` for API import
* `chart.js` for charting

For the future:
This framework can easily be replaced with the Reddit API. We can then parse using javascript methods to match keywording that is of interest.
Eventually I would like to parse the data into a SQL server database where we can eventually query from develop more robust charting.
