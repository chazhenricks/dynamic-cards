var inputText = document.getElementById("input-text");
var inputButton = document.getElementById("button");
var container = document.getElementById("container");


function changeClass(){
    var cards = document.getElementsByClassName("delete");
    for (var i=0;i<cards.length;i++){
        cards.item(i).addEventListener("click", function(event){
            var remove = event.target.parentNode;
            remove.parentNode.removeChild(remove);
        });
    }
}



inputButton.addEventListener("click", function(event){
    container.innerHTML +=
        `<div class="card">
            <p>${inputText.value}</p>
            <button type="button" class ="delete">DELETE</button>
        </div>`;
        changeClass();
});




