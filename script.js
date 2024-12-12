function generateQuote(){
    var quotes = {
        "- Lewis B. Smedes" : '"To forgive is to set a prisoner free and discover that the prisoner was you."',
        "- Leo Buscaglia" : '"Love yourself first, and everything else falls into live"',
        "- Robert Fulghum" : '"I think life change people more quickly than they will ever"',
        "- Robert Fulghum" : '"I think it pisses people off because it`s true"'
    }

    var authors = Object.keys(quotes);
    var author = authors[Math.floor(Math.random() * authors.length)];
    var quote = quotes[author];
    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}