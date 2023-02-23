const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let numberOfoperation = 1;



let clickBtn = document.querySelector(".click");
let na = document.querySelector(".name");
let inp = document.querySelector(".inp");
let li = document.querySelectorAll(".li");


//


li.forEach((e) => {
    e.addEventListener("click", () => {
        numberOfoperation = e.dataset.n;
        sw()
    })
})

//


function sw() {
    if (numberOfoperation == 1) {
        inp.classList.add("nun");
        na.classList.remove("nun")
    } else if (numberOfoperation == 2) {
        inp.classList.remove("nun");
        na.classList.add("nun")
    }
}




// 

clickBtn.addEventListener("click", () => {
    let color = "#";
    if (numberOfoperation == 1) {
        for (let i = 0; i < 6; i++) {
            color += hex[Math.floor(Math.random() * hex.length)]
        };
        console.log(color);
        document.body.style.backgroundColor = color;
        na.innerHTML = color;
        na.style.color = color;
    } else if (numberOfoperation == 2) {
        let s = inp.value;
        color += s;
        document.body.style.backgroundColor = color;
        na.innerHTML = color;
        na.style.color = color;
        inp.value = ""
    }

});



