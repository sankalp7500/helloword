var canvas=document.querySelector('canvas');
canvas.width=window.innerWidth/4;
canvas.height=window.innerHeight/2;
var c=canvas.getContext("2d");
var mouse={
	x:undefined,
	y:undefined
};
function Mickey()
{
	var x=-150;
	var y=-120;
c.strokeStyle="black";//jawline
c.beginPath();
c.moveTo(267+x,405+y);
c.quadraticCurveTo(297+x,450+y,337+x,404+y);
c.quadraticCurveTo(361+x,399+y,387+x,352+y);
c.quadraticCurveTo(307+x,48+y,216+x,355+y);
c.quadraticCurveTo(234+x,390+y,267+x,405+y);
//c.strokeStyle="blue";
c.fillStyle="white";
c.fill();
c.fillStyle="black";
c.stroke();
c.closePath();

c.beginPath();//hairs
c.moveTo(300+x,200+y);
c.lineTo(300+x,250+y);
c.quadraticCurveTo(380+x,210+y,350+x,350+y);
c.quadraticCurveTo(360+x,340+y,386+x,354+y);
c.quadraticCurveTo(450+x,200+y,300+x,200+y);
c.fill();
c.stroke();
c.closePath();

c.fillStyle="black";//hairs
c.beginPath();
c.moveTo(300+x,200+y);
c.lineTo(300+x,250+y);
c.quadraticCurveTo(230+x,220+y,250+x,350+y);
c.quadraticCurveTo(240+x,340+y,215+x,354+y);
c.quadraticCurveTo(140+x,200+y,300+x,200+y);
c.stroke();
c.fill();
c.closePath();

c.beginPath();//lips
c.moveTo(261+x,361+y);
c.quadraticCurveTo(300+x,394+y,345+x,361+y);
c.stroke();
c.closePath();

/*c.beginPath();//tongue
c.moveTo(272+x,368+y);
c.quadraticCurveTo(300+x,421+y,335+x,367+y);
c.quadraticCurveTo(300+x,388+y,272+x,369+y);
c.fillStyle="#ff5b5b";
c.fill();
c.fillStyle="black";
c.stroke();
c.closePath();

for(var i=0;i<5000;++i)//eyebrow
{
c.beginPath();
c.moveTo(260+x,274+y);
c.quadraticCurveTo(270+x,255+y,280+x,274+y);
c.stroke();
c.closePath();
}

for(var i=0;i<5000;++i)//eyebrow
{
c.beginPath();
c.moveTo(310+x,274+y);
c.quadraticCurveTo(320+x,255+y,331+x,274+y);
c.stroke();
c.closePath();
}*/

c.strokeStyle="black";
c.beginPath();//eye
c.ellipse(270+x,290+y,10,17,0,0,(Math.PI)*2);
c.stroke();
c.closePath();

c.beginPath();//eye
c.ellipse(320+x,289+y,10,17,0,0,(Math.PI)*2);
c.stroke();
c.closePath();

c.beginPath();//eye
c.ellipse(270+x,293+y,4,7,0,0,(Math.PI)*2);
c.fill();
c.stroke();
c.closePath();

c.beginPath();//eye
c.ellipse(320+x,292+y,4,7,0,0,(Math.PI)*2);
c.fill();
c.stroke();
c.closePath();

c.beginPath();//nose
c.ellipse(300+x,335+y,25,17,0,0,(Math.PI)*2);
c.fill();
c.stroke();
c.closePath();

c.beginPath();//nose 1
c.ellipse(290+x,330+y,5,5,0,0,(Math.PI)*2);
c.fillStyle="white";
c.fill();
c.stroke();
c.fillStyle="black";
c.closePath();

/*c.beginPath();
c.ellipse(300,322,90,90,0,0,(Math.PI)*2);
//c.strokeStyle="#f8a72bcf";
c.stroke();
c.closePath();*/

c.strokeStyle="black";
c.beginPath();//ear
c.arc(210+x,210+y,50,0,(Math.PI)*2,false);
c.fill();
c.stroke();
c.closePath();

c.beginPath();//ear
c.arc(390+x,210+y,50,0,(Math.PI)*2,false);
c.fill();
c.stroke();
c.closePath();

}
function Wink()
{
	var x=-150;
	var y=-120;
	if(this.dy==-5)
		this.dy=5;
	else
		this.dy=-5;
	for(var i=0;i<5000;++i)//eyebrow
{
c.beginPath();
c.moveTo(260+x,274+y);
c.quadraticCurveTo(270+x,255+y+dy,280+x,274+y);
c.stroke();
c.closePath();
}

for(var i=0;i<5000;++i)//eyebrow
{
c.beginPath();
c.moveTo(310+x,274+y);
c.quadraticCurveTo(320+x,255+y+dy,331+x,274+y);
c.stroke();
c.closePath();
}
}
function Jeeb()
{
	var x=-150;
	var y=-120;
	if(this.dm==-5)
		this.dm=5;
	else
		this.dm=-5;
	c.beginPath();//tongue
c.moveTo(272+x,368+y);
c.quadraticCurveTo(300+x,421+y+dm,335+x,367+y);
c.quadraticCurveTo(300+x,388+y+dm,272+x,369+y);
c.fillStyle="#ff5b5b";
c.fill();
c.fillStyle="black";
c.stroke();
c.closePath();
}
Mickey();
canvas.addEventListener('mousemove',function(event)
{
	var rect=canvas.getBoundingClientRect();
	mouse.x=(event.clientX-rect.left);
	mouse.y=(event.clientY-rect.top);
	animate();
	function animate()
	{
		var ss=setTimeout(animate,400);
		c.clearRect(0,0,innerWidth,innerHeight);
		Mickey();
		Wink();
		Jeeb();
	}
	
	console.log((mouse.x)+","+(mouse.y));
})