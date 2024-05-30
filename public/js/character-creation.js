document
  .getElementById("characterbtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("validation");
    // window.location.href = "/character";
    document.location.replace("/character");
  });
