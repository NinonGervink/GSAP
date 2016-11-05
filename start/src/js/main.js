(function($) {
    
	var img = $('img'),
		h2 = $('h2'),
		h1 = $('h1'),
		
		intro = $('.intro'),
		listItem = $('ul li'),
		tl = new TimelineLite(),
		h4 = $('h4'),
		body = $('body'),
		buttons = $('button');


	// Controlling Timeline Playback
	tl
		.staggerFrom(buttons, 0.2, {y:-300, ease:Bounce.easeOut}, 0.15)
		.from(h1, 1.5, {y: -80, scale: 5, rotation: -36, autoAlpha: 0, ease:Bounce.easeOut}, '-=0.5') 
		.from(intro, 1.5, {x: -1000, y: -1000, scale: -3, rotation: 40, autoAlpha: 0, ease:Elastic.easeOut}, '-=0.15')
		.from(img, 1.5, {x: -1000, rotation: -35, scale:3, autoAlpha: 0, ease:Bounce.easeInOut}, '-=0.15')
		.from(h2, 2, {x: 1000, y: 200, scale:3, rotation:360, autoAlpha: 0, ease:Elastic.easeInOut}, '-=0.15')
		.from(listItem, 1.5, {x:-50, y:50 , scale:4, rotation: 7, autoAlpha: 0, ease:Bounce.easeOut}, '-=0.15'),
		TweenLite.fromTo(h4, 1.5, {x:1000, y:0},{x:-400, y: -300, rotation: 30, delay:9, ease:Bounce.easeOut});
		

	tl.pause();


$('#btnPlay').on('click',function(){
	tl.play();
})


$('#btnPause').on('click',function(){
	tl.pause();
})

$('#btnResume').on('click',function(){
	tl.resume();
})

$('#btnReverse').on('click',function(){
	tl.reverse();

})
$('#btnSpeedUp').on('click',function(){
	tl.timeScale(8);

})
$('#btnSlowDown').on('click',function(){
	tl.timeScale(0.5);
})

$('#btnSeek').on('click',function(){
	tl.seek(1);
})

$('#btnProgress').on('click',function(){
	tl.progress(0.5);
})

$('#btnRestart').on('click',function(){
	tl.restart();
})

$('#btnStop').on('click',function(){
	tl.reverse();
	tl.timeScale (5);

})

})(jQuery);






