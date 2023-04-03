let addToy = false;


let toyCollection = document.querySelector("#toy-collection")


document.addEventListener('DOMContentLoaded', () =>{
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
})
  let toyForm = document.querySelector(".add-toy-form");
  toyForm.addEventListener('submit', (e) => {
  e.preventDefault()
    let newToy = {
      
    }
  })
})























// document.addEventListener("DOMContentLoaded", () => {
//   const addBtn = document.querySelector("#new-toy-btn");
//   const toyFormContainer = document.querySelector(".container");
//   addBtn.addEventListener("click", () => {

//     // hide & seek with the form
//     addToy = !addToy;
//     if (addToy) {
//       toyFormContainer.style.display = "block";

//     } else {
//       toyFormContainer.style.display = "none";

//     }
//     let toyForm = document.querySelector(".add-toy-form");
//     toyForm.addEventListener('submit', (e) => {
//       e.preventDefault()
//       let newToy = {
//         name: e.target.name.value,
//         image: e.target.image.value,
//         likes: 0
//       }
//       postToy(newToy)
//     })
//     fetch('http://localhost:3000/toys')
//       .then((res) => res.json())
//       .then((data) =>
//       {data.forEach(function (toy){
//         })
//         renderToy(data)
//       })
//   });
//   });



// function renderToy(toys) {
//   toys.forEach(function (toy) {

//     let newToy = document.createElement('div')
//     newToy.className = "card"

//       let newToyHeader = document.createElement('h2')
//       newToyHeader.textContent = toy.name;

//       let newToyImage = document.createElement('img')
//       newToyImage.className = "toy-avatar"
//       newToyImage.src = toy.image

//       let newToyLikes = document.createElement('p')
//       newToyLikes.textContent = `Likes: ${toy.likes}`

//       let newToyBtn = document.createElement('button')
//       newToyBtn.className = "like-btn"
//       newToyBtn.textContent = "Like"
//       newToyBtn.id = `${toy.id}`
//       newToyBtn.addEventListener('click' ,() =>{
//         toy.likes++;
//         newToyLikes.textContent = `Likes: ${toy.likes}`
//         fetch(`http://localhost:3000/toys/${toy.id}`, {
//         method:'PATCH',
//         headers: {"Content-Type" : "Application/json"},
//         body: JSON.stringify(toy)
//       })
//         .then(res => res.json())
//         .then(toy => console.log(toy))
//       })

//       newToy.append(newToyHeader, newToyImage, newToyLikes, newToyBtn)
//       toyCollection.append(newToy)
//   })
// }

// function postToy(toy){
//   fetch('http://localhost:3000/toys', {
//     method: 'POST',
//     headers: {"Content-Type":"Application/json"},
//     body: JSON.stringify(toy)
//   })
//     .then((res) => res.json())
//     .then((data) => renderToy([data]))
//     .catch(function (error){
//       console.log("Sadly a toy didnt make it... here's why,", error)
//     })

// }
