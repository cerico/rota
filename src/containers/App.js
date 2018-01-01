import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
const classNames = require('classnames');
import Layout from 'charles-lamb-layout';
import Candidate from '../components/Candidate';
import Candidates from '../components/Candidates';
import Accepted from '../components/Accepted';
import Rejected from '../components/Rejected';
import { getCandidates } from '../state/actions/candidates';


class App extends React.Component  {

  componentWillMount () {
    this.props.getCandidates()
  }
  
  render(){
    const links = [
      {path:'/',title:"Candidates",key:1},
      {path:'/accepted',title:"Accepted",key:2},
      {path:'/rejected',title:"Rejected",key:3}
    ]

    return (
      <Router>
        <main>
        <Layout links={links}/>
          <div>
            <Switch>
              <Route exact path="/" component={Candidates}/>
              <Route exact path="/accepted" component={Accepted} />
              <Route exact path="/rejected" component={Rejected} />
              <Route path="/Candidates/:id" component={Candidate} />
            </Switch>
          </div>
        </main>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
      Candidates: state.candidates
    })
}


export default connect(mapStateToProps, {getCandidates})(App);

