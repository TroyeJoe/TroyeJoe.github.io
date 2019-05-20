/**
 * Created by d on 2016/11/19.
 */
window.onload = function(){
    $('.loading').hide();
    var mySwiper = new Swiper('.swiper-container',{
        direction: 'vertical',//Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)
        hashnav:true,//将hashnav设置为true，并在每个slide处增加data-hash属性，可在当前页刷新。
//      pagination : '.swiper-pagination', 分页器容器
        onInit: function(swiper){ 
            swiperAnimateCache(swiper); 
            swiperAnimate(swiper); 
            $('.page').scrollTop(0);

        },
        onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper); 
        	$('.page').scrollTop(0);
//      	$(".page-L").animate({scrollTop: 0}, 500)
            var i = $('.swiper-slide-active').index();
            // alert(i)
            $('.aside .nav li').removeClass('active')
            $('.aside .nav li').eq(i).addClass('active')
        },
        noSwiping : true,
        noSwipingClass : 'stopSwip',

    });
    
    $('#indexenter').click(function() {
        mySwiper.slideTo(1, 500, true);
    })
    
	

    // $(document).one("touchstart", function() {
    //  $("#music").removeClass().addClass("pause");
    //  $("#myMusic")[0].play();
    //  $(".audio").addClass("Rot");
    // })
    $("#music").click(function() {
     if($(this).attr("class") == "play") {
         $(this).removeClass().addClass("pause");
         $("#myMusic")[0].play();
         $(".audio").addClass("Rot");
     } else if($(this).attr("class") == "pause") {
         $(this).removeClass().addClass("play");
         $("#myMusic")[0].pause();
         $(".audio").removeClass("Rot");
     }
    })
    document.addEventListener("WeixinJSBridgeReady", function() {
     document.getElementById('myMusic').play();
    }, false);
    // 侧边栏
    $('.aside .nav li').each(function(i,val) {
        $(val).click(function(event) {
             mySwiper.slideTo(i+1, 500, true);
        });
        
     });



    
};
