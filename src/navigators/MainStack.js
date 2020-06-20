import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';     /** Importando a Criação de Stack */
import ListScreen from '../pages/ListScreen';
import EditNoteScreen from '../pages/EditNoteScreen';

const MainStack = createStackNavigator();       /** Atribuindo a criação de Stack a uma Const */

export default () => {      /** 
                                A primeira tela é o Stack.Navigator que faz a navegação entre telas
                                Dentro do Navigator fica as Screen
                             */
    return (    
        <MainStack.Navigator screenOptions={{
            headerTitleAlign: 'center',
            
            headerStyle: {
                backgroundColor: '#000',
            },

            headerTintColor: '#fff',
        }}>
            <MainStack.Screen name="List" component={ListScreen}/>
            <MainStack.Screen name="EditNote" component={EditNoteScreen}/>
        </MainStack.Navigator>
    );
}