function save_options() {
  var domains = document.getElementById('domains').value.split("\n");
  console.log(domains);
  chrome.storage.local.set({
    'blockworthy_domains': JSON.stringify(domains)
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function restore_options() {
  chrome.storage.local.get({
    'blockworthy_domains': JSON.stringify(['buzzfeed.com', 'viralnova.com', 'upworthy.com'])
  }, function(items) {
    domains_text = JSON.parse(items.blockworthy_domains).join("\n");
    document.getElementById('domains').value = domains_text;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
