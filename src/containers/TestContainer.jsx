import React from 'react';
import PropTypes from 'prop-types';
import {Provider, connect} from 'react-redux';
import {createStore, combineReducers} from 'redux';

// Import helpers
import store from '../store';
import {commonActions} from '../actions';

// Import components
import Button from '../components/Button';

class TestContainer extends React.Component {
  constructor(props) {
    super(props);

    // initiate state for the container
    this.state = {
      'testContainerState': 'intialContainerStateValue',
    };
  }

  componentWillMount() {   
    // Display loader before mount
    // store.dispatch(commonActions.toggleLoader(true));

    store.dispatch(commonActions.fetchWines());

    // Bind functions to global scope
    this.nextState = this.nextState.bind(this);
  }

  componentDidMount() {
    // Hide loader on mount
    // store.dispatch(commonActions.toggleLoader(false));
  }

  componentWillUnmount() {
    // Display loader on unmount
    // store.dispatch(commonActions.toggleLoader(true));
  }

  nextState(values) {
    this.setState({
      testContainerState: 'state has been changed 🔥',
    }, () => {
      store.dispatch(commonActions.testAction(true));
    });
  }

  render() {
    return (
      <div>
        hi
        <br />
        <Button
          type="button"
          onClick={this.nextState}
        >
          hi
        </Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state,
  };
}

// Static type checking for props
TestContainer.propTypes = {
  // examplePropThatIsAnObject: PropTypes.objectOf(PropTypes.shape),
  dispatch: PropTypes.func.isRequired,
};

// Set default value for prop if not required and not present
TestContainer.defaultProps = {
  // examplePropThatIsAnObject: {},
};

export default connect(mapStateToProps)(TestContainer);
