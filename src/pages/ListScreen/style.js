/** STYLE DO LISTSCREEN */


import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #333;
`;

export const Texto = styled.Text`
    color: #fff;
`;

export const Btn = styled.Button``;

export const AddButton = styled.TouchableHighlight`
    margin-right: 10px;
`;

export const NotesList = styled.FlatList`
    flex: 1;
    width: 100%;
`;