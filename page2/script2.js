let perguntas = [
    {
        titulo: 'Pergunta nº 1: O que são *protocolos* em redes de computadores?',
        alternativas: ['Um tipo de hardware usado para comunicação em rede', 'Um conjunto de regras que define como os dispositivos se comunicam', 'Um sistema operacional de rede', 'Um software para monitorar o tráfego da rede '],
        correta: 1
    },

    {
        titulo: 'Pergunta nº 2: Sem protocolos, dispositivos conectados na mesma rede conseguiriam se comunicar sem problemas.',
        alternativas: ['Verdadeiro', 'Falso', 'Parcialmente verdade', 'Parcialmente falso'],
        correta: 1
    },

    {
        titulo: 'Pergunta nº 3: O que é uma *pilha de protocolos* em redes de computadores?',
        alternativas: ['Uma série de dispositivos conectados em rede', 'Um conjunto de protocolos organizados em camadas, onde cada uma realiza uma função específica', 'Um tipo de firewall que organiza pacotes de dados', 'Uma forma de conectar dispositivos fisicamente em uma rede'],
        correta: 1
    },

    {
        titulo: 'Pergunta nº 4: Em uma pilha de protocolos, como os dados fluem entre as camadas?',
        alternativas: ['De uma camada para a camada seguinte, respeitando a hierarquia', 'Direto da primeira para a última camada', 'De uma camada para o processador central da rede', 'Apenas entre as camadas inferiores'],
        correta: 0
    },

    {
        titulo: 'Pergunta nº 5: Qual seria uma função realizada por uma das camadas de uma pilha de protocolos?',
        alternativas: ['Identificar o tipo de aplicação, como vídeo ou texto', 'Verificar a temperatura dos cabos', 'Monitorar o uso de energia dos dispositivos', 'Sincronizar a hora dos dispositivos conectados'],
        correta: 0
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

