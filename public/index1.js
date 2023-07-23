console.log("Running");

$("h1.display-4.fw-bold.lh-1").hover(function(){
    $(this).css("color","green");
}, function(){
    $(this).css("color","");
}); 



function nextCarouselItem() {
    $('#carouselExampleCaptions').carousel('next');
  }


setInterval(nextCarouselItem, 4000);

$(".card.mb-4.rounded-3").hover(function(){
    $(this).toggleClass("shadow-sm");
    $(this).css("box-shadow","0px 0px 10px 1px black");
}, function(){
    $(this).toggleClass("shadow-sm");
    $(this).css("box-shadow","0px 0px 10px 1px black");
});