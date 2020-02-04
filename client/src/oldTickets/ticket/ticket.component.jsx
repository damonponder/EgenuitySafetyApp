import React from 'react';
import './ticket.styles.scss'
import Axios from 'axios'
export default class Ticket extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {  
          isExpanded:false,
        }
    }

    handleRowClick(e) {
        this.setState({
          ...this.state,
          isExpanded: !this.state.isExpanded
        })
      }
      
    
    
    render() {

        const incidentDate = new Date(this.props.ticket.incidentDate).toLocaleString()

        const ExpandedPane = ((props) => {
            
            if (props.isExpanded) {
              return (
                <tr>
                  <td colSpan='6' >
                  <div>
                      {props.ticket.description}
                    </div>
                    <div>
                      {props.ticket.subject}
                    </div>
                    <div>
                      <h2>
                        {props.ticket.subject} - {incidentDate}
                      </h2>
                      <div>
                        <p>
                          {props.ticket.description}
                        </p>
                        <a href={"https://bopxsupport.zendesk.com/agent/tickets/" + props.ticket.zendesk_id} 
                        target='_blank' rel='noopener noreferrer' >View on Zendesk</a>
                        {/* <a href="https://start.teamviewer.com/">Open TeamView</a> */}
                       
                      </div>
                    </div>
                  </td>
                </tr>
              )
            } 
            else return null
          })

          return (
            <React.Fragment >
            <tr className="ticket-row" onClick={e => this.handleRowClick(e)}>
              <td>
                {this.props.ticket.id}
              </td>
              <td >
                {this.props.ticket.description}
              </td>
              <td>
                {this.props.ticket.priority}
              </td>
              <td>
                {this.props.ticket.status}
              </td>
              <td>
                {this.props.ticket.contractor}
              </td>
              <td>
                {this.props.ticket.operator}
              </td>
              <td>
                {this.props.ticket.approveDate}
              </td>
              <td>
                {this.props.ticket.Assignee}
              </td>
              <td>
                {this.props.ticket.Escalation_Level}
              </td>
              <td>
                {this.props.ticket.region}
              </td>
              <td>
                {this.props.ticket.ticketResolution}
              </td>
              <td>
                {this.props.ticket.ticketIncident}
              </td>
              <td>
                {this.props.ticket.category}
              </td>
              <td>
                {this.props.ticket.resolutionDate}
              </td>
              <td>
                {this.props.ticket.updatedAt}
              </td>
              <td>
              <button type='button' name='down' onClick={e => this.handleRowClick(e)}>Addition Ticket Information</button>
              </td>
            </tr>
            <ExpandedPane ticket={this.props.ticket} isExpanded={this.state.isExpanded}/>
          </React.Fragment>
          )
    }
}
