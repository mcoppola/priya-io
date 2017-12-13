$(function(){
  
  // don't stop the hover off animation
  $(".p-intro__crown").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
    $(this).removeClass("letters")  
  })

  $(".p-intro__crown").hover(function(){
    $(this).addClass("letters")    
  }, function(){})
});
