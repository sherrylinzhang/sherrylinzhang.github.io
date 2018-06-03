//array to hold the image paths 
var photos = ["img/bunny1.jpg","img/bunny2.jpg","img/bunny3.jpg","img/bunny4.jpg","img/bunny5.jpg","img/bunny6.jpg","img/bunny7.jpg","img/bunny8.png","img/bunny9.jpg","img/bunny10.jpg"];
//array for captions - can't figure it out
var captions = [
    "Gray Holland Lop",
    "Flemish Giant and her friend",
    "Golden Mini Lop",
    "Oreo Angora Bunny",
    "Pretty Rex Rabbit",
    "Sweet Silver Rabbits",
    "Sleepy Mini Lop",
    "Snuggling Lops",
    "Curious Angoras",
    "Resting Angoras"
];
//global variables
var curr, prev, next;

//preload images
function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;        
    });
}

//call preload when window loads
$(window).load(function(){
     preload(photos);
 });

//ready function
$(function() { 
    //set current value to 0
    var curr = 0; 
    //create all images and set their position
     $(photos).each(function(){
         //console.log(this);
         $("#slides").append("<li id="+curr+"><img  src="+this+"></li>");
         $("#slides").find("li:eq("+curr+")").css(
             {"z-index":photos.length-curr,
             "left":curr*1024+"px"}
         );
         //increment current value each loop
         curr++;
     });

    
    //reset current to 0
    curr = 0;
   
    //function to move slides back and forth
    function changeSlide(d){
        //slide to next image
        if (d==="n"){
            $("#slides").animate({
                left: "-=1024"},1000); 
            curr++;
        //slide to previous image
        } else if (d==="p") {
            $("#slides").animate({
                left: "+=1024"},1000); 
            curr--;  
        //slide to beginning    
        } else {
            $("#slides").animate({left: "0"},500);
            curr=0;
        }
    }
    
    //automatically advance slides every 3 seconds
    var auto = window.setInterval(function(){ 
        if (curr===photos.length-1){
            //reset if at the end
            changeSlide("b");
        } else {
            changeSlide("n");
        }
    }, 3000);

    $("#prev").click(function(){ 
        clearInterval(auto);
        //check the current index
        if (curr>0){   
            //slide in previous image
            changeSlide("p");
        }
    });
    
    $("#next").click(function(){
        clearInterval(auto);
        console.log("current:"+curr);

        if (curr<photos.length-1){
            //slide in next image
            changeSlide("n");
        } else {
            //reset to beginning
            changeSlide("b"); 
        } 
    });
});