var canvas=document.querySelector('canvas');
canvas.width=window.innerWidth/10;
canvas.height=window.innerHeight;
var c=canvas.getContext("2d");
var mouse={
	x:undefined,
	y:undefined
};
window.addEventListener('mousemove',function(event)
{
	mouse.x=event.x;
	mouse.y=event.y;
})
c.strokeStyle="white";
c.fillStyle="white"
function Links()
{
this.Check=function()
{
	if(mouse.x>=32 && mouse.x<=99 && mouse.y>=74 && mouse.y<=115)
	{
		c.strokeStyle="#033d9b";
		c.font="15px serif";
		c.fillText("HOME",45,130);
	}
	else if(mouse.x>=45 && mouse.x<=85 && mouse.y>=157 && mouse.y<=199)
	{
		c.strokeStyle="#15af07";
		c.font="15px serif";
		c.fillText("BAG",45,220);
	}
	else if(mouse.x>=45 && mouse.x<=88 && mouse.y>=237 && mouse.y<=267)
	{
		c.strokeStyle="#ba0707";
		c.font="15px serif";
		c.fillText("MESSAGE",45,290);
	}
	else if(mouse.x>=45 && mouse.x<=88 && mouse.y>=307 && mouse.y<=337)
	{
		c.strokeStyle="#9e8300";
		c.font="15px serif";
		c.fillText("GALLERY",45,360);
	}
	else if(mouse.x>=45 && mouse.x<=88 && mouse.y>=377 && mouse.y<=415)
	{
		c.strokeStyle="#008c77";
		c.font="15px serif";
		c.fillText("NOTES",45,450);
	}
	else if(mouse.x>=45 && mouse.x<=95 && mouse.y>=462 && mouse.y<=499)
	{
		c.strokeStyle="#4c0589";
		c.font="15px serif";
		c.fillText("VIDEOS",45,520);
	}
	else if(mouse.x>=45 && mouse.x<=85 && mouse.y>=535 && mouse.y<=570)
	{
		c.strokeStyle="#89044d";
		c.font="15px serif";
		c.fillText("ARTICLE",45,600);
	}
	else
		;
	
	
}
this.Home=function()
 {
	 var x=10;
	 c.beginPath();
	 c.moveTo(36+x,77+x);
	 c.lineTo(56+x,65+x);
	 c.lineTo(76+x,77+x);
	 c.lineTo(65+x,77+x);
	 c.lineTo(65+x,97+x);
	 c.lineTo(60+x,97+x);
	 c.lineTo(60+x,87+x);
	 c.lineTo(52+x,87+x);
	 c.lineTo(52+x,97+x);
	 c.lineTo(47+x,97+x);
	 c.lineTo(47+x,77+x);
	 c.lineTo(36+x,77+x);
	 c.stroke();
	 c.closePath();
	 c.font="15px serif";
	c.fillText("HOME",45,130);
	 
 }
 this.Bag=function()
 {
	 c.strokeRect(45,167,40,30);
	 c. beginPath();
	 c.arc(65,167,10,Math.PI,0,false);
	 c.stroke();
	 c.closePath();
	 c.font="15px serif";
	c.fillText("BAG",45,220);
 }
 this.Message=function()
 {
	 c.strokeRect(45,237,40,30);
	 c.beginPath();
	 c.moveTo(45,237);
	 c.lineTo(65,252);
	 c.lineTo(85,237);
	 c.stroke();
	 c.closePath();
	 c.font="15px serif";
	c.fillText("MESSAGE",45,290);
 }
 this.Gallery=function()
 {
	 c.strokeRect(45,307,40,30);
	 c.beginPath();
	 c.arc(75,315,4,0,2*Math.PI,false);
	 c.stroke();
	 c.closePath();
	 c.beginPath();
	 c.moveTo(45,337);
	 c.lineTo(65,322);
	 c.lineTo(70,330);
	 c.lineTo(76,327);
	 c.lineTo(85,337);
	 c.stroke();
	 c.closePath();
	 c.font="15px serif";
	c.fillText("GALLERY",45,360);
 }
 this.Notes=function()
 {
	 c.strokeRect(45,377,40,50);
	 c.beginPath();
	 c.moveTo(55,377)
	 c.lineTo(55,427);
	 c.moveTo(60,382);
	 c.lineTo(80,382);
	 c.moveTo(60,387);
	 c.lineTo(80,387);
	 c.stroke();
	 c.closePath();
	 c.font="30px serif";
	 c.strokeText("P",63,415);
	 c.font="15px serif";
	c.fillText("NOTES",45,450);
 }
 this.Videos=function()
 {
	 c.beginPath();
	 c.moveTo(45,467);
	 c.lineTo(75,467);
	 c.lineTo(75,477);
	 c.lineTo(90,467);
	 c.lineTo(90,497);
	 c.lineTo(75,487);
	 c.lineTo(75,497);
	 c.lineTo(45,497);
	 c.lineTo(45,467);
	 c.moveTo(70,467);
	 c.lineTo(66,462);
	 c.lineTo(50,462);
	 c.stroke();
	 c.closePath();
	 c.strokeRect(50,483,15,10);
	 c.font="15px serif";
	c.fillText("VIDEOS",45,520);
 }
 this.Article=function()
 {
	 c.beginPath();
	 c.moveTo(45,537);
	 c.lineTo(85,537);
	 c.lineTo(85,567);
	 c.lineTo(65,567);
	 c.lineTo(55,577);
	 c.lineTo(55,567);
	 c.lineTo(45,567);
	 c.lineTo(45,537);
	 c.moveTo(50,547);
	 c.lineTo(80,547);
	 c.moveTo(50,552);
	 c.lineTo(80,552);
	 c.moveTo(50,557);
	 c.lineTo(80,557);
	 c.stroke();
	 c.closePath();
	 c.font="15px serif";
	c.fillText("ARTICLE",45,600);
 }
}
var l=new Links();
l.Home();
l.Gallery();
l.Notes();
l.Videos();
l.Article();
l.Bag();
l.Message();
l.Check();
/*function animate()
{
	requestAnimationFrame(animate);
	c.clearRect(0,0,innerWidth,innerHeight);
	l.Home();
	l.Gallery();
	l.Notes();
	l.Videos();
	l.Article();
	l.Bag();
	l.Message();
	l.Check();
}
animate();*/