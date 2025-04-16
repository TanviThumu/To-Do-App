let inp = document.querySelector("input");
let add = document.querySelector("#add");
let ul = document.querySelector("ul");

add.addEventListener("click", function(){

    if(inp.value == ""){
        alert("Enter task before 'add'");
    }
    else{
        
        let item = document.createElement("li");
        item.innerText = inp.value;

        let delBtn = document.createElement("button");
        delBtn.classList.add("delete");
        delBtn.innerText = "Delete";

        item.appendChild(delBtn);
        ul.appendChild(item);
        inp.value = "";
    }

});

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let item = event.target.parentElement;
        item.remove();
    }
});