//1)Создайте h2 c текущим временем, к примеру " Время: 13:34:45";
//2) Примените setInterval для отображения времени каждую секунду, чтобы были идущие чаcы
//3) Создайте кнопки Start и Stop
//4) Навесьте обработчики события на клик.
//5) При клике на Stop время должно остановиться
//6) При клике на Start время должно продолжить свой ход (скачек времени, это нормально)


const myTitle = document.createElement('div');
myTitle.innerHTML = "<h1 id='txt'></h1>";
document.body.appendChild(myTitle);

const myDiv = document.createElement('div');
myDiv.innerHTML = "<button id='start-btn'>Start</button>" + "<button id='stop-btn'>Stop</button>";
document.body.appendChild(myDiv);

function checkTime(i)
{
    if (i<10)
    {
        i="0" + i;
    }
    return i;
}

function startTime()
{
    let tm = new Date();
    let h = tm.getHours();
    let m = tm.getMinutes();
    let s = tm.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML ="Время: "+h+":"+m+":"+s;
    tm = setInterval('startTime()',1000);

    document.getElementById('start-btn').addEventListener('click', () => {
        tm = setInterval(startTime, 1000);
    })

    document.getElementById('stop-btn').addEventListener('click', () => {
        clearInterval(tm);
    });
}

startTime();




