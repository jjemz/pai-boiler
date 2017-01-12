
(function () {
	var addButton = document.querySelector('.btn-add');
	var deleteButton = document.querySelector('.btn-delete');
	var clickCounter = document.querySelector('#click-counter');
	//var apiUrl = 'http://localhost:8080/api/clicks'
	var apiUrl = window.location.href + 'api/clicks';
	console.log(apiUrl);

	function ready (fn) {


		if (typeof fn !== 'function'){
			return;
		}

		if (document.readyState === 'complete') {
			return fn();
		}

		document.addEventListener('DOMContentLoaded', fn, false);
	}

	function ajaxRequest (method, url, callback) {
		var xmlhttp = new XMLHttpRequest();

		xmlhttp.onreadystatechange = function () {
			if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
				callback(xmlhttp.response);  // { clicks: #num }
			}
		};

		xmlhttp.open(method, url, true);
		xmlhttp.send();
	}

	function updateClickCount (data) {                    
		var clicksObject = JSON.parse(data);
		clickCounter.innerHTML = clicksObject.clicks;
	}

	addButton.addEventListener('click', function() {

		ajaxRequest('POST', apiUrl, function() {
			ajaxRequest('GET', apiUrl, updateClickCount); //A
		});

	}, false);


	deleteButton.addEventListener('click', function() {

		ajaxRequest('DELETE', apiUrl, function() {
			ajaxRequest('GET', apiUrl, updateClickCount);
		});
	}, false);

})();