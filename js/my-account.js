$(function(){

$('.wishlist__clear .basket__footer-button').click(function(){
	$(this).hide();	
	})

$(".tab-account-menu").click(function() {
	$(".tab-account-menu").removeClass("active").eq($(this).index()).addClass("active");
 	$(".tab-account-item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

$('.account-menu-mobil-title').click(function(){
	$('.account-tabs').toggleClass('active');	
	$('.account-tabs').removeClass('hide');
	$('.account-menu__btn').toggleClass('active');
	})
$('.tab-account-menu').click(function(){
	$('.account-tabs').addClass('hide');
	$('.account-tabs').removeClass('active');
	$('.account-menu__btn').removeClass('active');	
	$('.edit-address-wrapper').removeClass('active');
	$('.add-address-wrapper').removeClass('active');
	$('.order-details-wrapper').removeClass('active');	
	$('.orders-history').show();
	$('.account__address-list').show();
	})

$('.my-address__delete').click(function(){
	$(this).parent().parent().hide();	
	})

$('.account__button').click(function(){
	$('.add-address-wrapper').addClass('active');
	$('.account__address-list').hide();	
	})
$('.add-new-address__button').click(function(){
	$('.add-address-wrapper').removeClass('active');	
	$('.account__address-list').show();	
	})
$('.my-address__edit').click(function(){
	$('.edit-address-wrapper').addClass('active');
	$('.account__address-list').hide();		
	})
$('.edit-address__button').click(function(){
	$('.edit-address-wrapper').removeClass('active');
	$('.account__address-list').show();		
	})

$('.orders-history__details').click(function(){
	$('.order-details-wrapper').addClass('active');	
	$('.orders-history').hide();
	})

$('#my-account').click(function(){
	$('#bread-crumbs').text('My account');	
	$('#bread-crumbs__link-wrapper').addClass('no-active');
	$('#bread-crumbs').css('display', 'none');	

	})

$('#change-password').click(function(){
	$('#bread-crumbs').text('Change password');
	$('#bread-crumbs').css('display', 'inline-block');	
	$('.bread-crumbs__link-wrapper').removeClass('no-active');		
	})
$('#my-address').click(function(){
	$('#bread-crumbs').text('My address');
	$('#bread-crumbs').css('display', 'inline-block');	
	$('.bread-crumbs__link-wrapper').removeClass('no-active');
	})

$('#my-wishlist').click(function(){
	$('#bread-crumbs').text('My wishlist');	
	$('#bread-crumbs').css('display', 'inline-block');
	$('.bread-crumbs__link-wrapper').removeClass('no-active');
	})
$('#order-history').click(function(){
	$('#bread-crumbs').text('Order history');	
	$('#bread-crumbs').css('display', 'inline-block');
	$('.bread-crumbs__link-wrapper').removeClass('no-active');
	})


});

