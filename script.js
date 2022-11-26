setInterval(function(){
    
    let novaHora = new Date();
    // getHours trará a hora
    // geMinutes trará os minutos
    // getSeconds trará os segundos
    let hora = novaHora.getHours();
    let minuto = novaHora.getMinutes();
    let segundo = novaHora.getSeconds();
    let dia = novaHora.getDate();
    let mes = novaHora.getMonth() + 1;
    let ano = novaHora.getFullYear();
  
      // Chamamos a função zero para que ela retorne a concatenação
    // com os minutos e segundos
    minuto = zero(minuto);
    segundo = zero(segundo);
    dia = zero(dia);
    mes = zero(mes);
   
    // Com o textContent, iremos inserir as horas, minutos e segundos
    // no nosso elemento HTML

 document.getElementById('date').textContent = dia+'/'+mes+'/'+ano;
  document.getElementById('hora').textContent = hora+':'+minuto+':'+segundo;
},1000)

// A function zero concatena a string (número) 0 em frente aos números
// mantendo o zero na frente dos números menores que 10. Exemplo:
// 21:05:01
// 21:05:02
// e assim, sucessivamente
function zero(x) {
    if (x < 10) {
        x = '0' + x;
    } return x;
}

//"use strict";

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;

//document.form_main.start.onclick = () => start();
//document.form_main.pause.onclick = () => pause();
//document.form_main.reset.onclick = () => reset();


function start() {
  pause();
  cron = setInterval(() => { timer(); }, 10);
}

function pause() {
  clearInterval(cron);
}

function reset() {
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;
  document.getElementById('hour').innerText = '00';
  document.getElementById('minute').innerText = '00';
  document.getElementById('second').innerText = '00';
  document.getElementById('millisecond').innerText = '000';
}

function timer() {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
    hour++;
  }
  document.getElementById('hour').innerText = returnData(hour);
  document.getElementById('minute').innerText = returnData(minute);
  document.getElementById('second').innerText = returnData(second);
  document.getElementById('millisecond').innerText = returnData(millisecond);
}

function returnData(input) {
  return input > 10 ? input : `0${input}`
}

function cronometro() {
  window.location.href='cronometro.html';
}

function index() {
  window.location.href='index.html';
}