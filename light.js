const imgIds =["all","red","yellow","green"];
let flow = 0;
function changeColor()
{
    imgIds.forEach(id => {
        document.getElementById(id).style.display = "none";
    });
    flow = (flow + 1) % imgIds.length;
    document.getElementById(imgIds[flow]).style.display = "block";
}
setInterval(changeColor, 500);