var canvas=document.querySelector('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight/5;
var c=canvas.getContext("2d");
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
		c.shadowOffsetX=0;
	c.shadowOffsetY=0;
	c.shadowColor='black';
	c.shadowBlur=0;
	c.beginPath();
	c.arc(50+x[i],48,10,0,2*Math.PI,false);
	c.fill();
	c.closePath();
	
	c.beginPath();
	c.arc(46+x[i],45,1.5,0,2*Math.PI,false);
	c.fillStyle="white";
	c.fill();
	c.closePath();
	
	c.beginPath();
	c.arc(54+x[i],45,1.5,0,2*Math.PI,false);
	c.fillStyle="white";
	c.fill();
	c.closePath();
	
	c.strokeStyle="white";
	c.beginPath();
	c.moveTo(50+x[i],47);
	c.lineTo(50+x[i],51);
	c.stroke();
	c.moveTo(45+x[i],53);
	c.quadraticCurveTo(50+x[i],58,55+x[i],53);
	c.fill()
	c.closePath();
	
	c.shadowOffsetX=4;
c.shadowOffsetY=-4;
c.shadowColor='black';
c.shadowBlur=4;
	c.strokeStyle="black";
	c.fillStyle="black";
	c.beginPath();
	c.moveTo(50+x[i],60);
	c.lineTo(50+x[i],80);
	c.quadraticCurveTo(40+x[i],100,27+x[i],110);
	c.moveTo(50+x[i],80);
	c.quadraticCurveTo(60+x[i],100,73+x[i],110);
	c.moveTo(50+x[i],60);
	c.lineTo(35+x[i],80);
	c.moveTo(50+x[i],60);
	c.lineTo(75+x[i],60)
	c.stroke();
	c.closePath();
	}
}
this.Ring=function()
{
	var x=[100,350,650,900,1150];
	c.strokeStyle='black';
	var cn=0;
	for(var i=0;i<x.length;++i)
	{
		cn=0;
		while(cn!=1)
		{
		c.beginPath();
		c.moveTo(95+x[i],30);
		c.lineTo(110+x[i],40);
		c.stroke();
		
		c.moveTo(195+x[i],30);
		c.lineTo(175+x[i],40);
		c.stroke();
		
		c.moveTo(95+x[i],100);
		c.lineTo(110+x[i],90);
		c.stroke();
		
		c.moveTo(195+x[i],100);
		c.lineTo(175+x[i],90);
		c.stroke();
		
		c.moveTo(128+x[i],10);
		c.lineTo(135+x[i],25);
		c.stroke();
		
		c.closePath();
		c.moveTo(128+x[i],120);
		c.lineTo(135+x[i],105);
		c.stroke();
		c.closePath();
		
		c.moveTo(170+x[i],12);
		c.lineTo(158+x[i],25);
		c.stroke();
		c.closePath();
		
		c.moveTo(163+x[i],117);
		c.lineTo(154+x[i],103);
		c.stroke();
		c.closePath();
		
		c.moveTo(180+x[i],61);
		c.lineTo(205+x[i],69);
		c.stroke();
		c.closePath();
		
		
		++cn;
		}
	}
}
this.Banner=function()
{
	
	var x=[100,350,650,900,1150];
	c.fillStyle="#0297c9";
	for(var i=0;i<x.length;++i)
	{
		c.shadowOffsetX=4;
		c.shadowOffsetY=-4;
		c.shadowColor='black';
		c.shadowBlur=4;
		var gr=c.createRadialGradient(120+x[i],60,60,180+x[i],60,60);
		if(i==this.num)
		{
			gr.addColorStop(0,'#ffb116');
		gr.addColorStop(.5,'#f4ed1d');
		gr.addColorStop(1,'#ffb116');
		c.fillStyle=gr;
		}
		else
		{
		gr.addColorStop(0,'#2a85fc');
		gr.addColorStop(.5,'blue');
		gr.addColorStop(1,'#2a85fc');
		c.fillStyle=gr;
		}
		c.beginPath();
		c.arc(140+x[i],65,40,0,2*Math.PI,false);
		//c.stroke():
		c.fill();
		c.closePath();
		c.shadowOffsetX=0;
		c.shadowOffsetY=0;
		c.shadowColor='black';
		c.shadowBlur=0;
		c.fillStyle='black';
		c.fillRect(75+x[i],55,26,10);
		if(i==0)
		{
			c.fillStyle="#2a2727";
			c.font="12px serif";
			c.fillText("ABOUT",105+x[i],60);
		}
		if(i==1)
		{
			c.fillStyle="#2a2727";
			c.font="12px serif";
			c.fillText("ACADEMICS",100+x[i],60);
		}
		if(i==2)
		{
			c.fillStyle="#2a2727";
			c.font="12px serif";
			c.fillText("COURSES",105+x[i],60);
		}
		if(i==3)
		{
			c.fillStyle="#2a2727";
			c.font="12px serif";
			c.fillText("SUBMIT",105+x[i],60);
		}
		if(i==4)
		{
			c.fillStyle="#2a2727";
			c.font="12x serif";
			c.fillText("EVENTS",105+x[i],60);
		}
		
	}
}
}
var b=new Bar();
b.Man();
b.Banner();
b.Ring();
canvas.addEventListener('mousemove',function(event)
{
	mouse.x=event.x;
	b.Check1();
})