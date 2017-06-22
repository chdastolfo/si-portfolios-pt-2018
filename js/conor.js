$("img").each(function(){
  var title = $(this).attr("data-name");
  $(".appendix").append("<li>" + title + "</li>")
})

$(".appendix li").on("click", function(){
  var i = $(this).index();
  $('html, body').animate({
       scrollTop: $(".diary img").eq(i).offset().top - 20
   }, 500);
});
