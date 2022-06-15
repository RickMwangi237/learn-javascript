function saveLead() {
    console.log("Button clicked from onclick attribute")
}

let inputbtn = document.getElementById("input-btn")

inputbtn.addEventListener("click", function(){
    console.log("Button clicked from event listener!")
})

