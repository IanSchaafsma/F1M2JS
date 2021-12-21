const myTitle = document.getElementById('myTitle');
const myImage = document.getElementById('myImage');

let seizoenen = [
	{
		"titel":"seizoenen",
		"image":"img/seasons.jpg",
        "background":"blueviolet"
        
	},
    {
		"titel":"lente",
		"image":"img/spring.jpg",
        "background":"green"
	},
    {
		"titel":"zomer",
		"image":"img/summer.jpg",
        "background":"orange"
	},
    {
		"titel":"herfst",
		"image":"img/autumn.jpg",
        "background":"brown"
	},
    {
		"titel":"winter",
		"image":"img/winter.jpg",
        "background":"white"
	}
];


// let seizoen = {
//	"titel":"lente",
//	"image":"img/spring.jpg"
// };

function show(i){
	myTitle.innerHTML = seizoenen[i].titel;
	myImage.src = seizoenen[i].image;
    document.body.style.backgroundColor = seizoenen[i].background;
    document.container.style.backgrouncolor = seizoenen[i].container
}