window.addEventListener("DOMContentLoaded", () => {
    let btnsDigit = document.querySelectorAll(".button.black");
    let tablo = document.getElementById("tablo");
    let btnsAction = document.querySelectorAll(".button.pink");
    let btnRes = document.querySelector(".button.orange");
    let btnResert = document.getElementById("resert");
    let btnsMemory = document.querySelectorAll(".gray-m");
    let btnMemoryClear = document.getElementById("clear");
    console.log("Andrew js")
    let value1 = "";
    let value2 = "";

    let val = null;
    let buf = null;

    let action = "";
    let res = "";
    let flag = true;
    let needClear = false;

    for (const btnDigit of btnsDigit) {
        btnDigit.addEventListener("click", () => {
            if (needClear) {
                clear();
                
            }

            tablo.value += btnDigit.value;
        })
    };

    for (const btnAction of btnsAction) {
        btnAction.addEventListener("click", () => {
            actionClicked(btnAction.value);
        })
    };

    function actionClicked(sign) {
        val = parseInt(tablo.value);
        if (buf == null) {
            buf = val;

        }
        else {
            switch (sign) {
                case "+": {
                    buf = buf + val;

                };
                    break;
                case "-": {
                    buf = buf - val;

                };
                    break;
                case "*": {
                    buf = buf * val;

                };
                    break;
                case "/": {
                    buf = buf / val;

                };
                    break;

            }
            //show(buf);
        }
        show(buf);
    }

    function show(number) {
        tablo.value = number;
        needClear = true;
    }
    function clear(){
        tablo.value = null;
        needClear = false;
    }

    btnRes.addEventListener("click", () => {

    });

    btnResert.addEventListener("click", () => {
        tablo.value = "";
    });

    for (const btnMemory of btnsMemory) {
        btnMemory.addEventListener("click", function () {
            tablo.value = "";
            value1 = res;
            tablo.value = "m";
            tablo.style.textAlign = "left";
        })
    };

    btnMemoryClear.addEventListener("click", () => {
        if (flag == true) {
            tablo.value = res;
            value1 = res;
            tablo.style.textAlign = "right";
            flag = false;
        } else {
            tablo.value = "";
            flag = true;
        }
    });

})

