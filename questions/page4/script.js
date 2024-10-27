let questions = [{
    explanation: 'Para que essa organização do Modelo OSI seja realizada, o modelo se dividiu em 7 camadas, dentre elas, temos a camada física: A camada mais baixa de todas as camadas, é lá onde são realizadas as transferências de bits para um canal de comunicação. Porque é ela que possui as informações que estão em "0s" e "1s".',
    title: 'Qual das seguintes opções representa a função principal da camada física no modelo OSI?',
    options: ['Estabelecer conexões de rede', 'Transmitir bits através de meios físicos', 'Gerenciar sessões de comunicação', 'Controlar erros de transmissão'],
    correct: 1
},

{
    explanation: 'Enlace de dados: A camada de enlace passa a receber os dados e dividi-los em partes menores, adicionado a essas partes alguns elementos específicos, como informações, endereço de origem e a chegada, e realiza uma gestão de falhas.',
    title: 'Qual é o principal protocolo utilizado na camada de enlace de dados para detectar e corrigir erros de transmissão?',
    options: ['IP', 'TCP', 'Ethernet', 'HTTP'],
    correct: 2
},

{
    explanation: 'Camada de rede: Todos os dados da rede externa é supervisionado. Para chegar no endereço de chegada, é realizado o roteamento dos dados entre os nós da rede. Estes nós realizam o encaminhamento dos pacotes de dados. Está rede tem abrangência de uma WAN(Wide-Area Network).',
    title: 'O protocolo IP (Internet Protocol) opera em qual camada do modelo OSI?',
    options: ['Camada de Aplicação', 'Camada de Rede', 'Camada de Sessão', 'Camada de Apresentação'],
    correct: 1
},

{
    explanation: 'Camada de transporte: Sua principal função é ligar a acamada de sessão à camada de rede, garantir que todos os bloco que forma criando no nível 5 sejam redirecionados para a rede.',
    title: 'Qual dos seguintes protocolos garante a entrega confiável de pacotes de dados na camada de transporte?',
    options: ['UDP', 'HTTP', 'TCP', 'DNS'],
    correct: 2
},

{
    explanation: 'Camada de Sessão: A camada de sessão tem por função para controlador de diálogo da rede, estabelecimento de uma sessão entre dois hosts remotos, assim liberando a comunicação entre eles. É considerada a última camada de alto nível (perto do usuário e aplicativos).',
    title: 'Qual é a função principal da camada de sessão no modelo OSI?',
    options: ['Codificação de dados', 'Controle de diálogo entre sistemas', 'Endereçamento de rede', 'Transmissão de pacotes'],
    correct: 1
},

{
    explanation: 'Camada de apresentação: As palavras semântica e sintaxe desempenham um papel crucial nesta camada, pois se referem às informações transmitidas, permitindo que computadores com diferentes formas internas de representar os dados possam se comunicar.',
    title: 'Qual das seguintes é uma função típica da camada de apresentação no modelo OSI?',
    options: ['Compressão de dados', 'Definição de rotas de rede', 'Estabelecimento de sessões', 'Transmissão de bits'],
    correct: 0
},

{
    explanation: 'Camada de aplicação: A camada 7 é a mais próxima do usuário, ele que mostra todos os aplicativos e que têm acesso à rede. Disponibiliza ao usuário a interface e acesso a email, transferência de arquivos remotos, gerenciamento de banco de dados compartilhados e entre outros.',
    title: 'Qual dos seguintes protocolos opera na camada de aplicação do modelo OSI?',
    options: ['FTP', 'ICMP', 'ARP', 'PPP'],
    correct: 0
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

