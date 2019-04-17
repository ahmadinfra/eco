// $(function () {
// 	$( 'body' ).on( 'click', function (e) {
	
// 		 $("body").toggleClass('dark-theme');
// 	} );
// });

pageWrapperSpacing();
function pageWrapperSpacing () {
	var headerHeight = $( 'header.global-header' ).height(),
		footerHeight = $( 'footer.global-footer' ).height(),
		topPadding = headerHeight;
		
	// ( $( window ).width() <= 768 ) ? topPadding = headerHeight : topPadding = headerHeight + navHeight;
	// ( $( window ).width() < 768 ) ? topPadding = headerHeight + 1 : topPadding = headerHeight + 1;
	 if ($(window).width () < 768) {


		$( 'div.page-wrapper' ).css( {
			'padding-top': topPadding + 10
			// 'padding-bottom': footerHeight + 15
		} );

		$( 'div.global-nav.nav-active' ).css( {
			'padding-top': 0
		} );
	}
	else{


		$( 'div.page-wrapper' ).css( {
			'padding-top': topPadding
			// 'padding-bottom': footerHeight + 15
		} );

		$( 'div.global-nav.nav-active' ).css( {
			'padding-top': topPadding
		} );
	}

};

pageOnsmall();
function pageOnsmall () {
    if ($(window).width () < 768) {
		if ( !$('a.item-nav').hasClass('item-active') ) {

			$( '.main-container .in-main .global-nav' ).removeClass( 'nav-active' );
			$( '.main-container .in-main .main-content' ).removeClass( 'main-slide' );
			$( 'header.global-header div.in-glheader .glheader-content .item-nav' ).parent('.hil-btn-glnav').siblings().hide();

		} else {
			$( '.main-container .in-main .global-nav' ).addClass( 'nav-active' );
			$( '.main-container .in-main .main-content' ).removeClass( 'main-slide' );
			$( 'header.global-header div.in-glheader .glheader-content .item-nav' ).parent('.hil-btn-glnav').siblings().hide();
			
		}
	 } 
	 else {
		$( '.main-container .in-main .global-nav' ).addClass( 'nav-active' );
		$( '.main-container .in-main .main-content' ).addClass( 'main-slide' );
			$( 'header.global-header div.in-glheader .glheader-content .item-nav' ).parent('.hil-btn-glnav').siblings().show();

	}
};


// side menu show hide start
// pageOnhigh();
$(function () {
	$( 'body' ).on( 'click', 'header.global-header div.in-glheader .glheader-content .item-nav', function (e) {
		if ( !$( this ).hasClass( "item-active" ) ) {
			$( this ).addClass( 'item-active' );
			$( 'div.nav-overlay' ).show();
			$( 'body' ).css( 'overflow', 'hidden' );
			$( '.main-container .in-main .global-nav' ).addClass( 'nav-active' );
			$( '.main-container .in-main .main-content' ).removeClass( 'main-slide' );
			$( this ).parent('.hil-btn-glnav').siblings().hide();
		}
		else{
			$( this ).removeClass( 'item-active' );	
			$( 'div.nav-overlay' ).hide();
			$( 'body' ).css( 'overflow', 'scroll' );
			$( '.main-container .in-main .global-nav' ).removeClass( 'nav-active' );
			$( '.main-container .in-main .main-content' ).removeClass( 'main-slide' );
			$( this ).parent('.hil-btn-glnav').siblings().show();

		}

	} );
});

// setupCustRegCarousel();
$( window ).on( 'resize', function ( e ) {
	pageWrapperSpacing();
	pageOnsmall();
	setupCustRegCarousel();
	mheaderOnScroll();
});
// $( window ).on( 'resize', function ( e ) {
// 	pageOnhigh();
// });

// Extended Sub Menu
$('body').on('click', '.global-nav .main-nav .lst-main-nav li a.dropnav', function (e) {
	if ( !$(this).hasClass('mn-open') ) {
		$(this).closest('.lst-main-nav').find('a.dropnav').removeClass('mn-open');
		$(this).closest('.lst-main-nav').find('div.sub-nav').removeClass('sn-open');
		$(this).addClass('mn-open');
		$(this).siblings('div.sub-nav').addClass('sn-open');
	} else {
		$(this).removeClass('mn-open');
		$(this).siblings('div.sub-nav').removeClass('sn-open');
	}
});

$('body').on('click', '.global-nav .main-nav .lst-main-nav li a', function (e) {
	if ( !$(this).hasClass('active-item') ) {
		  $('li a').removeClass("active-item");
		$(this).addClass('active-item');
	} 
});


function customerRegistrationCarousel() {
    // upcoming payment carousel
    $('.customer-registration').owlCarousel({
        loop: false,
        margin: 0,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: true,
                dots: true
            },
            600: {
                items: 2,
                nav: true,
                dots: true
            },
            1000: {
                items: 4,
                nav: true,
                loop: false,
                dots: true
            }
        }
    });
}

function customerRegistrationDestroy() {
	 $('.customer-registration').owlCarousel('destroy');
}

function setupCustRegCarousel() {
	if ($(window).width () < 768) {
		
		customerRegistrationDestroy();
		$('.owl-carousel.customer-registration .item.item-completed a').removeClass('box-hover');
		$('.owl-carousel.customer-registration .item.item-active a').removeClass('box-hover');
	} else {
		customerRegistrationCarousel();
		$('.owl-carousel.customer-registration .item.item-completed a').addClass('box-hover');
		$('.owl-carousel.customer-registration .item.item-active a').addClass('box-hover');


	}
}

function mheaderOnScroll() {
	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();
		//console.log(scroll);
		if ($(window).width () < 768) {
			if ( $( window ).scrollTop() > 10 ) {
			//console.log('a');
				$('header.global-header.sticky-header').addClass('tiny-header');
			}
			else{
				$('header.global-header.sticky-header').removeClass('tiny-header');

			}

		} 
		else{
				$('header.global-header.sticky-header').removeClass('tiny-header');
				// $('header.global-header div.in-glheader .glheader-content .brand-logo').show();
				// $('header.global-header div.in-glheader .glheader-content .header-items').show();

		}
	});
}