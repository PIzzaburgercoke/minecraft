let getFactButton = document.getElementById("add-facts");
getFactButton.addEventListener('click' , function() {
  let facts = document.getElementById('facts')
  let newFact = prompt('Enter a new fact:')
  let createListItem = document.createElement('li')
  createListItem.textContent = newFact
  facts.appendChild(createListItem)
})

// Image Slider
let images = ['images/mcdonald.png', 'images/fair.png', 'images/hot air ballon.png', 'images/modern boat.png', 'images/school.png', 'images/zoo.png'] // array
let currentIndex = 0

function changeImage(direction) { // Tool to use to complete a specific task
  if (direction == 'next') {
    currentIndex = (currentIndex + 1) % images.length
  }
  // Make an if-statement that uses 'prev' to go  backwards
   if (direction == 'prev') {
     currentIndex = (currentIndex - 1 + images.length) % images.length
   }
  let picture = document.getElementById('picture')
  picture.src = images[currentIndex]
}

// event lisieners for left and right arrows
document.getElementById('left').addEventListener('click',function() {
  changeImage('prev')
})

document.getElementById('right').addEventListener('click',function() {
  changeImage('next')
})