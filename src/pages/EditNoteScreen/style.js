/** STYLE DO EDITNOTESCREEN */

import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #333
`;

export const Texto = styled.Text`
    font-size: 14px;
    color: #fff;
`;


export const TitleInput = styled.TextInput`
    font-size: 20px;
    font-weight: bold;
    padding: 15px;
    color: #fff;
`;

export const BodyInput = styled.TextInput`
    flex: 1;
    padding: 15px;
    font-size: 15px;
    color: #fff;
`;

export const SaveButton = styled.TouchableHighlight`
    margin-right: 10px;
`;

export const CloseButton = styled.TouchableHighlight`
    margin-left: 10px;
`;

export const DeleteButton = styled.TouchableHighlight`
    height: 40px;
    background-color: #ff3333;
    justify-content: center;
    align-items: center;
`;
