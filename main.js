let display = document.getElementById("display")
let buttons = document.querySelectorAll("button")
buttons.forEach((btn) => {
    btn.addEventListener("click" , function(){
        if (btn.id === "=") {
          display.value = eval(display.value)
        } else if (btn.id === "clr") {
          display.value = "";
        } else if (btn.id === "de") {
          display.value = display.value.toString().slice(0,-1)
        } else {
          display.value += btn.id
        }
    })
})