(function(window) {
	const domain = '192.168.1.158';
	const port = '8080';
	const zipcode = 94606; 
	console.log("New Patrick Domain: ", domain);

	const script = document.createElement('script');

	script.src = '//' + domain + ':' + port + '/module/app/addFiles.js?zipcode=' + zipcode;
	script.async = true;

	const includeScript = document.getElementsByTagName('script')[0];

	includeScript.parentNode.insertBefore(script, includeScript);
})(window);
