/** TELA DO LISTSCREEN */
import React, { useLayoutEffect } from 'react';
import {StyleSheet} from 'react-native';
import { 
    Container,
    Texto,
    Btn,
    AddButton,
    NotesList,
    NoNotes,
    NoNotesImage,
    NoNotesText
} from './style';

import { useNavigation, useRoute } from '@react-navigation/native';     /** Importando Navigation */
import { useSelector } from 'react-redux';          /** Hook do redux para pegar informações */
import Icon from 'react-native-vector-icons/FontAwesome';

import NoteItem from '../../components/NoteItem';

export default () => {
    const navigation = useNavigation();         /** Atribuindo o Navigation a uma const */

    const list = useSelector(state => state.notes.list);     /** Pegando a lista do reducer.
                                                            - state é a const que foi atribuido as infos no reducer 
                                                            - notes é a const que foi atribuido os reducers no CombineReducers
                                                            - list é o nome do array que está sendo armazenado as listas
                                                            */    
    
                                                           
    function Edit () {      /** Função que navega para a tela EditNote */
        navigation.navigate('EditNote');        
    }

    useLayoutEffect(() => {     /** Função que é executada ao carregar a página */
        navigation.setOptions({         /** setOptions para mudar as options da ListScreen */
            title: 'Anotações',
            headerRight:() => (         /** Para fazer o nagavigate, pode ser chamando uma função ou direto no onPress={() => navigation.navigate(NomeTela)} */
                <AddButton underlayColor="transparent" onPress={Edit}>
                    <Icon name="plus-circle" size={30} color="#fff"/>
                </AddButton>
            )
        });
    }, []);                                                         

    function handleNotePress (index) {      /** Passa o index como parâmetro, para quando fazer o clique, saber diferenciar para qual anotação está indo */
        navigation.navigate('EditNote', {
            key: index  /** Passa o index como uma key para diferenciar, é como se fosse um ID do BD no laravel */
        });
    }
    
    /** 
     * - Se o list for maior que 0, retorna o FlatList com os items da lista
     * - <NotesList/> é um Flat list e recebe...
     * - data={} a const que pega os valores com o hook useSelector do redux
     * - renderItem={({item, index}) => <NoteItem />} 
     * - o renderItem sempre recebe o item e o index como objetos. depois executa uma função chamando uma view que foi importada,
     *   e passa props que podem ter qualquer nome, no caso tem que passar o item, e o index, e alguma função onPress se precisar
     * - keyExtractor={(item, index) => index.toString()} retorna uma função que recebe item e index como parâmetro, e passa o index para string
     * - Se o list for == 0, retorna um style personalizado.
     */
    return (
        <Container>     
            {list.length > 0 &&
                <NotesList
                    data={list}
                    renderItem={({item, index}) => (
                        <NoteItem
                            data={item}
                            index={index}
                            onPress={handleNotePress}
                        />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            }

            {list.length ==  0 &&
                <NoNotes>
                    <NoNotesImage source={require('../../assets/note.png')} />
                    <NoNotesText> Nenhuma Anotação </NoNotesText>
                </NoNotes>
            }
        </Container>
    );
}

