window.addEventListener("DOMContentLoaded", () => {
    let btnsDigit = document.querySelectorAll(".button.black");
    let tablo = document.getElementById("tablo");
    let btnsAction = document.querySelectorAll(".button.pink");
    let btnRes = document.querySelector(".button.orange");
    let btnResert = document.getElementById("resert");
    let btnMemoryAdd = document.getElementById("add");
    let btnMemoryClear = document.getElementById("clear");
    let btnMemoryShow = document.getElementById("show");

    let value1 = null;
    let action = "";
    let mem = "";
    let hasValue = false;

    for (const btnDigit of btnsDigit) {
        btnDigit.addEventListener("click", () => {
            if (!hasValue) {
                tablo.value += btnDigit.value;               
            } else {
                tablo.value = "";
                tablo.value += btnDigit.value;
                hasValue = false;
            } 
            tablo.style.textAlign = "right";
        })
    };

    function calculate(event) {
        if (!value1) {
            value1 = parseInt(tablo.value);
            tablo.style.textAlign = "right";
            tablo.value = "";
            action = event.target.value;
        } else {
            switch (action) {
                case "+": {
                    value1 = value1 + parseInt(tablo.value);
                };
                    break;
                case "-": {
                    value1 = value1 - parseInt(tablo.value);
                };
                    break;
                case "*": {
                    value1 = value1 * parseInt(tablo.value);
                };
                    break;
                case "/": {
                    value1 = value1 / parseInt(tablo.value);
                };
                    break;
            }
            action = event.target.value;
            tablo.value = value1;
            hasValue = true;
        }
    }

    for (const btnAction of btnsAction) {
        btnAction.addEventListener("click", calculate)
    };

    btnRes.addEventListener("click", calculate);

    btnResert.addEventListener("click", () =>{
        tablo.value = "";
        value1 = null;
        action = null;
    });

    btnMemoryClear.addEventListener("click", () => {
        mem = null;
    });

    btnMemoryAdd.addEventListener("click", () => {
        mem = parseInt(tablo.value);
        tablo.value = "";
        tablo.value = "m";
        tablo.style.textAlign = "left";
    });

    btnMemoryShow.addEventListener("click", () => {
        if (mem != null) {
            tablo.value = mem;
            tablo.style.textAlign = "right";
        }
    });
})

