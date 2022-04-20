document.addEventListener('DOMContentLoaded', function () {
  // Get button by ID
  var button = document.getElementById('spotify');
  button.onclick = () => {
    chrome.tabs.create(
      { url: `https://accounts.spotify.com/` }
    )
  }
});

