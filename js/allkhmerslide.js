$(document).ready(function(){
	var menu ='close';
	$('#myTopnav').click(function(){
	  if (menu=="close") {
	  	$('.menu-basic').addClass("responsive");
	  	menu="open";
	  }else{
	  	$('.menu-basic').removeClass("responsive");
	  	menu="close";
	  }
	});
});
// ///////////////////////
$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})

// $(document).ready(function(){
// 	$
// });
