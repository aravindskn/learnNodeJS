const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message");
const messageTwo = document.querySelector("#loading");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;
  messageTwo.textContent = "Loading....";
  messageOne.textContent = "";
  fetch("http://localhost:8080/weather?address=" + location)
    .then((res) => {
      res.json().then((data) => {
        if (data.error) {
          messageTwo.textContent = "";
          messageOne.textContent = data.error;
        } else if (data.GeoCodeError) {
          messageTwo.textContent = "";
          messageOne.textContent = data.GeoCodeError;
        } else {
          messageTwo.textContent = "Location: " + data[0].location;
          messageOne.textContent = "Forecast is: " + data[0].forecast;
        }
      });
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
});
