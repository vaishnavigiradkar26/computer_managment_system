const api_url = "https://vaishnavi-computer-database.herokuapp.com/user"

function loadData(records = []) {
	var table_data = "";
	for(let i=0; i<records.length; i++) {
		table_data += `<tr>`;
		table_data += `<td>${records[i].client_name}</td>`;
		table_data += `<td>${records[i].store}</td>`;
		table_data += `<td>${records[i].desktop_laptop}</td>`;
		table_data += `<td>${records[i].price}</td>`;
		table_data += `<td>${records[i].model_number}</td>`;
		table_data += `<td>`;
		table_data += `<a href="edit.html?id=${records[i]._id}"><button class="btn btn-primary">Edit</button></a>`;
		table_data += '&nbsp;&nbsp;';
		table_data += `<button class="btn btn-danger" onclick=deleteData('${records[i]._id}')>Delete</button>`;
		table_data += `</td>`;
		table_data += `</tr>`;
	}
	//console.log(table_data);
	document.getElementById("tbody").innerHTML = table_data;
}

function getData() {
	fetch(api_url)
	.then((response) => response.json())
	.then((data) => { 
		console.table(data); 
		loadData(data);
	});
}


function getDataById(id) {
	fetch(`${api_url}/${id}`)
	.then((response) => response.json())
	.then((data) => { 
	
		console.log(data);
		document.getElementById("id").value = data._id;
		document.getElementById("client_name").value = data.client_name;
		document.getElementById("store").value = data.store;
		document.getElementById("desktop_laptop").value = data.desktop_laptop;
		document.getElementById("price").value = data.price;
		document.getElementById("model_number").value = data.model_number;
	})
}


function postData() {
	var client_name = document.getElementById("name").value;
	var store = document.getElementById("age").value;
	var desktop_laptop = document.getElementById("desktop_laptop").value;
	var price = document.getElementById("price").value;
	var model_number= document.getElementById("model_number").value;
	
	data = {client_name: client_name, store: store, desktop_laptop: desktop_laptop, price: price, model_number:model_number};
	
	fetch(api_url, {
		method: "POST",
		headers: {
		  'Accept': 'application/json',
		  'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	.then((response) => response.json())
	.then((data) => { 
		console.log(data); 
		window.location.href = "index.html";
	})
}	


function putData() {
	
	var _id = document.getElementById("id").value;
	var client_name = document.getElementById("client_name").value;
	var store = document.getElementById("store").value;
	var desktop_laptop = document.getElementById("desktop_laptop").value;
	var price = document.getElementById("price").value;
	var model_number = document.getElementById("model_number").value;
	
	data = {_id: _id, client_name: client_name, store: store,desktop_laptop: desktop_laptop,price: price, model_number: model_number};
	
	fetch(api_url, {
		method: "PUT",
		headers: {
		  'Accept': 'application/json',
		  'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	.then((response) => response.json())
	.then((data) => { 
		console.table(data);
		window.location.href = "index.html";
	})
}


function deleteData(id) {
	user_input = confirm("Are you sure you want to delete this record?");
	if(user_input) {
		fetch(api_url, {
			method: "DELETE",
			headers: {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify({"_id": id})
		})
		.then((response) => response.json())
		.then((data) => { 
			console.log(data); 
			window.location.reload();
		})
	}
}
