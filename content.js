var logoHasBeenModified = false;
var observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (!mutation.addedNodes || logoHasBeenModified) {
      return;
    }
    const element = document.querySelector('[aria-label="Twitter"]');
    if (element) {
      logoHasBeenModified = true;
      element.children[0].innerHTML = `<img class='x-to-twitter-logo' src="img/xzibit-a.png?raw=true">`
    }
  });
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});