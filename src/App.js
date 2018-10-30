import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { BrowserRouter as Router, Route } from "react-router-dom"
import { ApolloProvider } from "react-apollo";
import './App.css';
import Nav from './Components/Nav/Nav'
import Cards from './Components/Cards/Cards'

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="App">
            <Route  path="/" render={props => (<Nav {...props}/>)}/>
            <Route path="/cards" render={props => (<Cards {...props}/>)}/>
          </div>
        </Router>
    </ApolloProvider>
    );
  }
}

export default App;
