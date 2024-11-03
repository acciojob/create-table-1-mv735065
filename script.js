function insert_Row() {
    //Write your code here
 let row=document.createElement("tr");
 	let cell1=document.createElement("td");
	cell1.innerHTML='New Cell1';
	row.append(cell1);
	let cell2=document.createElement("td");
	cell2.innerHTML='New Cell2';
	row.append(cell2);

	
   document.getElementById("sampleTable").prepend(row);
  
}

// document.querySelector("input").addEventListner('click',insert_Row);
