// Preloader
$(window).on("load", function() {
	$("body").addClass("loaded");
})

// Timeline Max
var controller = new ScrollMagic.Controller();
	
	//
	// FLAG INTRO
		var flagIntroTL = new TimelineLite();
		flagIntroTL.from(".flag-intro", .5, {opacity: 0, y: 60, ease: Sine.easeIn})
				   .from(".flag-intro h2", 1, {opacity: 0, y:-25, ease: Sine.easeIn}), "-=2";

		var flagIntro = new ScrollMagic.Scene({
			triggerElement: ".flag-intro",
			reverse: false
		})
		.setTween(flagIntroTL)
		.addTo(controller);

	//
	// JERSEY DETAILS INTRO
		var jerseyDetailsIntroTL = new TimelineLite();
		jerseyDetailsIntroTL.from(".jersey-details-1", 1, {opacity: 0, y: 30, ease: Sine.easeIn})
						  .from(".jersey-details-1 .pull-quote--white", .5, {opacity: 0, y: 20, ease: Sine.easeIn}, "-=.5");

		var jerseyIntro = new ScrollMagic.Scene({
			triggerElement: ".jersey-details-1",
			reverse: false
		})
		.setTween(jerseyDetailsIntroTL)
		.addTo(controller);

	//
	//JERSEY DETAILS
	var jerseyDetailsTL = new TimelineLite();
	jerseyDetailsTL.from(".j1", 1.4, {opacity: 0, x: 30, ease: Sine.easeIn})
			 	 .from(".j2", 1, {opacity: 0, y: 100, ease: Sine.easeIn}, "-=1")
			 	 .from(".j3", 1, {opacity: 0, x: -30, ease: Sine.easeIn}, "-=.5");

	var jerseyHome = new ScrollMagic.Scene({
		triggerElement: ".jersey-details-1 .pull-quote",
		offset: 150,
		reverse: false
	})
	.setTween(jerseyDetailsTL)
	.addTo(controller);