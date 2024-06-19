jQuery(function() {
    jQuery(".about_page_slider.anythere.owl-carousel").owlCarousel({
        loop:true,
        margin:43,
        nav: false,
        dots: true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
//Кол-во слайдо на разном разрешении
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
        jQuery(".about_page_slider.once.owl-carousel").owlCarousel({
            loop:false,
            margin:43,
            nav: false,
            dots: false,
            autoplay:false,
            responsive:{
//Кол-во слайдо на разном разрешении
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        });
	jQuery(".about_page_slider.apparat.owl-carousel").owlCarousel({
            loop:false,
            margin:43,
            nav: false,
            dots: false,
            autoplay:false,
            responsive:{
//Кол-во слайдо на разном разрешении
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        });

    jQuery("#analitics.owl-carousel").owlCarousel({
        items:1,
        loop:true,
        margin:70,
        nav: false,
        dots: true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
//Кол-во слайдо на разном разрешении
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
	 jQuery("#news.owl-carousel").owlCarousel({
         items:1,
         loop:true,
         margin:70,
         nav: false,
         dots: true,
         autoplay:true,
         autoplayTimeout:3000,
         autoplayHoverPause:true,
        responsive:{
//Кол-во слайдо на разном разрешении
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
	jQuery("#members.owl-carousel").owlCarousel({
        items:1,
        loop:true,
        margin:20,
        nav: true,
        navText: ["<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"35\" viewBox=\"0 0 20 35\" fill=\"none\">\n" +
        "<rect x=\"19.8361\" y=\"31.969\" width=\"3.76493\" height=\"24.2874\" rx=\"1.88246\" transform=\"rotate(135 19.8361 31.969)\" fill=\"#55657F\"/>\n" +
        "<rect x=\"17.1738\" width=\"3.76493\" height=\"24.2874\" rx=\"1.88246\" transform=\"rotate(45 17.1738 0)\" fill=\"#55657F\"/>\n" +
        "</svg>","<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"35\" viewBox=\"0 0 20 35\" fill=\"none\">\n" +
        "<rect y=\"2.66223\" width=\"3.76493\" height=\"24.2874\" rx=\"1.88246\" transform=\"rotate(-45 0 2.66223)\" fill=\"#55657F\"/>\n" +
        "<rect x=\"2.66235\" y=\"34.6312\" width=\"3.76493\" height=\"24.2874\" rx=\"1.88246\" transform=\"rotate(-135 2.66235 34.6312)\" fill=\"#55657F\"/>\n" +
        "</svg>"],
        dots: false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
//Кол-во слайдо на разном разрешении
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
	
	//Рабочие органы ассоциации
	jQuery('p.gr').click(function (event) {
	var divtoggle =	jQuery(event.target).next();
		jQuery(event.target).toggleClass('active');
  // сворачиваем или разворачиваем collapse-элемент
  jQuery(divtoggle).collapse('toggle');
});

jQuery(function ($) {	
	
	});

    document.addEventListener( 'wpcf7mailsent', function( event ) {
        jQuery('#contact_form_pop_up .title').hide();
        jQuery('#contact_form_pop_up #wpcf7-f132-o1').hide();
        jQuery('#contact_form_pop_up').prepend('<div class="success"><div class="title">Благодарим за заявку<br>на вступление в АИИК!</div><p>На Вашу почту направлена подробная информация о порядке вступления в Ассоциацию.</p><p>В ближайшее время в Вами свяжется сотрудник АИИК, который поможет Вам оформить необходимые документы.</p></div>');
    }, false );

});