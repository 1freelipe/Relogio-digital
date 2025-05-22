function getDia (dia, diaSemana){
switch(dia){
    case 0:
        diaSemana = 'Domingo';
        break;
    case 1:
        diaSemana = 'Segunda-Feira';
        break;
    case 2:
        diaSemana = 'Terça-Quarta';
        break;
    case 3:;
        diaSemana = 'Quarta-Feira';
        break;
    case 4:
        diaSemana = 'Quinta-Feira';
        break;
    case 5:
        diaSemana = 'Sexta-Feira';
        break;
    case 6:
        diaSemana = 'Sábado';
        break;
}
return diaSemana;
}

function getMes(mes, mesAno){
    switch(mes){
        case 0:
            mesAno = 'Janeiro'
            break;
        case 1:
            mesAno = 'Fevereiro'
            break;
        case 2:
            mesAno = 'Março'
            break;
        case 3:
            mesAno = 'Abril'
            break;
        case 4:
            mesAno = 'Maio'
            break;
        case 5:
            mesAno = 'Junho'
            break;
        case 6:
            mesAno = 'Julho'
            break;
        case 7:
            mesAno = 'Agosto'
            break;
        case 8:
            mesAno = 'Setembro'
            break;
        case 9:
            mesAno = 'Outubro'
            break;
        case 10:
            mesAno = 'Novembro'
            break;
        case 11:
            mesAno = 'Dezembro'
            break;
    }
    return mesAno;
}

function zero(num){
    return num >= 10 ? num : `0${num}`
}

const resultado = document.querySelector('.container')

function atualizarRelogio(){
const data = new Date();
const dia = data.getDay();
const mes = (data.getMonth());
const dia1 = zero(data.getDate());
const ano = data.getFullYear();
const hora = zero(data.getHours());
const minuto = zero(data.getMinutes());
const seg = data.getSeconds().toString().padStart(2, '0');

let diaSemana;
let mesAno;

resultado.innerHTML = `${getDia(dia)}, ${zero(dia1)} de ${getMes(mes)} de ${ano} às ${hora}:${minuto}:${(seg)}`;
}

setInterval(atualizarRelogio, 1000);

atualizarRelogio();
