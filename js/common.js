$(function(){
	$.fn.extend({
            animateCss: function(animationName) {
                var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                if(!this.hasClass('visible')){
                this.addClass('visible animated ' + animationName).one(animationEnd, function() {
                    $(this).removeClass('animated ' + animationName);
                    // $(this).removeClass('visible');
                });
                };
            }
        });
	
})



        