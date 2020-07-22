//we are putting data.js into a variable, tableData
var tableData = data;

// We are getting dom obj on the basis of id and put that into a variable
var table  = document.getElementById('table-body');
//we are intializing a variable 
var firstdata = '';

// this for loop sets a counter at 0 and loops through every row

for(i =0 ; i < tableData.length; i++){

//this is the data i am filling the table with
  firstdata += `<tr>
  <td>${tableData[i].datetime}</td> 
  <td>${tableData[i].city}</td>
  <td>${tableData[i].state}</td>
  <td>${tableData[i].country}</td>
  <td>${tableData[i].shape}</td>
  <td>${tableData[i].durationMinutes}</td>
  <td>${tableData[i].comments}</td>

              </tr>`;
}

table.innerHTML = firstdata;
function filterbydate(){
var date = document.getElementById('datetime').value;

table.innerHTML = '';
var firstdata = '';

for(i =0 ; i < tableData.length; i++){

    if(date == tableData[i].datetime ){
        firstdata += `<tr>
        <td>${tableData[i].datetime}</td> 
        <td>${tableData[i].city}</td>
        <td>${tableData[i].state}</td>
        <td>${tableData[i].country}</td>
        <td>${tableData[i].shape}</td>
        <td>${tableData[i].durationMinutes}</td>
        <td>${tableData[i].comments}</td>
      
                    </tr>`;
    }
    table.innerHTML = firstdata;
}
}