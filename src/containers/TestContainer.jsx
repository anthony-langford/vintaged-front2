import React from 'react';
import PropTypes from 'prop-types';
import {Provider, connect} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import { ThemeProvider } from 'emotion-theming';
import '../styles/globalStyles';

// Import helpers
import store from '../store';
import {commonActions} from '../actions';

// Import components
import Button from '../components/Button';
import Title from '../components/Title';
import Background from '../components/Background';
import CelestialObject from '../components/CelestialObject';



// Define themes
const dayTheme = {
  skyColor: '#37d8e6',
  celestialObjectColor: '#ffdd00',
  celestialObjectBorderColor: '#f1c40f'
};

const nightTheme = {
  skyColor: '#2c3e50',
  celestialObjectColor: '#bdc3c7',
  celestialObjectBorderColor: '#eaeff2'
};



class TestContainer extends React.Component {
  constructor(props) {
    super(props);

    // Set initial state for the container
    this.state = {
      title: 'Vintaged',
      isDay: true,
      theme: dayTheme,
      'testContainerState': 'intialContainerStateValue',
    };
  }

  componentWillMount() {   
    // Display loader before mount
    // store.dispatch(commonActions.toggleLoader(true));

    store.dispatch(commonActions.fetchWines());

    // Bind functions to global scope
    this.nextState = this.nextState.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  handleClick() {
    const isDay = this.state.isDay;
    this.setState({
      isDay: !isDay,
      theme: isDay ? nightTheme : dayTheme,
      title: isDay ? 'fuck yeah' : 'Vintaged',
    });
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <Background>
          <div>
            <Button
              type="button"
              onClick={this.nextState}
            >
            Click me to change the container state
            </Button>
          </div>
          <Title>{this.state.title}</Title>
          <CelestialObject
            onClick={this.handleClick}>
          </CelestialObject>
        </Background>
      </ThemeProvider>
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
