var Links = {
    setColor : function (color) {
        /*var i = 0;
        var alist = document.querySelectorAll('a');
        while (i < alist.length) {
            alist[i].style.color = color;
            i = i + 1;
        }*/
        //jQuery 적용: 모든 a태그의 css를 바꾸는 것을 jQuery에서 제어
        $('a').css('color', color);
    }
}
var Body = {
    setColor : function (color) {
        // document.querySelector('body').style.color = color;
        $('body').css('color', color);
    },
    setBackgroundColor : function (color) {
        // document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);
    }
}
function nightDayHandler(myself) {
    if (myself.value === 'night') {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        myself.value = 'day';
        Links.setColor('powderblue');
    } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        myself.value = 'night';
        Links.setColor('blue');
    }
}