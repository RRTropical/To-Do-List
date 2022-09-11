let AddToDoButton= document.getElementById("add")
let ToDoContainer = document.getElementById("toDoContainer")
let inputFeild = document.getElementById("inputFeild")

AddToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputFeild.value;
    ToDoContainer.appendChild(paragraph);
    inputFeild.value = "";
    paragraph.addEventListener("mouseenter", function(){
        paragraph.style.textDecoration = "line-through"
    })
    paragraph.addEventListener("mouseleave", function(){
        paragraph.style.textDecoration = ""
    })
    paragraph.addEventListener("click", function(){
        ToDoContainer.removeChild(paragraph);
    })
})