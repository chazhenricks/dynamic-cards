var inputText = document.getElementById("input-text");
var inputButton = document.getElementById("button");
var container = document.getElementById("container");


inputButton.addEventListener("click", function(event){
    container.innerHTML +=
        `<div class="card">
            <button type="button" class ="delete">DELETE</button>
        </div>`;
});
