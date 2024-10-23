let perguntas = [
    {
        explicacao: 'Redes de computadores são sistemas que conectam dois ou mais dispositivos para que possam compartilhar recursos, como dados, arquivos, internet, e hardware, permitindo que consigam comunicar-se entre si, troquem informações e usem serviços de forma eficiente e coordenada.',
        titulo: 'Redes de computadores conectam dispositivos para compartilhar recursos, como arquivos e internet.',
        alternativas: ['Verdadeiro', 'Falso', 'Parcialmente verdade', 'Parcialmente falso'],
        correta: 0
    },
    {
        explicacao: 'Para que as redes de computadores sejam capazes de fazer isso, elas precisam realizar uma comunicação, onde emitirão uma informação que conterá as seguintes características: Mensagem, Emissor, Receptor, Meio de Transmissão e Protocolo.',
        titulo: 'Qual é o principal objetivo de uma rede de computadores?',
        alternativas: ['Aumentar a velocidade dos dispositivos', 'Permitir que dispositivos compartilhem recursos e se comuniquem', 'Melhorar a segurança dos computadores', 'Criar novos softwares automaticamente'],
        correta: 1
    },
    {
        explicacao: 'Além disso, redes de computadores contêm 3 principais elementos para o seu funcionamento: Dispositivos (Hosts), Meios de Transmissão e Protocolos.',
        titulo: 'Qual das opções *não* é um componente da comunicação em uma rede de computadores?',
        alternativas: ['Emissor', 'Receptor', 'Mensagem', 'Processador'],
        correta: 3
    },
    {
        explicacao: 'Os dispositivos, ou hosts, em uma rede de computadores são aqueles conectados à rede, como computadores e smartphones, permitindo o início ou o fim da comunicação.',
        titulo: 'O que são os dispositivos, ou hosts, em uma rede de computadores?',
        alternativas: ['São cabos que conectam os computadores', 'São programas que fazem a rede funcionar', 'São os dispositivos que se conectam à rede, como computadores e smartphones', 'São senhas de segurança usadas na rede'],
        correta: 2
    },
    {
        explicacao: 'Protocolos são conjuntos de regras que controlam a comunicação entre dispositivos em uma rede de computadores. Sem protocolos, a comunicação seria impossível.',
        titulo: 'Os xxxxxxxxxx são conjuntos de regras que controlam a comunicação entre dispositivos em uma rede de computadores.',
        alternativas: ['Plataforma', 'Interações', 'Tecnologia', 'Protocolos'],
        correta: 3
    }
];

let app = {
    atualposi: 0,
    totalPontos: 0,
    start: function() {
        this.mostraExplicacao(perguntas[this.atualposi]);
    },

    mostraExplicacao: function(q) {
        let explicacaoDiv = document.getElementById('explicacao');
        let titleDiv = document.getElementById('titulo');
        let alts = document.querySelectorAll('.alternativa');

        explicacaoDiv.textContent = q.explicacao;

        titleDiv.textContent = '';
        alts.forEach(element => {
            element.textContent = '';
            element.onclick = null; // Remove qualquer evento anterior
            element.classList.add('hidden'); // Adiciona classe para esconder
        });

        setTimeout(() => {
            this.ocultaExplicacaoEMostraPergunta(q);
        }, 5000); // 5 segundos para a explicação aparecer
    },
    ocultaExplicacaoEMostraPergunta: function(q) {
        let explicacaoDiv = document.getElementById('explicacao');
        explicacaoDiv.textContent = ''; // Oculta a explicação

        let titleDiv = document.getElementById('titulo');
        titleDiv.textContent = q.titulo;

        let alts = document.querySelectorAll('.alternativa');
        alts.forEach((element, index) => {
            element.textContent = q.alternativas[index];
            element.onclick = () => this.checaResposta(index); // Adicionando evento de clique
            element.classList.remove('hidden'); // Remove a classe para mostrar
        });
    },

    proximaperg: function() {
        this.atualposi++;
        if (this.atualposi >= perguntas.length) {
            alert(`Quiz terminado! Você fez ${this.totalPontos} pontos.`);
            this.atualposi = 0; // Reinicia ao final
        }
        this.mostraExplicacao(perguntas[this.atualposi]);
    },

    checaResposta: function(user) {
        if (perguntas[this.atualposi].correta === user) {
            console.log("Correta");
            this.totalPontos++;
        } else {
            console.log("Errada");
        }
        this.atualizaPontos();
        this.proximaperg();
    },
    
    atualizaPontos: function() {
        let scoreDiv = document.getElementById("pontos");
        scoreDiv.textContent = `Sua pontuação é: ${this.totalPontos}`;
    }
};

app.start();
