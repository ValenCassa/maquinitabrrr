var slider = document.getElementById('myRange');



slider.oninput = function() {
    sliderValue = slider.value;
    console.log(sliderValue);
    var text = document.getElementById('main');
    var maquinita = document.getElementById('maquinita');
    var r1 = document.querySelector('.r1');
    var r2 = document.querySelector('.r2');
    var r3 = document.querySelector('.r3');
    var r4 = document.querySelector('.r4');
    var r5 = document.querySelector('.r5');
    var r6 = document.querySelector('.r6');
    var r7 = document.querySelector('.r7');
    var r8 = document.querySelector('.r8');
    var r9 = document.querySelector('.r9');
    
    if (sliderValue <= 10) {
        document.querySelector('video').playbackRate = 0.1;
        r1.classList.remove('active');
    } else if (10 < sliderValue && sliderValue < 20) {
        var audio = document.querySelector('audio').playbackRate = 1;
        document.querySelector('video').playbackRate = 0.4;
        text.className = '';
        r1.classList.add('active');
        r2.classList.remove('active');
    } else if (20 < sliderValue && sliderValue < 30) {
        var audio = document.querySelector('audio').playbackRate = 1.1;
        document.querySelector('video').playbackRate = 0.6;
        text.className = '';
        r2.classList.add('active');
        r3.classList.remove('active');
    } else if (30 < sliderValue && sliderValue < 40) {
        document.querySelector('video').playbackRate = 0.8;
        text.className = '';
        text.classList.add('shake-little', 'shake-constant');
        r3.classList.add('active');
        r4.classList.remove('active');
    } else if (40 < sliderValue && sliderValue < 50) {
        document.querySelector('video').playbackRate = 1.2;
        r4.classList.add('active');
        r5.classList.remove('active');
    }  else if (50 < sliderValue && sliderValue < 60) {
        var audio = document.querySelector('audio').playbackRate = 1.2;
        document.querySelector('video').playbackRate = 1.8;
        r5.classList.add('active');
        r6.classList.remove('active');
    } else if (60 < sliderValue && sliderValue < 70) {
        document.querySelector('video').playbackRate = 1.4;
        text.className = '';
        text.classList.add('shake', 'shake-constant');
        r6.classList.add('active');
        r7.classList.remove('active');
    } else if (70 < sliderValue && sliderValue < 80) {
        document.querySelector('video').playbackRate = 3;
        r7.classList.add('active');
        r8.classList.remove('active');
    } else if (80 < sliderValue && sliderValue < 90) {
        var audio = document.querySelector('audio').playbackRate = 1.3;
        document.querySelector('video').playbackRate = 4;
        r8.classList.add('active');
        r9.classList.remove('active');
        maquinita.classList.remove('hard');
        r1.classList.remove('hard');
        r2.classList.remove('hard');
        r3.classList.remove('hard');
        r4.classList.remove('hard');
        r5.classList.remove('hard');
        r6.classList.remove('hard');
        r7.classList.remove('hard');
        r8.classList.remove('hard');
        r9.classList.remove('hard');
    } else if (90 < sliderValue && sliderValue < 100) {
        var audio = document.querySelector('audio').playbackRate = 1.4;
        text.className = '';
        text.classList.add('shake-hard', 'shake-constant');
        document.querySelector('video').playbackRate = 4;
        r9.classList.add('active', 'hard');
        maquinita.classList.add('hard');
        r1.classList.add('hard');
        r2.classList.add('hard');
        r3.classList.add('hard');
        r4.classList.add('hard');
        r5.classList.add('hard');
        r6.classList.add('hard');
        r7.classList.add('hard');
        r8.classList.add('hard');

    }

};




