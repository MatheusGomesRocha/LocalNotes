import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor} from './src/store';
import { NavigationContainer } from '@react-navigation/native';
import styled from 'styled-components/native';
import MainStack from './src/navigators/MainStack';

const Div = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Texto = styled.Text``;

function App () {   /** PersistGate salva as informações em um AsyncStorage */
  return(  
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> 
          <NavigationContainer>
            <MainStack/>
          </NavigationContainer>
      </PersistGate>
    </Provider>
      
  );
}

export default App;
