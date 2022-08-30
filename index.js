const billValue = document.querySelector("#bill");
const cashPaid = document.querySelector("#cash-paid");
const calculateChange = document.querySelector("#btn-calculate");
const displayMessage = document.querySelector("#message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const notes = [2000, 500, 100, 20, 10, 5, 1];

calculateChange.addEventListener("click", () => {
  const billValueNumber = Number(billValue.value);
  const cashPaidNumber = Number(cashPaid.value);
  hideMessage();
  //   console.log(billValueNumber, cashPaidNumber);
  if (billValueNumber > 0) {
    if (cashPaidNumber >= billValueNumber) {
      const amountToBeReturned = cashPaidNumber - billValueNumber;
      calculateChangeAmount(amountToBeReturned);
      // } else if (cashPaid.value === billValue.value) {
      //   showMessage("No change needed");
    } else {
      showMessage("Do you want to wash plates? 😂");
    }
  } else {
    showMessage("invalid bill amount");
  }
});

const showMessage = (msg) => {
  displayMessage.style.display = "block";
  displayMessage.innerText = msg;
};

const hideMessage = () => {
  displayMessage.style.display = "none";
};

const calculateChangeAmount = (amountToBeReturned) => {
  for (let i = 0; i < notes.length; i++) {
    const noOfNotesToBeReturned = Math.trunc(amountToBeReturned / notes[i]);
    amountToBeReturned = amountToBeReturned % notes[i];
    noOfNotes[i].innerText = noOfNotesToBeReturned;
  }
  showMessage(`Here's your change`);
};
