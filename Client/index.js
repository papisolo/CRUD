

console.log("welcome to my app")
document.addEventListener('DOMContentLoaded', giveAll)

async function giveAll ()  {
  await fetch("http://localhost:3000/users")
   .then(response => response.json())
   .then(data => loadHtml(data) )
   
   
}



function loadHtml(data) {const tableHtml = document.querySelector('.dynamic');
    let tabledata = "";
    if(data.length === 0){
     const table = "<tr><td colspan = '7'> No data</td></tr>"
  tableHtml.innerHTML= table 
}

data.forEach(function(e){
    tabledata += "<tr>";
tabledata +=`<td>${e.id}</td>`;
tabledata +=`<td>${e.First_Name}</td>`;
tabledata +=`<td>${e.Last_Name}</td>`;
tabledata +=`<td>${e.Email}</td>`;
tabledata +=`<td>${e.Phone_Number}</td>`
tabledata +=`<td><button class = 'delete-btn' id = ${e.id}>delete</button></td>`;
tabledata +=`<td><button class = 'edit-btn' id= ${e.id}>edit</button></td>`;
tabledata +=  "</tr>";

tableHtml.innerHTML= tabledata

})



}


 function queryInput(){
    const button = document.querySelector('.name-btn-input')
    button.onclick = async  () => {
        const Input = document.querySelector('.name-input')
        const InputValue = Input.value;
      Input.value = ""

       await fetch("http://localhost:3000/post", {headers:{
            'content-type' : "application/json"},
            method          : "POST",
            body            : JSON.stringify({id:2,
                name : InputValue,
            surname: "Aleakhue",
        number:"08160549668",
    dateAdded:"0000-00-00"})
        }) 
    .then(response => response.json())
    .then(data =>  insertIntoTable(data))

    }

    
}

queryInput()


function insertIntoTable(data){
    const tableHtml = document.querySelector('.dynamic');
    let tabledata = "";
    let table = "<tr> <td colspan= '5' class = 'no-data'> data base empty </td></tr>"
     
   let isEmpty = tableHtml.querySelector('.no-data')

data.forEach(function(e){
    tabledata += "<tr>";
tabledata +=`<td>${e.id}</td>`;
tabledata +=`<td>${e.name}</td>`;
tabledata +=`<td>${e.surname}</td>`;   
tabledata +=`<td>${e.number}</td>`;
tabledata +=`<td>${e.dateAdded}</td>`;
tabledata +=`<td><button class = 'delete-btn' id = ${e.id}>delete</button></td>`;
tabledata +=`<td><button class = 'edit-btn' id= ${e.id}>edit</button></td>`;
tabledata +=  "</tr>";

if(isEmpty)
{isEmpty.innerHTML= tabledata}
else{ const newRow = tableHtml.insertRow();
newRow.innerHTML= tabledata}
})
}


const btn = document.querySelector('.dynamic')
btn.onclick = async (events) => {
if(events.target.className === 'delete-btn')
{deleteRow(events.target.id) };

if(events.target.className === 'edit-btn'){
    document.querySelector('.hidden-text').hidden = false;
    const btn = document.querySelector('.edit-btn-input');

    btn.onclick = function(){const edit = document.querySelector('.edit-input');
    const editValue = document.querySelector('.edit-input').value;
    edit.value = ""

    }
   
}
}


 async function deleteRow(id){
     await fetch("http://localhost:3000/delete/" + id, {method : "DELETE"})
    .then(response => response.json())
    .then(data => {if(data.success)
    location.reload()} )
    
}

const searchBtn = document.querySelector('.search-btn-input')
searchBtn.onclick=  async () =>  {
    const searchInput = document.querySelector('.search-input')
    const searchValue = searchInput.value
    console.log(searchValue)
    searchInput.value = ""
    await fetch("http://localhost:3000/retrieve/" + searchValue)
    .then(response => response.json())
    .then(data =>  displaySearch(data))
    
}
function displaySearch(data){
    const tableHtml = document.querySelector('.dynamic');
    let tabledata = "";
    let table = "<tr> <td colspan= '5' class = 'no-data'> data base empty </td></tr>"
     
   let isEmpty = tableHtml.querySelector('.no-data')

data.forEach(function(e){
    tabledata += "<tr>";
tabledata +=`<td>${e.id}</td>`;
tabledata +=`<td>${e.First_Name}</td>`;
tabledata +=`<td>${e.Last_Name}</td>`;   
tabledata +=`<td>${e.Email}</td>`;
tabledata +=`<td>${e.Phone_Number}</td>`;
tabledata +=`<td><button class = 'delete-btn' id = ${e.id}>delete</button></td>`;
tabledata +=`<td><button class = 'edit-btn' id= ${e.id}>edit</button></td>`;
tabledata +=  "</tr>";

tableHtml.innerHTML= tabledata

})
}