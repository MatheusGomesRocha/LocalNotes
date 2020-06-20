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

export const NoNotes = styled.View`
    justify-content: center;
    align-items: center;
`;

export const NoNotesImage = styled.Image`
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
`;

export const NoNotesText = styled.Text`
    font-size: 17px;
    color: #fff;
`;