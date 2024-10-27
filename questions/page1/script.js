let questions = [
    {
        explanation: 'Redes de computadores são sistemas que conectam dois ou mais dispositivos para que possam compartilhar recursos, como dados, arquivos, internet e hardware, permitindo que consigam comunicar-se entre si, troquem informações e usem serviços de forma eficiente e coordenada.',
        title: 'Redes de computadores conectam dispositivos para compartilhar recursos, como arquivos e internet.',
        options: ['Verdadeiro', 'Falso', 'Parcialmente verdade', 'Parcialmente falso'],
        correct: 0
    },
    {
        explanation: 'Para que as redes de computadores sejam capazes de fazer isso, elas precisam realizar uma comunicação, onde emitirão uma informação que conterá as seguintes características: Mensagem, Emissor, Receptor, Meio de Transmissão e Protocolo.',
        title: 'Qual é o principal objetivo de uma rede de computadores?',
        options: ['Aumentar a velocidade dos dispositivos', 'Permitir que dispositivos compartilhem recursos e se comuniquem', 'Melhorar a segurança dos computadores', 'Criar novos softwares automaticamente'],
        correct: 1
    },
    {
        explanation: 'Além disso, redes de computadores contêm 3 principais elementos para o seu funcionamento: Dispositivos (Hosts), Meios de Transmissão e Protocolos.',
        title: 'Qual das opções não é um componente da comunicação em uma rede de computadores?',
        options: ['Emissor', 'Receptor', 'Mensagem', 'Processador'],
        correct: 3
    },
    {
        explanation: 'Os dispositivos, ou hosts, em uma rede de computadores são aqueles conectados à rede, como computadores e smartphones, permitindo o início ou o fim da comunicação.',
        title: 'O que são os dispositivos, ou hosts, em uma rede de computadores?',
        options: ['São cabos que conectam os computadores', 'São programas que fazem a rede funcionar', 'São os dispositivos que se conectam à rede, como computadores e smartphones', 'São senhas de segurança usadas na rede'],
        correct: 2
    },
    {
        explanation: 'Protocolos são conjuntos de regras que controlam a comunicação entre dispositivos em uma rede de computadores. Sem protocolos, a comunicação seria impossível.',
        title: 'Os __________ são conjuntos de regras que controlam a comunicação entre dispositivos em uma rede de computadores.',
        options: ['Plataforma', 'Interações', 'Tecnologia', 'Protocolos'],
        correct: 3
    }
];

let app = {
    currentPos: 0,
    totalPoints: 0,
    start: function() {
        this.showExplanation(questions[this.currentPos]);
    },

    showExplanation: function(q) {
        let explanationDiv = document.getElementById('explanation');
        let titleDiv = document.getElementById('title');
        let options = document.querySelectorAll('.option');
        let feedbackDiv = document.getElementById('feedback');

        explanationDiv.textContent = q.explanation;
        feedbackDiv.textContent = '';

        titleDiv.textContent = '';
        options.forEach(element => {
            element.textContent = '';
            element.onclick = null;
            element.classList.add('hidden'); 
        });

        setTimeout(() => {
            this.hideExplanationAndShowQuestion(q);
        }, 15000); 
    },

    hideExplanationAndShowQuestion: function(q) {
        let explanationDiv = document.getElementById('explanation');
        explanationDiv.textContent = ''; 

        let titleDiv = document.getElementById('title');
        titleDiv.textContent = q.title;

        let options = document.querySelectorAll('.option');
        options.forEach((element, index) => {
            element.textContent = q.options[index];
            element.onclick = () => this.checkAnswer(index); 
            element.classList.remove('hidden'); 
        });
    },

    nextQuestion: function() {
        this.currentPos++;
        if (this.currentPos >= questions.length) {
            alert(`Quiz finalizado! Sua pontuação foi de ${this.totalPoints} pontos.`);
            this.currentPos = 0;
        }
        this.showExplanation(questions[this.currentPos]);
    },

    checkAnswer: function(user) {
        let feedbackDiv = document.getElementById('feedback');
        if (questions[this.currentPos].correct === user) {
            feedbackDiv.textContent = "Correto!";
            this.totalPoints++;
        } else {
            feedbackDiv.textContent = "Errado!";
        }
        this.updateScore();
        setTimeout(() => this.nextQuestion(), 2000);
    },
    
    updateScore: function() {
        let scoreDiv = document.getElementById("score");
        scoreDiv.textContent = `Sua pontuação é: ${this.totalPoints}`;
    }
};

app.start();