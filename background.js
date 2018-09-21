
chrome.tabs.query({}, function(tab) {
  let activeTab = tab.find(t=> t.active);
  console.log(activeTab);

  // alert("active tab: " + activeTab.url);
});
