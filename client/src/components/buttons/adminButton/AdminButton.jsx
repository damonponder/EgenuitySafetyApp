import React from 'react';
import './adminButton.styles.scss';
import { Link } from 'react-router-dom'



class AdminButton extends React.Component{

    handleClick() {
        window.location.assign('https://login.teamviewer.com/LogOn')
    }

    render(){
        return (

            <div className="admin-button-list">
                <Link to="/admin/support">
                <button className="supportButton">Support</button>
                </Link>
                <Link to="/admin/test">
                <button className="testButton">Test</button>
                </Link>
                <Link to="/admin/valve">
                <button className="valveButton">Valve</button>
                </Link>
                <Link to="/admin/vision">
                <button className="visionButton">Vision</button>
                </Link>
                <button className="teamViewerButton" onClick={this.handleClick.bind(this)}>TeamViewer Link</button>

            </div>
        )
    }
}
export default AdminButton