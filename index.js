const input = document.getElementById('input');

function addingEventListener() {  
  input.addEventListener('click', function(event) {
    alert('I was clicked!');
  });
}

addingEventListener();


//learnco solution
// const input = document.querySelector('input');

// function addingEventListener() {
//   input.addEventListener('click', function(event) {
//     return "clicked"
//   });
// }