document.addEventListener('DOMContentLoaded', function () {
  // Get button by ID
  var button = document.getElementById('envato');
  button.onclick = () => {
    chrome.tabs.create(
      { url: `https://elements.envato.com/sign-in` }
    )
  }
});

