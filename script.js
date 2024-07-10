//objet {}
const atividade = {
    nome : 'Estudar a beira mar',
    data : new Date('2024-07-10 07:00'),
    finalizada: true
}

// lista, array, vetor = []
//lista de atividades (simulação de um banco de dados)
let listaAtividades = [
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

//listaAtividades = []

//formatação da data
const formatador = (data) => {
    return {
        dia: {
            numerico: dayjs(data).format('DD'),
            extenso: {
                curto: dayjs(data).format('ddd'),
                longo: dayjs(data).format('dddd')
            }
        },
        mes: dayjs(data).format('MMMM'),
        hora: dayjs(data).format('HH:mm')
    }
}


//função para criar as atividades
const criarAtividades = (att) => {
    let input = `<input type="checkbox" `
    
    if (att.finalizada) {
        input += `checked`;
    } 
    input += `>`;

    const formatar = formatador(att.data)

    return ` 
   <div>
        ${input}
        <span>${att.nome}</span>
        <time>${formatar.dia.extenso.longo},
        dia ${formatar.dia.numerico}
        de ${formatar.mes}
        às ${formatar.hora}
        </time>
    </div>
   `;
}

//função para atualizar a visualização das atividades
const atualizarAtividades = () => {
    const section = document.querySelector('section');
    
    //verificar se a lista está vazia
    if (listaAtividades.length == 0) {
        section.innerHTML = '<p>Nenhuma atividade cadastrada.</p>'
        return
    }
    
    for (let i in listaAtividades) {
        section.innerHTML += criarAtividades(listaAtividades[i]);
    }

}

atualizarAtividades()

