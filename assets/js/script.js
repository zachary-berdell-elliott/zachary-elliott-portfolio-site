$(".slide-btn").click(function(){
    console.log($(this).parent())
    $(this).parent().siblings("div").slideToggle();
  });