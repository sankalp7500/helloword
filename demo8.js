var canvas=document.querySelector('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight/5;
var c=canvas.getContext("2d");
function Man()
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
function Banner()
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
		gr.addColorStop(0,'#0687dd');
		gr.addColorStop(.5,'rgb(0,255,0)');
		gr.addColorStop(1,'#0687dd');
		c.fillStyle=gr;
		c.beginPath();
		c.arc(140+x[i],60,60,0,2*Math.PI,false);
		//c.stroke():
		c.fill();
		c.closePath();
		c.shadowOffsetX=0;
		c.shadowOffsetY=0;
		c.shadowColor='black';
		c.shadowBlur=0;
		
		if(i==0)
		{
			c.fillStyle="#2a2727";
			c.font="25px serif";
			c.fillText("ABOUT",105+x[i],60);
		}
		if(i==1)
		{
			c.fillStyle="#2a2727";
			c.font="25px serif";
			c.fillText("TEXT",105+x[i],60);
		}
		if(i==2)
		{
			c.fillStyle="#2a2727";
			c.font="25px serif";
			c.fillText("TEXT",105+x[i],60);
		}
		if(i==3)
		{
			c.fillStyle="#2a2727";
			c.font="25px serif";
			c.fillText("TEXT",105+x[i],60);
		}
		if(i==4)
		{
			c.fillStyle="#2a2727";
			c.font="25px serif";
			c.fillText("TEXT",105+x[i],60);
		}
		
	}
}
Man();
Banner();