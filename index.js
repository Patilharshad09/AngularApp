import {
    AppRegistry
} from 'react-native';
import {
    Provider
} from 'redux';
import configureStore from './app/store/configureStore';
import App from './App';
import {
    name as appName
} from './app/app.json';

const store = configureStore();
const rnRedux =()=> ( 
    <Provider store = {store} >
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => rnRedux);