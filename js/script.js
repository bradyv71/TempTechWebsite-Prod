// this below is using email js to submit email form from website to email server
function sendMail(){
    var params={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value,
        phone:document.getElementById("phone").value,
        service:document.getElementById("service").value,
        address:document.getElementById("address").value,
    };
    const serviceID="service_098ka3p"
    const templateID="template_zc04hjy"

    emailjs
    .send(serviceID,templateID,params).then((res)=>{
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("message").value="";
        document.getElementById("phone").value="";
        document.getElementById("service").value="";
        document.getElementById("address").value="";

        console.log(res);
        alert("Your message was sent sucessfully");
    })
    .catch((err) =>console.log(err));
}





	var scroll = new SmoothScroll('a[href*="#"]');
  
	// -----------------------------
	//  Count Up
	// -----------------------------
	function counter() {
	  var oTop;
	  if ($('.counter').length !== 0) {
		oTop = $('.counter').offset().top - window.innerHeight;
	  }
	  if ($(window).scrollTop() > oTop) {
		$('.counter').each(function () {
		  var $this = $(this),
			countTo = $this.attr('data-count');
		  $({
			countNum: $this.text()
		  }).animate({
			countNum: countTo
		  }, {
			duration: 1000,
			easing: 'swing',
			step: function () {
			  $this.text(Math.floor(this.countNum));
			},
			complete: function () {
			  $this.text(this.countNum);
			}
		  });
		});
	  }
	}
	// -----------------------------
	//  On Scroll
	// -----------------------------
	$(window).scroll(function () {
	  counter();
  
	  var scroll = $(window).scrollTop();
	  if (scroll > 50) {
		$('.navigation').addClass('sticky-header');
	  } else {
		$('.navigation').removeClass('sticky-header');
	  }
	});
  
  (jQuery);
//   this is code from the new site
setTimeout(function(){
    var containerEl = document.querySelector('.filtr-container');
    var filterizd;
    if (containerEl) {
      filterizd = $('.filtr-container').filterizr({});
    }
  }, 500);

  /* ========================================================================= */
  /*	Testimonial Carousel
  /* =========================================================================  */
  //Init the slider
  $('.testimonial-slider').slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
  });


  /* ========================================================================= */
  /*	Clients Slider Carousel
  /* =========================================================================  */
  //Init the slider
  $('.clients-logo-slider').slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false
      }
    }
    ]
  });