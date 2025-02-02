let input = document.querySelector("input");
let btn = document.querySelector(".btn");
let result = document.querySelector(".result");

btn.addEventListener("click", () => {
  const birthdate = new Date(input.value);
  // console.log(birthdate);

  // if press button without enter any age
  if (birthdate == "Invalid Date") {
    result.innerHTML = "Enter Your BirthDate First...";
    return;
  }

  //get the year month date of birth
  const y1 = birthdate.getFullYear();
  const m1 = birthdate.getMonth() + 1;
  const d1 = birthdate.getDate();

  //get the today date month year
  const today = new Date();
  const d2 = today.getDate();
  const m2 = today.getMonth() + 1;
  const y2 = today.getFullYear();

  let y3, m3, d3;
  y3 = y2 - y1;
  m3 = m2 - m1;
  d3 = d2 - d1;

  // if days in negative 
  if (d3 < 0) {
    m3--;
    d3 += getDaysInMonth(y2, m2 - 1);
  }

  // if month in negative
  if (m3 < 0) {
    y3--;
    m3 += 12;
  }

  // if year in negative
  if (y3 < 0) {
    result.textContent = "Invalid birthdate Enter again...";
  } else {
    result.innerText = `your age is ${y3} years , ${m3} months and ${d3} days.`;
  }
});

//funtion for get the days in give year month
function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
