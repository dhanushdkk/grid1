function remove(){
    document.getElementById("box").classList.remove("a1")
    document.getElementById("box").classList.remove("a2")
    document.getElementById("box").classList.remove("a3")
    document.getElementById("first-box").classList.remove("box11")
    document.getElementById("middle-box").classList.remove("box21")
    document.getElementById("last-box").classList.remove("box31")
    document.getElementById("first-box").classList.remove("box12")
    document.getElementById("middle-box").classList.remove("box22")
    document.getElementById("last-box").classList.remove("box32")
}

const first = document.querySelector(".first-box");
animateCSSGrid.wrapGrid(first-box,{
    duration:700
});

const second = document.querySelector(".middle-box");
animateCSSGrid.wrapGrid(middle-box,{
    duration:700
});

const third = document.querySelector(".last-box");
animateCSSGrid.wrapGrid(last-box,{
    duration:700
});


function b1() {
    remove();
    document.getElementById("box").classList.add("a1");
    document.getElementById("first-box").classList.add("box11");
}

function b2() {
    remove();
    document.getElementById("box").classList.add("a1");
    document.getElementById("first-box").classList.add("box12");
}
function b3() {
    remove();
    document.getElementById("box").classList.add("a2");
    document.getElementById("middle-box").classList.add("box21");
}
function b4() {
    remove();
    document.getElementById("box").classList.add("a2");
    document.getElementById("middle-box").classList.add("box22");
}
function b5() {
    remove();
    document.getElementById("box").classList.add("a3");
    document.getElementById("last-box").classList.add("box31");
}
function b6() {
    remove();
    document.getElementById("box").classList.add("a3");
    document.getElementById("last-box").classList.add("box32");
}