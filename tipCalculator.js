//TIP AND BILL CALCULATOR

function billCalc() {
  const bill = Number(prompt("Enter the bill amount"));
  let tip;
  if (!bill || bill <0 ) {
    console.log("Please enter a valid bill amount!");
  } else {
    if (bill < 500) {
      tip = bill * 0.2;
    } else if (bill >= 500 && bill <= 2000) {
      tip = bill * 0.15;
    } else {
      tip = bill * 0.1;
    }
    console.log(
      `Your Bill :$ ${bill} \nYour Tip: $ ${tip}\nTotal : $ ${bill + tip}`,
    );
  }
}

billCalc();
