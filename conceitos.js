// estrutura de dados: objeto {}
//ele recebe uma propriedade e um valor (nome : 'Bruna')
//para colocar mais de uma propriedade, basta acrescentar uma vírgula 
//para acessar algum valor de um objeto, basta colocar o nome do objeto seguido de um ponto e o nome da propriedade que contém o valor desejado
//ex: atividade.nome ---> irá mostrar Estudar a beira mar

const atividade = {
    nome : 'Estudar a beira mar',
    data : new Date('2024-07-10 07:00'),
    finalizada: true
}

// lista, array, vetor = []
// armazena todo tipo de dado em js 

const listaAtividades = [
    atividade,
    {
        nome: 'Academia',
        data: new Date('2024-07-13 10:00'),
        finalizada: false
    },
    {
        nome: 'Devocional',
        data: new Date('2024-07-11 08:00'),
        finalizada: false
    }
]

//função - arrow function (forma resumida)
// = function () {}
const criarAtividades = (att) => {}


//document é um objeto que contém a funcionalidade querySelector (query: pesquisa / selector: seletor), que busca e atribui o o elemento html com o seletor mencionado a uma variável em js

const section = document.querySelector('section');


//innerHTML substitui/acrescenta um conteúdo ao seletor do documento HTML contido na variável

//duas formas de acessar e exibir os objetos da lista

//nesse a variável item assume o valor do objeto, e a função destrincha esses valores para a exibição

for (let item of listaAtividades) {
    section.innerHTML += criarAtividades(item);
}

// e nesse a variável i assume os indices da lista de atividades, e a função recebe cada objeto localizado nos indices para destrinchar a visualização
for (let i in listaAtividades) {
    section.innerHTML += criarAtividades(listaAtividades[i]);
}