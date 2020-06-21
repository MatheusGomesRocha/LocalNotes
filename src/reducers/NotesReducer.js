const initalState = {
    list: [
    ]
};



export default (state = initalState, action) => {
    let newList = [...state.list];      // Clone List

    switch(action.type) {
        case 'ADD_NOTE':
            newList.push({  // Adiciona uma nota
                title: action.payload.title,
                body: action.payload.body
            });
        break;
        case 'EDIT_NOTE':       // Edição da anotação
            if(newList[action.payload.key]) {       // Verifica se existe a key 
                newList[action.payload.key] = {     // O objeto da lista que tem aquela key é editado
                    title: action.payload.title,
                    body: action.payload.body
                }
            }
        break;
        case 'DEL_NOTE':        // Excluindo anotação
            /* Filtra a const newList, passando o index como parâmetro, e pegando todos os items que seja diferente da index passada,
            assim, excluindo o item */
            newList = newList.filter((item, index) => index != action.payload.key )
        break;
    }

    return { ...state, list: newList};
}