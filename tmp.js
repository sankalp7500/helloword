var layer1;
var layer2;
var c1;
var c2;
function init()
{
	layer1=document.getElementById("layer1");
	c1=layer1.getContext('2d');
	layer2=document.getElementById("layer2");
	c2=layer2.getContext('2d');
	first();
	second();
}
function first()
{
	layer1.width=window.innerWidth;
	layer1.height=window.innerHeight/5;
	var mouse={
	x:undefined,
	y:undefined
};
function Bar()
{
	this.num=-9;
	this.Check1=function()
	{
		var x=[100,350,650,900,1150];
		
		for(var i=0;i<x.length;++i)
		{
			if(mouse.x>=80+x[i] && mouse.x<=200+x[i])
			{
				this.num=i;
				break;
			}
		}
		if(i==x.length)
			this.num=-9;
		this.Banner();
	}
this.Man=function()
{
	var x=[100,350,650,900,1150];
	
	for(var i=0;i<x.length;++i)
	{
		c1.shadowOffsetX=0;
	c1.shadowOffsetY=0;
	c1.shadowColor='black';
	c1.shadowBlur=0;
	c1.beginPath();
	c1.arc(50+x[i],48,10,0,2*Math.PI,false);
	c1.fill();
	c1.closePath();
	
	c1.beginPath();
	c1.arc(46+x[i],45,1.5,0,2*Math.PI,false);
	c1.fillStyle="white";
	c1.fill();
	c1.closePath();
	
	c1.beginPath();
	c1.arc(54+x[i],45,1.5,0,2*Math.PI,false);
	c1.fillStyle="white";
	c1.fill();
	c1.closePath();
	
	c1.strokeStyle="white";
	c1.beginPath();
	c1.moveTo(50+x[i],47);
	c1.lineTo(50+x[i],51);
	c1.stroke();
	c1.moveTo(45+x[i],53);
	c1.quadraticCurveTo(50+x[i],58,55+x[i],53);
	c1.fill()
	c1.closePath();
	
	c1.shadowOffsetX=4;
c1.shadowOffsetY=-4;
c1.shadowColor='black';
c1.shadowBlur=4;
	c1.strokeStyle="black";
	c1.fillStyle="black";
	c1.beginPath();
	c1.moveTo(50+x[i],60);
	c1.lineTo(50+x[i],80);
	c1.quadraticCurveTo(40+x[i],100,27+x[i],110);
	c1.moveTo(50+x[i],80);
	c1.quadraticCurveTo(60+x[i],100,73+x[i],110);
	c1.moveTo(50+x[i],60);
	c1.lineTo(35+x[i],80);
	c1.moveTo(50+x[i],60);
	c1.lineTo(75+x[i],60)
	c1.stroke();
	c1.closePath();
	}
}
this.Ring=function()
{
	var x=[100,350,650,900,1150];
	c1.strokeStyle='black';
	var cn=0;
	for(var i=0;i<x.length;++i)
	{
		cn=0;
		while(cn!=1)
		{
		c1.beginPath();
		c1.moveTo(95+x[i],30);
		c1.lineTo(110+x[i],40);
		c1.stroke();
		
		c1.moveTo(195+x[i],30);
		c1.lineTo(175+x[i],40);
		c1.stroke();
		
		c1.moveTo(95+x[i],100);
		c1.lineTo(110+x[i],90);
		c1.stroke();
		
		c1.moveTo(195+x[i],100);
		c1.lineTo(175+x[i],90);
		c1.stroke();
		
		c1.moveTo(128+x[i],10);
		c1.lineTo(135+x[i],25);
		c1.stroke();
		
		c1.closePath();
		c1.moveTo(128+x[i],120);
		c1.lineTo(135+x[i],105);
		c1.stroke();
		c1.closePath();
		
		c1.moveTo(170+x[i],12);
		c1.lineTo(158+x[i],25);
		c1.stroke();
		c1.closePath();
		
		c1.moveTo(163+x[i],117);
		c1.lineTo(154+x[i],103);
		c1.stroke();
		c1.closePath();
		
		c1.moveTo(180+x[i],61);
		c1.lineTo(205+x[i],69);
		c1.stroke();
		c1.closePath();
		
		
		++cn;
		}
	}
}
this.Banner=function()
{
	
	var x=[100,350,650,900,1150];
	c1.fillStyle="#0297c9";
	for(var i=0;i<x.length;++i)
	{
		c1.shadowOffsetX=4;
		c1.shadowOffsetY=-4;
		c1.shadowColor='black';
		c1.shadowBlur=4;
		var gr=c1.createRadialGradient(120+x[i],60,60,180+x[i],60,60);
		if(i==this.num)
		{
			gr.addColorStop(0,'#ffb116');
		gr.addColorStop(.5,'#f4ed1d');
		gr.addColorStop(1,'#ffb116');
		c1.fillStyle=gr;
		}
		else
		{
		gr.addColorStop(0,'#2a85fc');
		gr.addColorStop(.5,'blue');
		gr.addColorStop(1,'#2a85fc');
		c1.fillStyle=gr;
		}
		c1.beginPath();
		c1.arc(140+x[i],65,40,0,2*Math.PI,false);
		//c1.stroke():
		c1.fill();
		c1.closePath();
		c1.shadowOffsetX=0;
		c1.shadowOffsetY=0;
		c1.shadowColor='black';
		c1.shadowBlur=0;
		c1.fillStyle='black';
		c1.fillRect(75+x[i],55,26,10);
		if(i==0)
		{
			c1.fillStyle="#2a2727";
			c1.font="12px serif";
			c1.fillText("ABOUT",105+x[i],60);
		}
		if(i==1)
		{
			c1.fillStyle="#2a2727";
			c1.font="12px serif";
			c1.fillText("ACADEMICS",100+x[i],60);
		}
		if(i==2)
		{
			c1.fillStyle="#2a2727";
			c1.font="12px serif";
			c1.fillText("COURSES",105+x[i],60);
		}
		if(i==3)
		{
			c1.fillStyle="#2a2727";
			c1.font="12px serif";
			c1.fillText("SUBMIT",105+x[i],60);
		}
		if(i==4)
		{
			c1.fillStyle="#2a2727";
			c1.font="12x serif";
			c1.fillText("EVENTS",105+x[i],60);
		}
		
	}
}
}
var b=new Bar();
b.Man();
b.Banner();
b.Ring();
layer1.addEventListener('mousemove',function(event)
{
	mouse.x=event.x;
	b.Check1();
})
}
function second()
{
	layer2.width=window.innerWidth/10;
	layer2.height=window.innerHeight;
	c2.fillStyle="white";
c2.strokeStyle="white";
var x=0;
function Links()
{
this.Check=function()
{
	if(mouse.x>=5 && mouse.x<=185 && mouse.y>=222 && mouse.y<=307)
	{
		c2.clearRect(0,0,innerWidth,innerHeight);
		this.Home();
		c2.font="15px serif";
		c2.fillText("HOME",45,130);
		c2.strokeStyle="white";
		c2.fillStyle="white";
		this.Gallery();
		this.Notes();
		this.Videos();
		this.Article();
		this.Bag();
		this.Message();
	}
	else if(mouse.x>=5 && mouse.x<=185 && mouse.y>=312 && mouse.y<=369)
	{
		c2.clearRect(0,0,innerWidth,innerHeight);
		c2.strokeStyle="#15af07";
		c2.fillStyle="#15af07";
		this.Bag();
		c2.font="15px serif";
		c2.fillText("BAG",45,220);
		c2.strokeStyle="white";
		c2.fillStyle="white";
		this.Home();
		this.Gallery();
		this.Notes();
		this.Videos();
		this.Article();
		this.Message();
	}
	else if(mouse.x>=5 && mouse.x<=185 && mouse.y>=388 && mouse.y<=444)
	{
		c.clearRect(0,0,innerWidth,innerHeight);
		c2.fillStyle="#ba0707";
		c2.strokeStyle="#ba0707";
		this.Message();
		c2.font="15px serif";
		c2.fillText("MESSAGE",35,290);
		c2.strokeStyle="white";
		c2.fillStyle="white";
		this.Home();
		this.Gallery();
		this.Notes();
		this.Videos();
		this.Bag();
		this.Article();
	}
	else if(mouse.x>=45 && mouse.x<=88 && mouse.y>=459 && mouse.y<=515)
	{
		c2.clearRect(0,0,innerWidth,innerHeight);
		c2.fillStyle="#cee809";
		c2.strokeStyle="#cee809";
		this.Gallery();
		c2.font="15px serif";
		c2.fillText("GALLERY",45,360);
		c2.strokeStyle="white";
		c2.fillStyle="white";
		this.Home();
		this.Article();
		this.Notes();
		this.Videos();
		this.Bag();
		this.Message();
	}
	else if(mouse.x>=5 && mouse.x<=185 && mouse.y>=582 && mouse.y<=638)
	{
		c2.clearRect(0,0,innerWidth,innerHeight);
		c2.fillStyle="#008c77";
		c2.strokeStyle="#008c77";
		this.Notes();
		c2.font="15px serif";
		c2.fillText("NOTES",45,450);
		c2.strokeStyle="white";
		c2.fillStyle="white";
		this.Home();
		this.Gallery();
		this.Article();
		this.Videos();
		this.Bag();
		this.Message();
	}
	else if(mouse.x>=5 && mouse.x<=185 && mouse.y>=644 && mouse.y<=700)
	{
		c2.clearRect(0,0,innerWidth,innerHeight);
		c2.shadowColor='#4c0589';
		c2.fillStyle="#4c0589";
		c2.strokeStyle="#4c0589";
		this.Videos();
		c2.font="15px serif";
		c2.fillText("VIDEOS",45,520);
		c2.strokeStyle="white";
		c2.fillStyle="white";
		this.Home();
		this.Gallery();
		this.Notes();
		this.Article();
		this.Bag();
		this.Message();
	}
	else if(mouse.x>=5 && mouse.x<=185 && mouse.y>=705 && mouse.y<=761)
	{
		c2.clearRect(0,0,innerWidth,innerHeight);
		c2.shadowColor='#89044d';
		c2.fillStyle="#89044d";
		c2.strokeStyle="#89044d";
		this.Article();
		c2.font="15px serif";
		c2.fillText("ARTICLE",45,600);
		c2.strokeStyle="white";
		c2.fillStyle="white";
		this.Home();
		this.Gallery();
		this.Notes();
		this.Videos();
		this.Bag();
		this.Message();
		
	}
	else
	{
		c2.clearRect(0,0,innerWidth,innerHeight);
		this.Home();
		c2.font="15px serif";
		c2.fillText("HOME",45,130);
		c2.strokeStyle="white";
		c2.fillStyle="white";
		this.Gallery();
		this.Notes();
		this.Videos();
		this.Article();
		this.Bag();
		this.Message();
	}
	
	
}
this.Home=function()
 {
	 var x=10;
	 c2.beginPath();
	 c2.moveTo(36+x,77+x);
	 c2.lineTo(56+x,65+x);
	 c2.lineTo(76+x,77+x);
	 c2.lineTo(65+x,77+x);
	 c2.lineTo(65+x,97+x);
	 c2.lineTo(60+x,97+x);
	 c2.lineTo(60+x,87+x);
	 c2.lineTo(52+x,87+x);
	 c2.lineTo(52+x,97+x);
	 c2.lineTo(47+x,97+x);
	 c2.lineTo(47+x,77+x);
	 c2.lineTo(36+x,77+x);
	 c2.stroke();
	 c2.closePath();
	 c2.font="15px serif";
	c2.fillText("HOME",45,130);
	 
 }
 this.Bag=function()
 {
	 c2.strokeRect(45,167,40,30);
	 c2. beginPath();
	 c2.arc(65,167,10,Math.PI,0,false);
	 c2.stroke();
	 c2.closePath();
	 c2.font="15px serif";
	c2.fillText("BAG",45,220);
 }
 this.Message=function()
 {
	 c2.strokeRect(45,237,40,30);
	 c2.beginPath();
	 c2.moveTo(45,237);
	 c2.lineTo(65,252);
	 c2.lineTo(85,237);
	 c2.stroke();
	 c2.closePath();
	 c2.font="15px serif";
	c2.fillText("MESSAGE",45,290);
 }
 this.Gallery=function()
 {
	 c2.strokeRect(45,307,40,30);
	 c2.beginPath();
	 c2.arc(75,315,4,0,2*Math.PI,false);
	 c2.stroke();
	 c2.closePath();
	 c2.beginPath();
	 c2.moveTo(45,337);
	 c2.lineTo(65,322);
	 c2.lineTo(70,330);
	 c2.lineTo(76,327);
	 c2.lineTo(85,337);
	 c2.stroke();
	 c2.closePath();
	 c2.font="15px serif";
	c2.fillText("GALLERY",45,360);
 }
 this.Notes=function()
 {
	 c2.strokeRect(45,377,40,50);
	 c2.beginPath();
	 c2.moveTo(55,377)
	 c2.lineTo(55,427);
	 c2.moveTo(60,382);
	 c2.lineTo(80,382);
	 c2.moveTo(60,387);
	 c2.lineTo(80,387);
	 c2.stroke();
	 c2.closePath();
	 c2.font="30px serif";
	 c2.strokeText("P",63,415);
	 c2.font="15px serif";
	c2.fillText("NOTES",45,450);
 }
 this.Videos=function()
 {
	 c2.beginPath();
	 c2.moveTo(45,467);
	 c2.lineTo(75,467);
	 c2.lineTo(75,477);
	 c2.lineTo(90,467);
	 c2.lineTo(90,497);
	 c2.lineTo(75,487);
	 c2.lineTo(75,497);
	 c2.lineTo(45,497);
	 c2.lineTo(45,467);
	 c2.moveTo(70,467);
	 c2.lineTo(66,462);
	 c2.lineTo(50,462);
	 c2.stroke();
	 c2.closePath();
	 c2.strokeRect(50,483,15,10);
	 c2.font="15px serif";
	c2.fillText("VIDEOS",45,520);
 }
 this.Article=function()
 {
	 c2.beginPath();
	 c2.moveTo(45,537);
	 c2.lineTo(85,537);
	 c2.lineTo(85,567);
	 c2.lineTo(65,567);
	 c2.lineTo(55,577);
	 c2.lineTo(55,567);
	 c2.lineTo(45,567);
	 c2.lineTo(45,537);
	 c2.moveTo(50,547);
	 c2.lineTo(80,547);
	 c2.moveTo(50,552);
	 c2.lineTo(80,552);
	 c2.moveTo(50,557);
	 c2.lineTo(80,557);
	 c2.stroke();
	 c2.closePath();
	 c2.font="15px serif";
	c2.fillText("ARTICLE",45,600);
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
}
init();