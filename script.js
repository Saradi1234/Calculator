let input = document.getElementById("input");
let buttons = Array.from(document.getElementsByTagName("button"));

buttons.map(btn => {
    btn.onclick = (e) => {

        switch (e.target.innerText) {
            case "=":
                input.innerText = eval(input.innerText);
                break;
            case "AC":
                input.innerText = "";
                break;
            case 'DEL':
                input.innerText = input.innerText.toString().slice(0, -1);
                break;
            default:
                input.innerText += e.target.innerText;
        }
    }
})