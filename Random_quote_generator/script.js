function generate() {
  var quotes = {
    "- Deepak Chopra":
      '"Sex is always about emotions. Good sex is about free emotions; bad sex is about blocked emotions."',
    "- C.S.Lawis":
      '"If all men are born free, how is it that all women are born slaves?"',
    "- John":
      '"She decided to free herself, dance into the wind, create a new language. And birds fluttered around her, writing “yes” in the sky"',
      "- David": '"The struggles we endure today will be the ‘good old days’ we laugh about tomorrow"'
  };

//we are getting only authors 
  var authors = Object.keys(quotes);
  
//we are getting author name
 var author = authors[Math.floor(Math.random() * authors.length)] 
 
//we are getting authors quote
 var quote = quotes[author]


 document.getElementById("quote").innerHTML=quote
 document.getElementById("author").innerHTML=author;

}
