let questions = [
    {
        explanation: 'Protocolos são um conjunto de regras que definem como os dispositivos de rede conseguem se comunicar entre si. Eles estabelecem as diretrizes para que a troca dos dados ocorra de maneira organizada e segura.',
        title: 'O que são protocolos em redes de computadores?',
        options: ['Um tipo de hardware usado para comunicação em rede', 'Um sistema operacional de rede', 'Um conjunto de regras que define como os dispositivos se comunicam', 'Um software para monitorar o tráfego da rede '],
        correct: 2
    },

    {
        explanation: 'Sem os protocolos, a comunicação entre os computadores ou smartphones seriam impossível, pois, eles não conseguiriam "compreender" uns aos outros, mesmo estando conectados na mesma rede.',
        title: 'Sem protocolos, dispositivos conectados na mesma rede conseguiriam se comunicar sem problemas.',
        options: ['Verdadeiro', 'Falso', 'Parcialmente verdade', 'Parcialmente falso'],
        correct: 1
    },

    {
        explanation: 'Uma pilha de protocolos  é um conjunto de protocolos organizados em varias camadas, onde, cada uma realiza uma função no processo de comunicação.',
        title: 'O que é uma pilha de protocolos em redes de computadores?',
        options: ['Uma série de dispositivos conectados em rede', 'Um conjunto de protocolos organizados em camadas, onde cada uma realiza uma função específica', 'Um tipo de firewall que organiza pacotes de dados', 'Uma forma de conectar dispositivos fisicamente em uma rede'],
        correct: 1
    },

    {
        explanation: 'Cada camada da pilha de protocolos recebe dados da camada acima ou abaixo dela, processa esses dados de acordo com suas regras, e os repassa para a próxima camada.',
        title: 'Em uma pilha de protocolos, como os dados fluem entre as camadas?',
        options: ['De uma camada para a camada seguinte, respeitando a hierarquia', 'Direto da primeira para a última camada', 'De uma camada para o processador central da rede', 'Apenas entre as camadas inferiores'],
        correct: 0
    },

    {
        explanation: 'Como por exemplo, a primeira camada verificaria que aplicação é, se é um vídeo, ou algo do gênero. A segunda verificaria se a mensagem foi transportada entre os dispositivos direitinho, sem perda de informação como a parte do vídeo que foi supracitado. Assim por diante.',
        title: 'Qual seria uma função realizada por uma das camadas de uma pilha de protocolos?',
        options: [ 'Verificar a temperatura dos cabos', 'Monitorar o uso de energia dos dispositivos', 'Sincronizar a hora dos dispositivos conectados', 'Identificar o tipo de aplicação, como vídeo ou texto'],
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