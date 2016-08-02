$(function(){
  var $links = $('.project-link, .title'),
       $panels = $('.side-panel');

   $links.click(function() {
     $panels.removeClass('active');
     $panels.filter('[data-id="' + $(this).attr('data-id') + '"]').addClass('active');
   });
});
