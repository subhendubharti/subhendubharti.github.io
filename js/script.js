var show=function (){
    //alert(this);
    var elem=this;
    var target=elem.getAttribute("show-content");
    //alert(target);
        var prev=document.getElementsByClassName("shown");
        for(var j=0;j<prev.length;j++)
        {
             var curr= prev[j];
            var classes=curr.getAttribute("class");
            //alert(classes);
           var newClass=classes.replace("shown","hidden");
           // alert(newClass);
            curr.setAttribute("class",newClass);
            
        }
        var next=document.getElementById(target);
        //next.addClass("hidden");
        var classes=next.getAttribute("class");
        var newClass=classes.replace("hidden","shown");
    //alert(newClass);
        next.setAttribute("class",newClass);
}
window.onload=function (){
var elem=document.getElementsByClassName("list-item");
    for(var i=0;i<elem.length;i++)
        {
             var curr= elem[i].addEventListener("click",show);
            //alert(elem[i]);
        }
//alert("show");
}