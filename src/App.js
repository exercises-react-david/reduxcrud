import React,{Component} from 'react';

//redux
import { Provider } from 'react-redux';
import store from './redux/store';

export default class App extends Component {

    render() {
        return (
          <Provider store={store}>
            <div className="">
                content
            </div>
          </Provider>
        );
    }
}
