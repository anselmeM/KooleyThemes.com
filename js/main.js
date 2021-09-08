$( document ).ready(function() {
	$('.nav__toggler').click(function (){
		$('.nav').toggleClass('active');
		$('.nav__icone').toggleClass('active');
		$('.nav-list').toggleClass('active');
	});
	AOS.init({
		offset: 100, 
		duration: 1000
	});
});