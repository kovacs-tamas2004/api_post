fetch('https://jsonplaceholder.typicode.com/posts ', { 
  method: "POST", 
  body: JSON.stringify({
       title: "cim", 
       body: "tartalom", 
       userId:1 
  }), 
  headers: {"Content-type": "application/json; charset=UTF-8"} 
}) 
  .then(response => response.json()) 
  .then(json => console.log(json))
  .catch(err => console.log(err));


fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(adat => {
        let tabla = `<table> <tr> <th> userId </th> <th> Id </th> <th> Title </th> <th> Body </th></tr>`
        for(value of adat){
            tabla +=
            `<tr><td>${value.userId}</td> <td>${value.id}</td> <td>${value.title}</td> <td>${value.body}</td></tr>`;
        }
        document.getElementById("eredmeny").innerHTML += tabla + `</table>`;
    })
    .catch(error => console.error("Hiba!" + error));