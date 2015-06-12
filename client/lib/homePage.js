    var galleryTop = new Swiper('.pizza-slidedetails', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 50,
		effect:'fade',
		pagination: '.swiper-pagination',


    });
    var galleryThumbs = new Swiper('.pizza-bigthumbs', {
        effect: 'coverflow',
		spaceBetween: 5,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true,
		 coverflow: {
            rotate: 70,
            stretch: 0,
            depth: 200,
            modifier: 2,
            slideShadows : true
        }
    });
    galleryTop.params.control = galleryThumbs;
    galleryThumbs.params.control = galleryTop;

    $('#popMessage2KitchenModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text(recipient + '? Good Choice!')
  modal.find('.modal-body input').val(recipient)
});

    
