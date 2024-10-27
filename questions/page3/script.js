
let questions = [{
    explanation: 'O Modelo OSI é uma referência teórica para divisão de uma pilha de serviços e protocolos, seu objetivo é fornecer uma organização lógica que garanta que todas as tecnologias inseridas sejam compatíveis entre si e consigam atuar entre si.',
    title: 'Qual é o principal objetivo do Modelo OSI?',
    options: [ 'Proporcionar compatibilidade entre diferentes tecnologias', 'Estabelecer uma única tecnologia de rede', 'Fornecer apenas serviços de rede locais', 'Substituir todos os protocolos de rede existentes'],
    correct: 0
},

{
    explanation: 'O Modelo OSI padroniza a divisão da pilha de protocolos, trazendo vantagens, pontuadas por Pinheiro (2008) como: Decompor as comunicações de rede em partes menores, facilitando a análise e resolução de problemas.',
    title: 'Qual é uma das vantagens de decompor as comunicações de rede em partes menores no Modelo OSI?',
    options: ['Aumentar a complexidade da rede', 'Facilitar a análise e o suporte técnico', 'Impedir a comunicação entre redes diferentes', 'Reduzir a segurança da rede'],
    correct: 1
},

{
    explanation: 'Dentre as vantagens, o Modelo OSI padroniza os componentes de rede, permitindo o desenvolvimento e o suporte por parte de vários fabricantes.',
    title: 'Por que a padronização dos componentes de rede é importante no Modelo OSI?',
    options: ['Para garantir que todos os dispositivos sejam do mesmo fabricante', 'Para permitir o desenvolvimento e suporte de diferentes fabricantes', 'Para limitar o uso de protocolos de rede específicos', 'Para evitar modificações em qualquer camada'],
    correct: 1
},

{
    explanation: 'O Modelo OSI também possibilita a comunicação entre tipos diferentes de hardware e software de rede, promovendo a interoperabilidade.',
    title: 'O que o Modelo OSI promove ao possibilitar a comunicação entre diferentes tipos de hardware e software?',
    options: ['Compatibilidade limitada', 'Interoperabilidade', 'Segurança adicional', 'Incompatibilidade entre redes'],
    correct: 1
},

{
    explanation: 'Outra vantagem do Modelo OSI é evitar que modificações em uma camada afetem as outras, o que acelera o desenvolvimento e a atualização de tecnologias de rede.',
    title: 'Por que é importante que modificações em uma camada do Modelo OSI não afetem as outras?',
    options: ['Para reduzir a segurança da rede', 'Para permitir uma maior compatibilidade com redes antigas', 'Para acelerar o desenvolvimento de novas tecnologias', 'Para garantir que todas as camadas sejam modificadas simultaneamente'],
    correct: 2
}
];

let app = {
    currentPos: 0,
    totalPoints: 0,
    start: function () {
        this.showExplanation(questions[this.currentPos]);
    },

    showExplanation: function (q) {
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
        }, 20000);
    },

    hideExplanationAndShowQuestion: function (q) {
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

    nextQuestion: function () {
        this.currentPos++;
        if (this.currentPos >= questions.length) {
            alert(`Quiz finalizado! Sua pontuação foi de ${this.totalPoints} pontos.`);
            this.currentPos = 0;
        }
        this.showExplanation(questions[this.currentPos]);
    },

    checkAnswer: function (user) {
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

    updateScore: function () {
        let scoreDiv = document.getElementById("score");
        scoreDiv.textContent = `Sua pontuação é: ${this.totalPoints}`;
    }
};

app.start();