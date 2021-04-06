document.addEventListener("DOMContentLoaded", () => {
  // your code here
// initialize task list
let form = document.getElementById("create-task-form");

  form.addEventListener("submit", function(e){
    e.preventDefault()

    let newTaskDescription = e.target[0].value

    let li = document.createElement('li')
    li.innerText = `${newTaskDescription}`

    let ul = document.getElementById('tasks')
    ul.append(li)

    let button = document.createElement('button')
    button.innerHTML = "Remove"
    button.addEventListener('click', function(e){
      ul.removeChild(ul.childNodes)
    })
    li.append(button)
  })

}); 
