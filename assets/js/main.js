$(document).ready(function () {



  $('.slider-active').slick({
    infinite: true,
    slidesToShow: 1,
    arrows: false,
    dots:false,
    autoplay: true,
    slidesToScroll: 1
  });
  $('.testimonial-active').slick({
    infinite: true,
    slidesToShow: 1,
    arrows: false,
    dots:true,
    autoplay: true,
    slidesToScroll: 1
  });
  $('.brand-active').slick({
    infinite: true,
    slidesToShow: 5,
    arrows: false,
    dots:false,
    autoplay: true,
    slidesToScroll: 1
  });

  $('.counter').counterUp({
    delay: 10,
    time: 1000

  });

  //counter
  // let counter = document.querySelectorAll('.counter');
  // let count = 0;
  // counter.forEach(function(el){
  //   let totalCountStr = el.innerText;
  //   let splitCount = totalCountStr.split(',').join('');
  //   let interVal = setInterval(function(){
  //     // count++;
  //     count == parseInt(splitCount) ? clearInterval(interVal) : count++;
  //     el.innerText = count;
  //   }, 10)
  // })

})