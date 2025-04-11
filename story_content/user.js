window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  var player = GetPlayer();
var newWindow = window.open("", "_blank");
var header="<h1 style='text-align:center; font-family: arial; color:#002e5f;' >Excerpt</h1><h2 style= 'text-align:center; color:#002e5f;' ><i>Self-Reflective Exercise</i></h2>"
var q1="<b><p style='font-family: arial; '> 1. What is YOUR definition of a Smart City?</p></b><i><p>"+player.GetVar("SRE1")+"</p></i>"
var q2="<b><p style='font-family: arial; '> 2. Explain why you positioned your definition of Smart Communities as you did on the spectrum and the implications of its position.</p></b><i><p>"+player.GetVar("DefinitionSpectrum")+"</p></i>"
var q3="<b><p style='font-family: arial; '> 3. How might you revise your original definition of a Smart City given what you have learned in this module?</p></b><i><p>"+player.GetVar("SRE4")+"</p></i>"
newWindow.document.write("<button onclick='window.print();'>Print Journal</button><br>");
newWindow.document.write(header);
newWindow.document.write(q1);
newWindow.document.write(q2);
newWindow.document.write(q3);
newWindow.document.title = "Reflective Exercises Journal";

}

};
