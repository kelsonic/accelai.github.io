// Dependencies
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions
import * as CounterActions from '../actions/CounterActions';

// Components
import Counter from '../components/Counter';
import Footer from '../components/Footer';

class App extends Component {
  render() {
    const { counter, actions } = this.props;
    return (
      <div className="main-app-container">
        <div className="main-app-nav">Simple Redux Boilerplate</div>
        <Counter
          counter={counter}
          actions={actions}
        />
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  counter: PropTypes.number.isRequired,
};

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CounterActions, dispatch),
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
