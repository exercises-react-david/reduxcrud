import React,{Component} from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
//redux
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header';
import Products from './components/Products';
import UpdateProduct from './components/UpdateProduct';
import NewProduct from './components/NewProduct';

export default class App extends Component {

    render() {
        return (
          <Provider store={store}>
              <BrowserRouter>
              <React.Fragment>
                  <Header/>
                  <div className="container">
                    <Switch>
                      <Route exact path='/' component={Products}/>
                      <Route exact path='/products/new' component={NewProduct}/>
                      <Route exact path='/products/update/:id' component={UpdateProduct}/>
                    </Switch>
                  </div>
              </React.Fragment>
            </BrowserRouter>
          </Provider>
        );
    }
}
