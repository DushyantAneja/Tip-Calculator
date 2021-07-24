const sliders = document.querySelectorAll("input[type='range']");
sliders.forEach(function(slider){
    slider.addEventListener("input",calculateTip);
});

const billInput = document.getElementById("bill");
billInput.addEventListener("change",calculateTip);

//this is the main fn(CalculateTip)--> the whole logic is writeen inside it 
//about the tip per person ,total per person
//total amount and total tip
function calculateTip(){
    let bill = parseFloat(billInput.value);
    //getting the id for tip%
    let tipPercent = document.getElementById("tip").value;
    //getting the id for no of people
    let noOfPeople = document.getElementById("no-of-people").value;
    //fixing the value upto 2 decimal digit range
    billInput.value = bill.toFixed(2);
    //logic for calculating totalTip 
    let totalTip = parseFloat((bill * (tipPercent/100)).toFixed(2));
    //calculating total amount including the tip also
    let total = parseFloat((bill + totalTip).toFixed(2));
    //calculating tip per tipPerPerson
    let tipPerPerson = (totalTip / noOfPeople).toFixed(2);
    //calculating total amount per person
    let totalPerPerson = (total / noOfPeople).toFixed(2);

    document.getElementById("tip-amount").textContent = `\$ ${totalTip}`;
    document.getElementById("total-amount").textContent = `\$ ${total}`;
    
    document.getElementById("tip-percent").textContent = `${tipPercent}%`;
    document.getElementById("split-num").textContent = noOfPeople;

    document.getElementById("tip-per-person").textContent = `\$ ${tipPerPerson}`;
    document.getElementById("total-per-person").textContent = `\$ ${totalPerPerson}`;
}
//calling up of function calculateTip() for getting the output
calculateTip();