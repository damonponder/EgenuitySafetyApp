import React from 'react';
// import TicketList from '../../components/ticket-list/ticketlist.component'
import TableHeader from '../../components/pages/admin/tables/TableHeader';
import Axios from 'axios'
import {connect} from 'react-redux'

class TicketsHome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tickets: []
    }
  }

  async getTickets() {
    const tickets = await Axios.post(`/api/tickets/1000/0`,{token: this.props.jwt.token})
    this.setState({
      ...this.state,
      tickets: tickets.data
    })
  }

  componentDidMount() {
    this.getTickets()
  }

  render() {
    const tickets = this.state.tickets
    return (
    <>
      <div className="ticketpage">
        <TableHeader tickets={tickets} />
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

export default connect(mapStateToProps)(TicketsHome)
// TicketsHome;