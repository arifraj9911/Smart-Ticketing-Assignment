function getSeatId(elementId) {
  const element = document.getElementById(elementId);
  const elementInnerText = element.innerText;
  return elementInnerText;
}

let seatArray = [];
function seatList(elementId) {
  elementId.addEventListener("click", function (event) {
    const specificSeat = event.target.innerText;
    const seat = getSeatId(specificSeat);
    if (!seatArray.includes(seat) && seatArray.length < 4) {
      seatArray.push(seat);
      setBackgroundColorById(seat);
    }else{
        alert('Maximum 4 Ticket can be buy for each');
    }
  });
}

function setBackgroundColorById(elementId) {
  const mouseClick = document.getElementById(elementId);
  mouseClick.classList.add("bg-[#1DD100]", "text-white");
}

function removeBackgroundColorById(elementId) {
  const mouseClick = document.getElementById(elementId);
  mouseClick.classList.remove("bg-[#1DD100]", "text-white");
}
