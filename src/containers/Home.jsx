import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import styled from 'react-emotion'

// Import helpers
import store from '../store'
import {commonActions} from '../actions'

// Import components
import WineCard from '../components/WineCard'

const Wrapper = styled('div')`
  display: -webkit-flex;
  display: flex;
  -webkit-flex-flow: row wrap;
  flex-flow: row wrap;
  padding: 1rem;
  position: relative;
  height: 100%;
`

class Home extends React.Component {
  constructor(props) {
    super(props)

    // Set initial state for the container
    this.state = {
    }
  }

  componentWillMount() {   
    store.dispatch(commonActions.fetchWines())
  }

  render() {
    return (
      <React.Fragment>
        {(!this.props.common.wines || this.props.common.wines.length === 0) &&
          <Wrapper>
            <WineCard text={'Loading'}>
            </WineCard>
          </Wrapper>
        }

        {this.props.common.wines && this.props.common.wines.length > 0 &&
          <Wrapper>
            <WineCard prop={{ wines: this.props.common.wines }}>
            </WineCard>
          </Wrapper>
        }
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    ...state,
  }
}

// Static type checking for props
Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  common: PropTypes.objectOf(PropTypes.shape)
}

// Set default value for prop if not required and not present
Home.defaultProps = {
  common: {}
}

export default connect(mapStateToProps)(Home);
