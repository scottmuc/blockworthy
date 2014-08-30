var default_blockworthy_domains = [
  "buzzfeed.com",
  "viralnova.com",
  "upworthy.com"
];

function domain_is_blockworthy(blockworthy_domains, domain) {
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

chrome.storage.local.get({
  'blockworthy_domains': default_blockworthy_domains
}, function(options) {
  var links = document.links;
  var size = links.length

  for(var i = 0; i < size; i++) {
    var link = links[i];
    if (domain_is_blockworthy(options.blockworthy_domains, link.hostname)) {
      scrub(link);
    }
  }
});

