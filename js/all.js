$(document).ready(function() {
 $('.showmenu').on('click', function(e){
 e.preventDefault();
 $('body').toggleClass('menu-show');
 });
});

$(document).ready(function() {
    $(".single_1").fancybox({
          helpers: {
              title : {
                  type : 'float'
              }
          }
      });

    $(".single_2").fancybox({
    	openEffect	: 'elastic',
    	closeEffect	: 'elastic',

    	helpers : {
    		title : {
    			type : 'inside'
    		}
    	}
    });

    $("#single_3").fancybox({
    	openEffect : 'none',
    	closeEffect	: 'none',
    	helpers : {
    		title : {
    			type : 'outside'
    		}
    	}
    });

    $("#single_4").fancybox({
    	helpers : {
    		title : {
    			type : 'over'
    		}
    	}
    });
});