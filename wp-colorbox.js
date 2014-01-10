jQuery(document).ready(function($) {
    $(".wp-colorbox-image").colorbox();
    $(".wp-colorbox-youtube").colorbox({iframe:true, innerWidth:640, innerHeight: 480});
    $(".wp-colorbox-vimeo").colorbox({iframe:true, innerWidth:640, innerHeight: 480});
    $(".wp-colorbox-iframe").colorbox({iframe:true, width:"80%", height:"80%"});
    $(".wp-colorbox-inline").colorbox({inline:true, width:"50%"});
});


