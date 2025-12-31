const button = document.querySelector('#night_day');
const body = document.querySelector('body');

var Links = {
    SetColor:function(color) {
        var alist = document.querySelectorAll('a');
        var i = 0;
        while(i < alist.length) {
            alist[i].style.color = color;
            i += 1
        }
    }
}

var Body = {
    SetColor:function (color){
        body.style.color = color;
    },
    SetBackgroundColor:function (color){
        body.style.backgroundColor = color;
    }
}

var Button = {
    SetColor:function (color){
        button.style.color = color;
    },
    SetBackgroundColor:function (color){
        button.style.backgroundColor = color;
    }
}

function day_night(self) {                     /*함수 인자로 self를 주는 습관을 들이는게 나중에 편함*/
    if (self.value === 'night') {
        Body.SetBackgroundColor('black');
        Body.SetColor('white');
        self.value = 'day';
        Button.SetBackgroundColor('white');
        Button.SetColor('black');
        Links.SetColor('aqua');
    }
    else {
        Body.SetBackgroundColor('white');
        Body.SetColor('black');
        self.value = 'night';
        Button.SetBackgroundColor('black');
        Button.SetColor('white');
        Links.SetColor('blue');
    }
}

// button.addEventListener('click', day_night(this));