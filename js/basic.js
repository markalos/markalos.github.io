function onElementClick(element, url) {
	element.addEventListener('click', function(event) {
		window.location.href = url;
	}, true);
}