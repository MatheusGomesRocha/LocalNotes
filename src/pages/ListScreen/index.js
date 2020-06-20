/** TELA DO LISTSCREEN */
import React, { useLayoutEffect } from 'react';
import {StyleSheet} from 'react-native';
import { 
    Container,
    Texto,
    Btn,
    AddButton,
    NotesList,
} from './style';

import { useNavigation, useRoute } from '@react-navigation/native';     /** Importando Navigation */
import { useSelector } from 'react-redux';          /** Hook do redux para pegar informações */
import Icon from 'react-native-vector-icons/FontAwesome';

import NoteItem from '../../components/NoteItem';

export default () => {
    const navigation = useNavigation();         /** Atribuindo o Navigation a uma const */

    /** Pegando a lista do reducer.
    - state é a const que foi atribuido as infos no reducer 
    - notes é a const que foi atribuido os reducers no CombineReducers
    - list é o nome do array que está sendo armazenado as listas
     */

    const list = useSelector(state => state.notes.list);        
               
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

    function handleNotePress () {

    }
    

    return (
        <Container>
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
        </Container>
    );
}

