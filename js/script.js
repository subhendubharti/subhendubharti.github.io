var show = function () {
    //alert(this);
    var elem = this;
    var target = elem.getAttribute("data-show-content");
    var c = elem.getAttribute('class');
    prevActive = document.getElementsByClassName("activeLink");
    for (var k = 0; k < prevActive.length; k++) {
        var currE = prevActive[k];
        var classesCurr = currE.getAttribute("class");
        //alert(classes);
        var newClassCurr = classesCurr.replace("activeLink", "");
        // alert(newClass);
        currE.setAttribute("class", newClassCurr);
    }
    var c1 = c + " activeLink";
    elem.setAttribute("class", c1);
    //alert(target);
    var prev = document.getElementsByClassName("shown");
    for (var j = 0; j < prev.length; j++) {
        var curr = prev[j];
        var classes = curr.getAttribute("class");
        //alert(classes);
        var newClass = classes.replace("shown", "hidden");
        // alert(newClass);
        curr.setAttribute("class", newClass);

    }
    var next = document.getElementById(target);
    //next.addClass("hidden");
    var classes = next.getAttribute("class");
    var newClass = classes.replace("hidden", "shown");
    //alert(newClass);
    next.setAttribute("class", newClass);
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
