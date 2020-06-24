var name;
var c_date=new Date();
var hour=c_date.getHours();
name=window.prompt("enter your name");
if(hour<12)
document.write("<h1>Good Morning ");
if(hour>=12)
{
	hour=hour-12;
	if(hour<5)
		document.write("<h1>Good Afternoon ");
	if(hour>=5)
		document.write("<h1>Good Evening ");
}
document.writeln(name+"! how are you? </h1>");