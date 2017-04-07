//del
$('.preloader').hide();
$('.main__text').css({
    width: 60 + '%',
    opacity: .3
})
$('header').css({
    top: 0,
    opacity: 1
})
//del


var audio = $("audio")[0],
    $headerLink = $('.header__nav');
/*

header navigation buttons

*/
$headerLink.each(function () {
    if ($(this).attr("href") == false) {
        $(this).css({
            opacity: .2,
            cursor: 'default'
        })
    }
})

//nav click section activation
$headerLink.click(function (e) {
    e.preventDefault();
    var link = $(this).attr("href");
    $('section').removeClass('active');
    $('section.' + link + '').addClass('active');
    //    console.log(link);
});
//nav hover
function alienAnim() {
    $('.alien').animate({
        height: 70 + 'vh',
        opacity: 1
    }, 2000)
}
$headerLink.mouseenter(function () {
    audio.play();
    alienAnim();
    //    $(this).end();
});
$headerLink.mouseleave(function () {
    audio.pause();
    audio.currentTime = 0;
    $('.alien').animate({
        height: 60 + 'vh',
        opacity: .3
    }, 500);

});

/*

game

*/

var gameExitBtn = $('section.game').find('.game__exit'),
    gameExitBtnOffset = gameExitBtn.offset(),
    gameOverVid = $('.game__over'),
    gameTime = document.createElement('span'),
    timerSet = 10,
    curTime = timerSet,
    gameBtn = {},
    timer;
$('.game__warning').append(gameTime).find('span').html(curTime);
//nav game button click
$('a.game').click(timerGo);


function timerFunc() {
    if (!curTime) {
        gameOver();
    }
    $('.game__warning span').html(curTime--);
}
function timerGo() {
    timer = setInterval(timerFunc, 1000)
}
// game over func
function gameOver() {
    gameOverVid.show();
    gameOverVid[0].play();
    clearInterval(timer);
    setTimeout(gameClose, 3000);
}
// exit game funk
function gameClose() {
    $('section.game').removeClass('active');
    $('section.main').addClass('active');
    gameOverVid.hide();
    curTime = timerSet;
}
//game window click
$('section.game').click(function (e) {
    var x = e.clientX,
        y = e.clientY;
    if (x < gameBtn.xMin + gameBtn.width && x > gameBtn.xMin && y < gameBtn.yMin + gameBtn.height && y > gameBtn.yMin) {
        gameClose();
        clearInterval(timer);
    } else {
        gameOver();
    }
})

//set game Btn Position coordinates
function gameBtnPositions() {
    gameBtn.xMin = gameExitBtnOffset.left;
    gameBtn.yMin = gameExitBtnOffset.top;
    gameBtn.width = gameExitBtn.width();
    gameBtn.height = gameExitBtn.height();
    gameBtn.xMax = gameBtn.xMin + gameBtn.width;
    gameBtn.yMax = gameBtn.yMin + gameBtn.height;
}
gameBtnPositions();


//spotlight init
var elem = document.getElementById('spotlight'),
    canTouch = !!('ontouchstart' in window);

if (canTouch) {
    document.body.addEventListener('touchmove', onTouchStart, false);
    document.body.addEventListener('touchstart', onTouchStart, false);
} else {
    document.body.addEventListener('mousemove', onMoseMove, false);
}

function onTouchStart(e) {
    var target = e.targetTouches[0];
    elem.style.backgroundImage = '-webkit-radial-gradient(' + target.pageX + 'px ' + target.pageY + 'px, circle cover, rgba(0,0,0,0.2) 5%, rgba(0,0,0,1) 10%)';
}

function onMoseMove(e) {
    elem.style.backgroundImage = '-webkit-radial-gradient(' + e.pageX + 'px ' + e.pageY + 'px, circle cover, rgba(0,0,0,0.2) 5%, rgba(0,0,0,1) 10%)';
}

/*



*/

/*

window resize

*/
window.onresize = function () {
    gameBtnPositions();
}
/*


document ready



*/
$(document).ready(function () {
    $('.slick').slick();
});
/*


window elements load


*/

//window.onload = function () {
//    $('.preloader').fadeOut(500);
//    headerAnim();
//    $('.main__text').animate({
//        width: 60 + '%',
//        opacity: .3
//    }, 6000)
//
//    function headerAnim() {
//        $('header').animate({
//            top: 0,
//            opacity: 1
//        }, 1000)
//    }
//};