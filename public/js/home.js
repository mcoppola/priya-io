$(function(){
  var $links = $('.project-link, .title'),
       $panels = $('.side-panel');

   $links.click(function() {
     $links.removeClass('active');
     $(this).addClass('active');
     $panels.removeClass('active');
     $panels.filter('[data-id="' + $(this).attr('data-id') + '"]').addClass('active');
   });
});
