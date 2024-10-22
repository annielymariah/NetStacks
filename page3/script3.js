let perguntas = [
    {
        titulo: 'Pergunta nº 1: Qual das seguintes opções representa a função principal da camada física no modelo OSI?',
        alternativas: ['Estabelecer conexões de rede', 'Transmitir bits através de meios físicos', 'Gerenciar sessões de comunicação', 'Controlar erros de transmissão'],
        correta: 1
    },

    {
        titulo: 'Pergunta nº 2: Qual é o principal protocolo utilizado na camada de enlace de dados para detectar e corrigir erros de transmissão?',
        alternativas: ['IP', 'TCP', 'Ethernet', 'HTTP'],
        correta: 2
    },

    {
        titulo: 'Pergunta nº 3: O protocolo **IP** (Internet Protocol) opera em qual camada do modelo OSI?',
        alternativas: ['Camada de Aplicação', 'Camada de Rede', 'Camada de Sessão ', 'Camada de Apresentação'],
        correta: 1
    },

    {
        titulo: 'Pergunta nº 4: Qual dos seguintes protocolos garante a entrega confiável de pacotes de dados na camada de transporte?',
        alternativas: ['UDP', 'HTTP', 'TCP', 'DNS'],
        correta: 2
    },

    {
        titulo: 'Pergunta nº 5: Qual é a função principal da camada de sessão no modelo OSI?',
        alternativas: ['Codificação de dados', 'Controle de diálogo entre sistemas ', 'Endereçamento de rede', 'Transmissão de pacotes'],
        correta: 1
    },

    {
        titulo: 'Pergunta nº 6: Qual das seguintes é uma função típica da camada de apresentação no modelo OSI?',
        alternativas: ['Compressão de dados', 'Definição de rotas de rede', 'Estabelecimento de sessões', 'Transmissão de bits'],
        correta: 0
    },

    {
        titulo: 'Pergunta nº 7: Qual dos seguintes protocolos opera na camada de aplicação do modelo OSI?',
        alternativas: ['FTP', 'ICMP', 'ARP', 'PPP'],
        correta: 0
    },

    {
        titulo: 'Pergunta nº 8: Qual protocolo é responsável pela resolução de endereços MAC na camada de enlace de dados?',
        alternativas: ['DHCP', 'ARP', 'ICMP', 'FTP'],
        correta: 1
    },

];

let app = {
start: function(){
    this.atualposi = 0;
    this.totalPontos = 0;
    let alts = document.querySelectorAll('.alternativa');
    alts.forEach((element, index)=>{
        element.addEventListener('click', ()=>{ 
            this.checaResposta(index);
        })
    })
    this.atualizaPontos();
    app.mostraquestao(perguntas[this.atualposi]);
},

mostraquestao: function(q){
    this.qatual = q;
    // mostrando o titulo
    let titleDiv = document.getElementById('titulo'); 
    titleDiv.textContent = q.titulo;
    // mostrando as alternativas
    let alts = document.querySelectorAll('.alternativa'); 
    alts.forEach(function(element, index) {
        element.textContent = q.alternativas[index]; 
    })

},

proximaperg: function(){
    this.atualposi ++;
    if(this.atualposi == perguntas.length){
        this.atualposi = 0;
    }
},

checaResposta: function(user){
    if(this.qatual.correta == user){
        console.log("Correta");
        this.totalPontos++;
    }
    else{
        console.log("Errada");
    }
    this.atualizaPontos();
    this.proximaperg();
    this.mostraquestao(perguntas[this.atualposi]);
},

atualizaPontos: function(){
    let scoreDiv = document.getElementById("pontos");
    scoreDiv.textContent = `Sua pontuação é: ${this.totalPontos}`;
}

}

app.start();

