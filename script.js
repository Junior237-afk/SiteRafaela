const botaoAgendar = document.getElementById("btnAgendar");

botaoAgendar.addEventListener("click", function () {

    // Pegando os valores do formulário
    const servico = document.getElementById("servico").value;
    const data = document.getElementById("data").value;
    const horario = document.getElementById("horario").value;
    const nome = document.getElementById("nome").value;
    const whatsappCliente = document.getElementById("whatsapp").value;


    // Verificando se todos os campos foram preenchidos
    if (
        servico === "" ||
        data === "" ||
        horario === "" ||
        nome === "" ||
        whatsappCliente === ""
    ) {
        alert("Por favor, preencha todos os campos.");
        return;
    }


    // Convertendo a data para o formato brasileiro
    const dataFormatada = data.split("-").reverse().join("/");


    // Pegando o nome bonito do serviço
    let nomeServico;

    if (servico === "manicure") {
        nomeServico = "Manicure";
    } 
    else if (servico === "alongamento") {
        nomeServico = "Alongamento";
    } 
    else if (servico === "nail-art") {
        nomeServico = "Nail Art";
    }


    // Número do WhatsApp da Rafaela
    const numeroRafaela = "5599984180845";


    // Mensagem que será enviada
    const mensagem = `
 *NOVO AGENDAMENTO*

 *Nome:* ${nome}
 *Serviço:* ${nomeServico}
 *Data:* ${dataFormatada}
 *Horário:* ${horario}
 *WhatsApp da cliente:* ${whatsappCliente}

 Gostaria de confirmar este horário.
`;


    // Transformando a mensagem em formato de URL
    const mensagemCodificada = encodeURIComponent(mensagem);


    // Criando o link do WhatsApp
    const linkWhatsApp =
        `https://wa.me/${numeroRafaela}?text=${mensagemCodificada}`;


    // Abrindo o WhatsApp
    window.open(linkWhatsApp, "_blank");

});