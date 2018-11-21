
setTimeout(function() {
    $('.load').fadeOut('fast');
}, 2800);

var page=0
setInterval(function() {
    page+=1
    if (page>2){
        page=0;
    }
    $('.nav').css('left','-'+page*100+'%');
}, 4000);

// lottie

$(document).ready(function(){
    var data = {
    container: document.getElementById('op'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'https://api.myjson.com/bins/14ltkm.json'
    }
    var anim = lottie.loadAnimation(data);
    });

$(document).ready(function(){
    var data = {
    container: document.getElementById('logo'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://api.myjson.com/bins/p5tda.json'
    }
    var anim = lottie.loadAnimation(data);
    });

$(document).ready(function(){
    var data = {
    container: document.getElementById('easy'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://api.myjson.com/bins/1fnv1q.json'
    }
    var anim = lottie.loadAnimation(data);
    });

$(document).ready(function(){
    var data = {
    container: document.getElementById('powerful'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://api.myjson.com/bins/17zdce.json'
    }
    var anim = lottie.loadAnimation(data);
    });

$(document).ready(function(){
    var data = {
    container: document.getElementById('step'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://api.myjson.com/bins/10avn2.json'
    }
    var anim = lottie.loadAnimation(data);
    });


    
