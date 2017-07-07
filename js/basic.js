function onElementClick(element, url) {
	element.addEventListener('click', function(url) {
		console.log(url);
		console.log(window.location.href);
	}, true);
}