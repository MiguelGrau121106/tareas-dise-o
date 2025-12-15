let displayText = document.getElementById("display-text");

let buttons = document.querySelectorAll(".btn");

displayText.textContent = "";
buttons.forEach(button => {
    button.addEventListener("click", () => {
        displayText.textContent += button.textContent;
        if(button.textContent === "C") {
            displayText.textContent = "";
        }
        if(button.textContent === "CE") {
            displayText.textContent = displayText.textContent.slice(0, -1);
        }
        if(button.textContent === "RM") {
            displayText.textContent = "";
        }
        if(button.textContent === "M+") {
            displayText.textContent = "";
        }
        if(button.textContent === "M-") {
            displayText.textContent = "";
        }
        
    });
});

document.addEventListener("keydown", (event) => {
    if(event.key === "Enter") {
        event.preventDefault();
        let result = displayText.textContent;
        result = result.replace("X", "*");
        displayText.textContent = "";
        displayText.textContent = eval(result);
    }
});