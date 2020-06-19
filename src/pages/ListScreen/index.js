/** TELA DO LISTSCREEN */


import React from 'react';
import { 
    Container,
    Texto,
    Btn,
} from './style';

import { useNavigation, useRoute } from '@react-navigation/native';     /** Importando Navigation */


export default () => {
    const navigation = useNavigation(); /** Atribuindo o Navigation a uma const */

    function Edit () {      /** Função que navega para a tela EditNoi */
        navigation.navigate('EditNote');        
    }

    return (
        <Container>
            <Texto> List Stack </Texto>
        </Container>
    );
}