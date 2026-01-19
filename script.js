const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
			let prices=document.querySelectorAll(".prices")
            let total = 0;
	      for(let i = 0;i<prices.length;i++){
		   total+= Number (prices[i].innerText);
		  }
		let table=document.querySelector("table")
		let newrow = document.createElement("tr")
		let datatable1 = document.createElement("td")
	    let datatable2 = document.createElement("td")
			  
			  // datatable.innerText = "total prices:"  + total;
			  // newrow.append(datatable1,datatable2)
			  // table.append(newrow)
			  datatable1.innerText = "total prices :"
			  datatable2.innerText = total;
	           newrow.append(datatable1,datatable2)
			   table.append(newrow)
	
};

getSumBtn.addEventListener("click", getSum);

