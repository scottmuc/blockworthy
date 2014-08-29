
var links = document.links;

var size = links.length
for(var i = 0; i < size; i++) {
  var link = links[i];

  if (link.hostname == "buzzfeed.com" || link.hostname == "www.buzzfeed.com") {
    link.href = "https://en.wikipedia.org/wiki/Clickbait";
    link.textContent = "SCRUBBED BY BLOCKWORTHY";
  }
}

