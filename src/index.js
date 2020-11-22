let addToy = false;


// function fetchToys(){
//   return fetch("http://localhost:3000/toys/:id", {
//     method: "POST",
//     header: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify({
//       name
//     })
//   })

function fetchToys(){
  return fetch("http://localhost:3000/toys")
  .then(function(response){
    return response.json()
  })
  .then(function(object){
    console.log(object)
  })
}

function renderToys

document.addEventListener("DOMContentLoaded", () => {
  fetchToys()


  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });



});
