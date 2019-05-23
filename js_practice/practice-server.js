
// let testUrl =  'https://jsonplaceholder.typicode.com/posts';

// https://my-json-server.typicode.com/ 
// [good for my project]
// reqres.in

let url = 'https://reqres.in';
let startUrl = 'https://reqres.in/api/users?page=2';

let xhr = new XMLHttpRequest();
xhr.open('GET', startUrl, true);
xhr.send();
xhr.onreadystatechange = function() { 
  if (xhr.readyState != 4) return;
	let object;
  if (xhr.status != 200) {
    console.log(xhr.status + ': ' + xhr.statusText);
  } else {
  	object = JSON.parse(xhr.responseText);

  	for(let i = 0; i < object.data.length; i++) {
    	let innerXhr = new XMLHttpRequest();
    	innerXhr.open('GET', url + '/api/users/' + object.data[i].id, true);
    	innerXhr.send();
    	innerXhr.onreadystatechange = function() {
    		if (innerXhr.readyState != 4) return;
    		// innerXhr.responseText;
    		console.log(innerXhr.responseText);
    	}
  	}
  }
}


вывести на страницу данные из второго запроса как-нибудь