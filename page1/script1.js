let perguntas = [
    {
        titulo: 'Pergunta nº 1: Redes de computadores conectam dispositivos para compartilhar recursos, como arquivos e internet.',
        alternativas: ['Verdadeiro', 'Falso', 'Parcialmente verdade', 'Parcialmente falso'],
        correta: 0
    },

    {
        titulo: 'Pergunta nº 2: Qual é o principal objetivo de uma rede de computadores?',
        alternativas: ['Aumentar a velocidade dos dispositivos', 'Permitir que dispositivos compartilhem recursos e se comuniquem', 'Melhorar a segurança dos computadores', 'Criar novos softwares automaticamente  '],
        correta: 1
    },

    {
        titulo: 'Pergunta nº 3: Qual das opções *não* é um componente da comunicação em uma rede de computadores?',
        alternativas: ['Emissor', 'Receptor', 'Mensagem', 'Processador'],
        correta: 3
    },

    {
        titulo: 'Pergunta nº 4: O que são os dispositivos, ou hosts, em uma rede de computadores?',
        alternativas: ['São cabos que conectam os computadores', 'São programas que fazem a rede funcionar', 'São os dispositivos que se conectam à rede, como computadores e smartphones', 'São senhas de segurança usadas na rede'],
        correta: 2
    },

    {
        titulo: 'Pergunta nº 5: Os xxxxxxxxxx são conjuntos de regras que controlam a comunicação entre dispositivos em uma rede de computadores.',
        alternativas: ['Plataforma', 'Interações', 'Tecnologia', 'Protocolos'],
        correta: 3
    }

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

