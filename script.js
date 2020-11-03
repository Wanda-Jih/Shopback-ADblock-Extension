window.onload = function () {


    
    /* Remove AD blocking box */
    /*  TW domain */
    document.querySelectorAll('.vcb-me-content-wrapper').forEach(s => s.remove());
    document.querySelectorAll('.vcb-me-overlay').forEach(s => s.remove());
    //document.querySelectorAll('.__web-inspector-hide-shortcut__').forEach(s => s.remove());

    /*  SG domain */
    if(window.locate.href="https://*.shopback.sg/*"){
        window.scrollTo(0,document.body.scrollHeight);
    }
    else{
        window.document.body.scrollTop = 0;
        window.document.documentElement.scrollTop = 0;
    }
    document.querySelectorAll('.sp-fancybox-overlay').forEach(s => s.remove());
    //document.querySelectorAll('.swiper-slide-active').forEach(s => s.remove());
    


}();