
(function () {
	var addButton = document.querySelector('.btn-add');
	var deleteButton = document.querySelector('.btn-delete');
	var clickCounter = document.querySelector('#click-counter');
	var apiUrl = appUrl + '/api/:id/clicks';


	function updateClickCount (data) {                    
		var clicksObject = JSON.parse(data);
		clickCounter.innerHTML = clicksObject.clicks;
	}

	ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrl, updateClickCount))

	addButton.addEventListener('click', function() {

		ajaxFunctions.ajaxRequest('POST', apiUrl, function() {
			ajaxFunctions.ajaxRequest('GET', apiUrl, updateClickCount); 
		});

	}, false);


	deleteButton.addEventListener('click', function() {
		ajaxFunctions.ajaxRequest('DELETE', apiUrl, function() {
			ajaxFunctions.ajaxRequest('GET', apiUrl, updateClickCount);
		});
	}, false);

})();