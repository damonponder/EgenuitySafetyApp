import React from "react";

import Axios from "axios";
import { connect } from "react-redux";
import TableHeader from "../tables/TableHeader/TableHeader";

class TicketsHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: []
    };
  }

  async getTickets() {
    const tickets = await Axios.post(`/api/tickets/1000/0`, {
      token: this.props.jwt.token
    });
    this.setState({
      ...this.state,
      tickets: tickets.data
    });
  }

  componentDidMount() {
    // this.getTickets();
  }

  render() {
    const tickets = this.state.tickets;
    return (
      <>
        <div className="ticketpage">
          <TableHeader /> />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    jwt: state.jwt
  };
};

export default connect(mapStateToProps)(TicketsHome);
// TicketsHome;
