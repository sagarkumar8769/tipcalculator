window.onload = () => {
  /*calling calculate function*/
  document.querySelector('#calculate').onclick =
  calculateTip;
}
function calculateTip(){
  let amount = document.getElementById('billAmount').value;
  let tipPercent = document.getElementById('services').value;
  let NoofPerson = document.getElementById('splitAmong').value;
  // console.log(tipPercent);
  // console.log(NoofPerson);
  // console.log(amount);
  /*Alert if calculate is pressed without entering any value*/
  if(amount ==='' || tipPercent === 'Select'){
      alert("Please enter the valid values");
      return;
  }
  if(NoofPerson<="0"){
      alert("Invalid no of people");
      return;
  }
  if(NoofPerson>1){
      document.getElementById('output1').style.display = 'block';
  }
  // calculate total amount
  let total = (amount*tipPercent)/NoofPerson;
  total = total.toFixed(2);
  console.log(total);
  //display amount
  document.getElementById('output').innerHTML = `Your Tip : ` + total;
}