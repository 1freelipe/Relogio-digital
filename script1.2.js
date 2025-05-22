function atualizarRelogio(){
    const data = new Date();

    const diasSemana = ['Domingo', 'Segunda-Feira', 'Terça-feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];

    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubto', 'Novembro', 'Dezembro'];

    const diaSemana = diasSemana[data.getDay()];
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = meses[data.getMonth()];
    const ano = data.getFullYear().toString();
    const hora = data.getHours().toString().padStart(2, '0');
    const minutos = data.getMinutes().toString().padStart(2, '0');
    const segundos = data.getSeconds().toString().padStart(2, '0');

    const dataFormatada = `${diaSemana}, ${dia} de ${mes} de ${ano} - às ${hora}:${minutos}:${segundos}`;

    document.querySelector('.container').textContent = dataFormatada;
}

atualizarRelogio()

setInterval(atualizarRelogio, 1000)