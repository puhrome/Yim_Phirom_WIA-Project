/**
 * Created by puhrome on 6/14/15.
 */

//FullPage.js anchors
$(document).ready(function() {
    $('#fullpage').fullpage({
        sectionsColor: ["#fff","#4d4d4d", "#fff", "#fff", "#fff"],
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastpage'],
        menu: '#menu',
        scrollingSpeed: 1000
    });
});
//easy Pie Chart
$(function() {
    $('.chart').easyPieChart({
        //your options goes here
    });
});
//html5 canvas

window.onload = function() {
//Draw images
var theCanvas = document.getElementById('myCanvas');
if (theCanvas && theCanvas.getContext) {
    var ctx = theCanvas.getContext("2d");
    if (ctx) {

        //Create a variable to hold image
        var  srcImg = document.getElementById("img1");

        //Draw image
        ctx.drawImage(srcImg, 0, -100);

        //Scale image

    }
}
//Draw text here
// Outlined text
var theCanvas2 = document.getElementById("myCanvas2");
if (theCanvas2 && theCanvas2.getContext) {
    var ctx2 = theCanvas2.getContext("2d");
    if(ctx2) {
        ctx2.font = "120px Damion"; //set font size and style
        ctx2.fillStyle ="#ffffff";
        ctx2.fillText('" Real men bake "', 330, 400); // set string, and x,y position
    } // end of ctx5
} // end of if for theCanvas5 context

};



