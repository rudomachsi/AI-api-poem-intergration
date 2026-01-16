function displayPoem(response) {
//Display the generated poem

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}


function generatePoem(event) {
  event.preventDefault();

  //build the API URL
  let apiKey = "b4tba9bff663492fbddb13d5a4800eo6";
  let prompt = ""
  let context= ""
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  
  //Make a call to the API

axios.get(apiURL).then(displayPoem);
}
  

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);