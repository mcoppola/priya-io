$(function(){
  var $links = $('.project-link[data-id], .title'),
      $close = $('.side-panel .side-panel__header__close'),
      $panels = $('.side-panel');

   $links.click(function() {
     $links.removeClass('active');
     $(this).addClass('active');
     $panels.removeClass('active');
     $panels.filter('[data-id="' + $(this).attr('data-id') + '"]').addClass('active');
   });
   
   $close.click(function(){
     $links.removeClass('active');
     $panels.removeClass('active');
   });
});
