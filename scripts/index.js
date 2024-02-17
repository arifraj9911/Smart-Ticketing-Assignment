function getSeatId(elementId) {
  const element = document.getElementById(elementId);
  const elementInnerText = element.innerText;
  return elementInnerText;
}

function setBackgroundColorById(elementId) {
  const mouseClick = document.getElementById(elementId);
  mouseClick.classList.add("bg-[#1DD100]", "text-white");
}

function removeBackgroundColorById(elementId) {
  const mouseClick = document.getElementById(elementId);
  mouseClick.classList.remove("bg-[#1DD100]", "text-white");
}

const seatListOne = document.getElementById("seat-list-one");
// console.log(seatListOne);
let seatArray = [];

seatListOne.addEventListener("click", function (event) {
  const specificSeat = event.target.innerText;
  const seat = getSeatId(specificSeat);
  if (!seatArray.includes(seat) && seatArray.length < 4) {
    seatArray.push(seat);
    setBackgroundColorById(seat);
  }else{
    removeBackgroundColorById(seat);
  }
  // seatArray.pop(seat);

  console.log(seatArray);

  // const seatBg = setBackgroundColorById(seat);
  //   if (seatArray.length < 4) {
  //     setBackgroundColorById(seat);
  //   }

  // if(seatArray.includes(seat)){
  //     removeBackgroundColorById(seat);
  //     // seatArray.shift(seat);
  // }

  console.log(seat);

  // specificSeat.classList.add('bg-[#1DD100]','text-white');
});
