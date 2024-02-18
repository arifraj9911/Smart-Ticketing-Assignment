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

function seatList(elementId) {
  elementId.addEventListener("click", function (event) {
    const specificSeat = event.target.innerText;
    const seat = getSeatId(specificSeat);
    if (!seatArray.includes(seat) && seatArray.length < 4) {
      seatArray.push(seat);
      setBackgroundColorById(seat);

      seatBooking.innerText = seatArray.length;

      const span = document.createElement("span");
      span.innerHTML = `
      <div class="flex justify-between">
      <span> ${seat} </span>
      <span>Economy</span>
      <span>550</span>
              </div>
              
      `;
      seatInformation.appendChild(span);

      totalPriceText.innerText = seatArray.length * seatPrice;
    } else if (seatArray.length >= 4) {
      alert("Maximum 4 Ticket can be buy for each");
    }
  });
}

// console.log(seatBooking);

function setBackgroundColorById(elementId) {
  const mouseClick = document.getElementById(elementId);
  mouseClick.classList.add("bg-[#1DD100]", "text-white");
}

function removeBackgroundColorById(elementId) {
  const mouseClick = document.getElementById(elementId);
  mouseClick.classList.remove("bg-[#1DD100]", "text-white");
}
