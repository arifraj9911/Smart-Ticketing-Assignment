function getSeatId(elementId) {
  const element = document.getElementById(elementId);
  const elementInnerText = element.innerText;
  return elementInnerText;
}

let seatArray = [];
const seatBooking = document.getElementById("seat-booking");
const seatInformation = document.getElementById("seat-information");

let seatPrice = 550;
const totalPriceText = document.getElementById("total-price");
let totalPrice = "";

const grandTotal = document.getElementById("grand-total");

const phoneNumber = document.getElementById("phone-number");
const nextButton = document.getElementById("next-button");

const totalAvailableSeat = document.getElementById("seat-available");
console.log(typeof totalAvailableSeat.innerText);
let totalSeat = parseInt(totalAvailableSeat.innerText);

function seatList(elementId) {
  elementId.addEventListener("click", function (event) {
    const specificSeat = event.target.innerText;
    const seat = getSeatId(specificSeat);
    if (!seatArray.includes(seat) && seatArray.length < 4) {
      seatArray.push(seat);
      setBackgroundColorById(seat);

      seatBooking.innerText = seatArray.length;

      //   available seat
      availableSeat = totalSeat - seatArray.length;
      totalAvailableSeat.innerText = availableSeat;

      //   seat information set
      const span = document.createElement("span");
      span.innerHTML = `
      <div class="flex justify-between">
      <span> ${seat} </span>
      <span>Economy</span>
      <span>550</span>
              </div>
              
      `;
      seatInformation.appendChild(span);

      //   total price set
      totalPriceText.innerText = seatArray.length * seatPrice;
      totalPrice = parseInt(totalPriceText.innerText);
      grandTotal.innerText = totalPrice;

      // Apply button
      const applyButton = document.getElementById("apply-button");
      if (seatArray.length === 4) {
        applyButton.removeAttribute("disabled");
      }

      apply();
    } else if (seatArray.length >= 4) {
      alert("Maximum 4 Ticket can be buy for each");
    }
  });
}

// console.log(seatBooking);

let setNumber = "";
phoneNumber.addEventListener("keyup", function (event) {
  const number = event.target.value;
  setNumber = number.toString();
  console.log(setNumber);
  //   check seat and phone number to enable button
  if (seatArray.length > 0 && setNumber.length === 11) {
    nextButton.removeAttribute("disabled");
  }
});

function apply() {
  let couponBox = document.getElementById("coupon-box");
  let couponField = document.getElementById("coupon-field").value;

  let couponFifteen = document.getElementById("coupon-fifteen");
  let couponTwenty = document.getElementById("coupon-twenty");

  // console.log(couponField)
  if (couponField === "NEW15") {
    const grandTotalPrice = totalPrice - 330;
    grandTotal.innerText = grandTotalPrice;
    couponFifteen.classList.remove("hidden");
    couponBox.classList.add("hidden");
  } else if (couponField === "Couple20") {
    const grandTotalPrice = totalPrice - 440;
    grandTotal.innerText = grandTotalPrice;
    couponTwenty.classList.remove("hidden");
    couponBox.classList.add("hidden");
  }
}

function setBackgroundColorById(elementId) {
  const mouseClick = document.getElementById(elementId);
  mouseClick.classList.add("bg-[#1DD100]", "text-white");
}

function removeBackgroundColorById(elementId) {
  const mouseClick = document.getElementById(elementId);
  mouseClick.classList.remove("bg-[#1DD100]", "text-white");
}
