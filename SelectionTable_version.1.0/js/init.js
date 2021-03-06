
  var d = new Date();
  document.getElementById("today").innerHTML = d.toDateString();



    $('#openTable').click(function(e) {
       openOverlay('#overlay-inAbox');
       e.preventDefault();
    });

     $('#close').click(function(e) 
    {
        closeOverlay();
        if ($(this).attr('href') == '#') e.preventDefault();
    });

    function openOverlay(olEl) {
        $oLay = $(olEl);
        
        if ($('#overlay-shade').length == 0)
          {  $('body').prepend('<div id="overlay-shade"></div>');}

        $('#overlay-shade').fadeTo(300, 0.4, function() {
            var props = {
                oLayWidth       : $oLay.width(),
                scrTop          : $(window).scrollTop(),
                viewPortWidth   : $(window).width()
            };

            var leftPos = (props.viewPortWidth - props.oLayWidth) / 2;

            $oLay
                .css({
                    display : 'block',
                    opacity : 0,
                    top : '-=300',
                    left : leftPos+'px'
                })
                .animate({
                    top : props.scrTop + 40,
                    opacity : 1
                }, 600);
        });
    }

      function closeOverlay() 
      {
        $('.overlay').animate({
            top : '-=300',
            opacity : 0
        }, 400, function() {
            $('#overlay-shade').fadeOut(300);
            $(this).css('display','none');
        });
    }
