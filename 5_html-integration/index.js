console.log("Hello JavaScript!");

function displayAlert() {
  const currentDate = new Date();

  alert(currentDate.toDateString("sv-SE"));

  document.getElementsByTagName("div")[2].remove();
}

document.getElementById("clickME").addEventListener("click", displayAlert);
//document.getElementById("clickME").addEventListener("click", (e) => displayAlert(e));
