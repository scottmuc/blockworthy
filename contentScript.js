
function domain_is_blockworthy(domain) {
  var blockworthy_domains = [
    "buzzfeed.com",
    "viralnova.com",
    "upworthy.com"
  ];

  for(var i = 0; i < blockworthy_domains.length; i++) {
    blockworthy_domain = blockworthy_domains[i];
    if (domain == blockworthy_domain || domain == "www." + blockworthy_domain) {
      return true;
    }
  }

  return false;
}

function scrub(link) {
  link.href = "https://en.wikipedia.org/wiki/Clickbait";
  link.textContent = "SCRUBBED BY BLOCKWORTHY";
}


var links = document.links;
var size = links.length

for(var i = 0; i < size; i++) {
  var link = links[i];
  if (domain_is_blockworthy(link.hostname)) {
    scrub(link);
  }
}

