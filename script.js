Start();

document.addEventListener('mousemove', (e) => {
	let x = e.clientX;
    let y = e.clientY;
    console.log(x, y);
    document.body.style.backgroundColor = "rgb("+ 0 + "," + (y + 100) / 9 + ","+  (x + 100) / 12 +")";
});

setInterval(function(){
    console.log("Hello");
}, 100000);

function Start()
{
    document.getElementById("JsLoadChecker").innerHTML = "Welcome to my website!";
}