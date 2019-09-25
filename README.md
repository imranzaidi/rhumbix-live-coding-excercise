#Part 1

Using your preferred language and frameworks write a simple web, iOS, Command line, or Android app that does the following:
Allows a user to input a search term and then press the "GO" button
Get a GIF from the Giphy API based on the search term
Display that GIF
Use the following API to retrieve GIFs:

```http://api.giphy.com/v1/gifs/search?q=[KEYWORD_HERE]&api_key=[API_KEY]&limit=1```


In case you are curious, here is a link to the GIPHY API documentation, but you should not need it.

##HINTS:

Make sure to grab the url for the actual GIF and not the url for a webpage with the GIF on it. The api returns both.
If you are making a mobile app and you are having trouble getting the GIF to animate, feel free to use a webview instead of an imageview.
“Data” in the json response is an array 
Your application should look something like this, but don’t worry about making it look pretty

#Part 2
Add autocomplete to your GIF search! Use this short list as your source for the autocomplete suggestions (it is okay to hard-code this list):

about
above
across
app
apple
appreciate
bad
ball
balloon
bell
cat
