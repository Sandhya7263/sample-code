// JavaScript Document

 $(document).ready(function(){
 
  /* for checking responsive width **/

var window_widhths = $(window).width() + 17;
	$('.width_show').html(window_widhths);
	
/* for checking responsive width **/
   $(window).resize(function(){
	var window_widhths = $(window).width();
	 window_widhths = window_widhths + 17 ;
	$('.width_show').html(window_widhths);
	})

	$(".menutoggle").click(function()
	{
	    $("ul.menu_ulist").slideToggle();
		
	});

 
 
 $('.classesmenu').mouseenter(function(){
	
		$(this).find('.header-submenu-wrap').stop(true, true).slideDown();		
	})

$('.classesmenu').mouseleave(function(){	
		$(this).find('.header-submenu-wrap').stop(true, true).hide();
		
});

 
if(window_widhths >1023) {
 $('.login_signup').mouseenter(function(){	
 		$('.loginsignupclass').css("width","100px");
 		$(this).children().find('.changelogintext').text("Login");
		
		$(this).find('.signup_button').stop(true, true).slideDown(500);		
	})
	$('.login_signup').mouseleave(function(){	
		$(this).children().find('.changelogintext').text("");
		$('.loginsignupclass').css("width","40px");
		$(this).find('.signup_button').stop(true, true).hide();;		
})
}
else
{
	$('.loginsignupclass').css("width","100px");
 	$('.changelogintext').text("Login");	
 	
}


 });
 
