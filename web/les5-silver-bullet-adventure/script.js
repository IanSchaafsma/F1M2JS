const myTitle = document.getElementById("myTitle")
const myImage = document.getElementById("myImage")
const myInput = document.getElementById("myInput")

let lokaties = [
    {
        "titel":"Type 0/11",
        "image":"img/0.jpg"
    },

    {
        "titel":"Type 1/11",
        "image":"img/1.jpg"
    },
    {
        "titel":"Type 2/11",
        "image":"img/2.jpg"
    },
    {
        "titel":"Type 3/11",
        "image":"img/3.jpg"
    },
    {
        "titel":"Type 4/11",
        "image":"img/4.jpg"
    },
    {
        "titel":"Type 5/11",
        "image":"img/5.jpg"
    },
    {
        "titel":"Type 6/11",
        "image":"img/6.jpg"
    },
    {
        "titel":"Type 7/11",
        "image":"img/7.jpg"
    },
    {
        "titel":"Type 8/11",
        "image":"img/8.jpg"
    },
    {
        "titel":"Type 9/11",
        "image":"img/9.jpg"
    },
    {
        "titel":"Type 10/11",
        "image":"img/10.jpg"
    },
    {
        "titel":"Type 11/11",
        "image":"img/11.jpg"
    },
]
//myTitle.innerHTML = "dit is door het script toegevoegd"
//myImage.src = "img/1.jpg"

function show(index){
    myTitle.innerHTML = lokaties[index].titel
    myImage.src = lokaties[index].image;
}

function getInput(){
    show(myInput.value)
    //console.log(myInput.value)
    myInput.value = "";
    myInput.focus();
}