document.addEventListener('DOMContentLoaded', function() {
  var checkHighlightedButton = document.getElementById('checkHighlighted');
  checkHighlightedButton.addEventListener('click', function() {
    var text = prompt ("Enter word to thesaurize", "enter word here");
	window.open ("http://www.thesaurus.com/browse/" + text);
  }, false);
}, false);

