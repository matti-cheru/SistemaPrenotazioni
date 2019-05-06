import React, {Component} from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './components/layouts/Home';
import Layout from './components/layouts/Layout';
import About from './components/layouts/About';
import EventsItemDetail from './components/presentation/EventsItemDetail';
import { Provider } from 'react-redux';
import store from './stores/store';
import EventDetails from './components/containers/EventDetails';
 
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
            <Layout>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path='/events/:id' component={EventDetails}/>   
            </Layout>
        </BrowserRouter>
      </Provider>
       );
  }
}

export default App;