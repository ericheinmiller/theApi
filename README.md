# theApi
Api to test whether a string of parentheses are valid or not.
Submit post data as such "{ str : *data*}" with data being the string of parentheses.
For best results make sure data consists of only a string with no spaces and/or characters other than paratheses, brackets, or braces.

## To install ##
Simply clone this repository into your designated folder.
Once cloned, go into theApi and run 'node app.js'
The server is now started and awaiting data

## File structure ##
```
app.js (server)
node_modules
  └──body-parser
  └──express
package.json
routes
  └──routes.js
servers
  └──api.js
test
  └──test.html
```

## test.html ##

Very simple html page to test whether the api works or not when hosted locally. Simply type your string and send.

