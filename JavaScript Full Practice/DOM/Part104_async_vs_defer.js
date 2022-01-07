// Async Vs Defer

// Async --> browser will keep parsing the html elements in parallel with execution of javaScript file
// there are still some chance of getting an error because html is not completely parsed and if we use some element that is not yet been parsed the error will occur.

// Defer --> browser will keep parsing the html elements in parallel with loading of javaScript file once loading is done browser will first complete the parsing
// and then start executing the js file and in this manner any sort of error is prevented.

// Note: From now onwards we will be using the defer method
