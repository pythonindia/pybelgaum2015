$(document).ready(function() {

    if($('#proposalType').length > 0) {
        var proposalChart = new CanvasJS.Chart("proposalType", {

            title: {
                text: "Proposals based on type"
            },
            data: [
                {
                    indexLabelFontSize: 16,
                    toolTipContent: "{indexLabel} <strong>{y} <strong>",
                    type: "column",
                    dataPoints: [
                        { indexLabel: "Core Python", y: 25},
                        { indexLabel: "Embedded", y: 8},
                        { indexLabel: "Infrastructure", y: 12},
                        { indexLabel: "Scientific Computing", y: 19},
                        { indexLabel: "Tools", y: 27},
                        { indexLabel: "Web ", y: 27},
                        { indexLabel: "Workshops ", y: 24},
                    ]
                }
            ]
        });

        proposalChart.render();

        var levelChart = new CanvasJS.Chart("levelType", {
            title: {
                text: "Proposals based on audience level"
            },
            data: [
                {
                    type: "doughnut",
                    startAngle: 10,
                    toolTipContent: "{name} <strong>{y} %<strong>",
                    showInLegend: true,
                    indexLabel: "{name} {y}",
                    dataPoints: [
                        { name: "Beginner", y: 50},
                        { name: "Intermediate", y: 91},
                        { name: "Advanced", y: 2},
                    ]
                }
            ]
        });

        levelChart.render();

        var timeLineChart = new CanvasJS.Chart("proposalTimeLine", {
            title: {
                text: "Proposals based on submitted date",
                margin: 15
            },
            data: [
                {
                    type: "line",
                    axisX: {
                        valueFormatString: "DD/MMM"
                     },
                    dataPoints: [
                        {x: new Date(2014,01,10), y: 2},
                        {x: new Date(2014,01,11), y: 1},
                        {y: 2, x:new Date(2014,01,12)},
                        {y: 1, x:new Date(2014,01,13)},
                        {y: 1, x:new Date(2014,01,14)},
                        {y: 2, x:new Date(2014,01,16)},
                        {y: 2, x:new Date(2014,01,18)},
                        {y: 1, x:new Date(2014,01,28)},
                        {y: 1, x:new Date(2014,02,08)},
                        {y: 1, x:new Date(2014,02,11)},
                        {y: 1, x:new Date(2014,02,22)},
                        {y: 1, x:new Date(2014,02,24)},
                        {y: 2, x:new Date(2014,02,31)},
                        {y: 2, x:new Date(2014,03,01)},
                        {y: 1, x:new Date(2014,03,02)},
                        {y: 1, x:new Date(2014,03,03)},
                        {y: 1, x:new Date(2014,03,04)},
                        {y: 1, x:new Date(2014,03,06)},
                        {y: 2, x:new Date(2014,03,07)},
                        {y: 3, x:new Date(2014,03,09)},
                        {y: 2, x:new Date(2014,03,14)},
                        {y: 4, x:new Date(2014,03,15)},
                        {y: 1, x:new Date(2014,03,16)},
                        {y: 1, x:new Date(2014,03,17)},
                        {y: 1, x:new Date(2014,03,18)},
                        {y: 1, x:new Date(2014,03,21)},
                        {y: 1, x:new Date(2014,03,22)},
                        {y: 1, x:new Date(2014,03,23)},
                        {y: 1, x:new Date(2014,03,27)},
                        {y: 1, x:new Date(2014,03,28)},
                        {y: 1, x:new Date(2014,03,30)},
                        {y: 3, x:new Date(2014,04,01)},
                        {y: 1, x:new Date(2014,04,02)},
                        {y: 1, x:new Date(2014,04,04)},
                        {y: 2, x:new Date(2014,04,05)},
                        {y: 1, x:new Date(2014,04,06)},
                        {y: 1, x:new Date(2014,04,08)},
                        {y: 2, x:new Date(2014,04,09)},
                        {y: 3, x:new Date(2014,04,10)},
                        {y: 1, x:new Date(2014,04,11)},
                        {y: 2, x:new Date(2014,04,12)},
                        {y: 2, x:new Date(2014,04,13)},
                        {y: 2, x:new Date(2014,04,14)},
                        {y: 4, x:new Date(2014,04,15)},
                        {y: 2, x:new Date(2014,04,16)},
                        {y: 3, x:new Date(2014,04,17)},
                        {y: 1, x:new Date(2014,04,18)},
                        {y: 2, x:new Date(2014,04,19)},
                        {y: 3, x:new Date(2014,04,20)},
                        {y: 6, x:new Date(2014,04,21)},
                        {y: 1, x:new Date(2014,04,22)},
                        {y: 4, x:new Date(2014,04,23)},
                        {y: 2, x:new Date(2014,04,24)},
                        {y: 2, x:new Date(2014,04,25)},
                        {y: 2, x:new Date(2014,04,26)},
                        {y: 3, x:new Date(2014,04,27)},
                        {y: 5, x:new Date(2014,04,28)},
                        {y: 8, x:new Date(2014,04,29)},
                        {y: 30, x:new Date(2014,04,30)}
                    ]
                }
            ]
        });

        timeLineChart.render()
    }

    $(window).resize(function() {
        resize_elements();
    });
    $(window).resize();

    var $main_header = $(".main-header");

    var breakpoint_height = 0;
    if($main_header.hasClass("home")){
        breakpoint_height = $(".main-header-home").height() + 50;
    }

    $(window).scroll(function() {
        if($(document).scrollTop()>breakpoint_height){
            if(!$main_header.hasClass("sticky")){
                $main_header.show();
                setTimeout(function(){
                    $main_header.addClass("sticky");
                },0);
            }
        } else {
            if($main_header.hasClass("sticky")){
                if($main_header.hasClass("home")){
                    setTimeout(function(){
                        $main_header.hide();
                        $('body').unbind('touchmove');
                    },300);
                }
                $main_header.removeClass("sticky");
            }
        }
    });

    $top_nav_mobile = $(".top-navigation-mobile");

    $(".mobile_icon").click(function(){

        var top_nav_height = $top_nav_mobile.height();
        var main_header_height = $main_header.height();

        if(!$top_nav_mobile.hasClass("open")){
            // Not open yet

            // Reset margin top to negative of self height
            var mar_top = -top_nav_height;
            $top_nav_mobile.css({'margin-top': mar_top+'px'});

            // We will need to move it down by (self height+main header height)
            var move_height = top_nav_height+main_header_height+$(document).scrollTop();

            $top_nav_mobile.css({"transform": "translate3d(0,"+ move_height+"px, 0)"});
            $top_nav_mobile.addClass("open");

            // Disable scrolling
            $('body').bind('touchmove', function(e){e.preventDefault()});
        } else {
            var move_height = top_nav_height+main_header_height;
            $top_nav_mobile.css({"transform": "translate3d(0,-"+ move_height+"px, 0)"});
            $top_nav_mobile.removeClass("open");

            // Re-enable scrolling
            $('body').unbind('touchmove');
        }
    });

    // Adds easing scrolling to # targets
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            || location.hostname == this.hostname) {

          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top-55
            }, 300);
            return false;
          }
        }
    });

    //Check if there is a map element on page
    var $el_map_wrapper = $("#map_wrapper");
    if($el_map_wrapper){
        var is_homepage = false;
        if($el_map_wrapper.hasClass("home")){
            is_homepage = true;
        }
        load_map('map_wrapper',is_homepage);
    }
});

function resize_elements(){
    var win_width = $(window).width();

    // alert(win_width);

    // Footer triangle
    var footer_height = $(".main-footer").height();
    var $footer_triangle = $(".main-footer").find(".bg-trianlge");
    var footer_border_width = '0 0 '+footer_height+'px '+win_width+'px';
    $footer_triangle.css({'border-width': footer_border_width});

    // Header triangle
    var home_header_height = $(".main-header-home").height();
    var border_height = home_header_height-10;
    var border_width = border_height+'px '+win_width+'px 0 0';
    var $header_triangle = $(".main-header-home").find(".bg-trianlge");
    $header_triangle.css({'border-width': border_width});

    if(win_width>768){

        // Re-enable scrolling
        $('body').unbind('touchmove');

        $top_nav_mobile = $(".top-navigation-mobile");
        $top_nav_mobile.css({'margin-top': '-100%'});
        $top_nav_mobile.removeClass("open");
    }
}


function load_map(map_wrapper,is_homepage){

    var loc_venue =  [15.81528, 74.48755];

    var loc_center = [15.8177, 74.4812];

    // var loc_venue =  [12.94351, 77.59652];

    // var loc_center = [12.9460, 77.5902];

    var venueIcon = L.icon({
        iconUrl: 'static/images/map_marker_icon.png',
        iconSize:     [104, 154], // size of the icon
        iconAnchor:   [52, 154], // point of the icon which will correspond to marker's location
    });
    window.map = new L.map(map_wrapper, {
        inertia: false
    }).setView(loc_center, 16);

    var layer01 = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(window.map);

    L.marker(loc_venue, {
        icon: venueIcon
    }).addTo(window.map).bindPopup("<h3>Nimhans Convention Center</h3>");
}
