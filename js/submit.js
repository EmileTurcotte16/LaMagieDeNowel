// JavaScript Document
window.addEventListener("load", function() {
	const form = document.getElementById('cForm');
	form.addEventListener("submit", function() {
		setTimeout(function(e) {
			e.preventDefault();
			const data = new FormData(form);
			const action = e.target.action;
			fetch(action, {
				method: 'POST',
				body: data,
			})
			.then(() => {
				alert("Success!");
			})
		}, 3000);
	})
})