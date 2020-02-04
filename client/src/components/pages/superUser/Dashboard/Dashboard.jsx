import React from 'react';

import {connect} from 'react-redux'


class SuperUserDashboard extends React.Component {
    constructor(props) {
        super(props)
      }
    
    
      render() {
        const tickets = this.state.tickets
        return (
        <>
          <div className="dashboard"> 
            
          </div>
        </>
        )
      }
    }
    
    const mapStateToProps = (state, ownProps) => {
      return {
        jwt: state.jwt
      }
    }
    
    export default connect(mapStateToProps)(SuperUserDashboard)
