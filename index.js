function ShowMarker(event) 
{
    //console.log (event);
    console.log (event);
    var mark = document.getElementById('divMark');
    mark.style.top =  (event.clientY)+'px';
    mark.style.left = (event.clientX) +'px';
    mark.style.bottom = (event.clientX)+'px';
    mark.style.right = (event.clientX)+'px';
}
function showMessage(click)
{
    alert("Changes Saved!! Thanks for your feedback")
}