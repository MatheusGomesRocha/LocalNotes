/** TELA DO EDITNOTESCREEN */

import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
    Container,
    Texto,
    TitleInput, 
    BodyInput,
    SaveButton,
    CloseButton,
    DeleteButton,
} from './style';
import Icon from 'react-native-vector-icons/FontAwesome';

export default () => {
    const navigation = useNavigation();     // Hook Navigation
    const route = useRoute();               // Hook Route
    const dispatch = useDispatch();
    const list = useSelector(state => state.notes.list);

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [status, setStatus] = useState('new');        // seta um status para diferenciar quando for edit ou adição de uma nota

    function handleSaveButton () {
        if(title != '' && body != '') {
            if(status == 'edit') {
                dispatch({
                    type: 'EDIT_NOTE',
                    payload: {
                        key: route.params.key,
                        title,
                        body
                    }
                });
            } else {
                dispatch({
                    type: 'ADD_NOTE',
                    payload: { title, body }
                });
            }
            navigation.goBack();
        } else {
            alert('Preencha todos os campos');
        }
    }

    function handleCloseButton() {
        navigation.goBack();
    }

    function handleDeleteNote() {
        dispatch({
            type: 'DEL_NOTE',
            payload: { key: route.params.key }
        });

        navigation.goBack();

    }

    useEffect(() => {       // Depois que a tela carrega, executa esse Hook
        if(route.params?.key != undefined && list[route.params.key]) {  // Se a key tiver algo, e estiver na lista, executa essa função
            setStatus('edit');      // Altera o status para Edit para saber que é uma edição de nota
            setTitle(list[route.params.key].title);     // o Title recebe o title da lista/anotação
            setBody(list[route.params.key].body);       // o Body recebe o conteúdo da lista/anotação
        }
    }, []);

    useLayoutEffect(() => {     /** Hook que é executado ao carregar a página */
        navigation.setOptions({         /** setOptions para mudar as options da ListScreen */        
            title: status == 'new' ? 'Nova Anotação' : list[route.params.key].title,    // Sintaxe de verificação, depois do '?' é o if, depois do ':' é o else
            headerLeft: () => (
                <CloseButton underlayColor="transparent" onPress={handleCloseButton}>
                    <Icon name="close" color="#fff" size={26}/>
                </CloseButton>
            ),
            
            headerRight: () => (
                <SaveButton underlayColor="transparent" onPress={handleSaveButton}>
                    <Icon name="check" color="#fff" size={26}/>
                </SaveButton>
            )       
        }); // se status for igual à 'new' é uma nova anotação, else, é uma edição de uma nota e o titulo da Stack recebe o titulo da lista
    }, [status, title, body]);  // esses 3 parâmetros significa que irá atualizar cada vez que um desses 3 for atualizado/mudado

    return (
        <Container>
            <TitleInput
                value={title}
                onChangeText={t=>setTitle(t)}
                placeholder="Título"
                placeholderTextColor="#ccc"
                autoFocus={true}        // Vem focada e com o teclado aberto no title
            />
            <BodyInput
                value={body}
                onChangeText={b=>setBody(b)}
                placeholder="Conteúdo"
                placeholderTextColor="#ccc"
                multiline={true}            // Permissão para quebrar linha
                textAlignVertical="top"
            />
            {status == 'edit' &&
                <DeleteButton underlayColor="#ff0000" onPress={handleDeleteNote}>
                    <Texto> Excluir </Texto>
                </DeleteButton>
            }
        </Container>
    );
}