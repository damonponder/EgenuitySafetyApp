import React, { useEffect } from "react";
import { connect } from "react-redux";
import MaterialTable from "material-table";
import { columns } from "./reportColumns";
import { fetchDataSuccess } from "../../../../../redux/data/dataActions";

const FieldReportTable = ({ jwt, fetchDataSuccess, tickets }) => {
  useEffect(() => {
    fetchDataSuccess(jwt.token);
  }, []);

  const data = tickets.data.map(ticket => {
    return {
      reportNo: ticket.zendesk_id,
      date: ticket.incidentDate,
      category: ticket.category,
      operator: ticket.operator,
      contractor: ticket.contractor,
      site: ticket.rig,
      tech: ticket.assignee,
      contact: "",
      description: ticket.description,
      resolution: ticket.resolution,
      status: ticket.status
    };
  });

  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialTable columns={columns} data={data} title="Queue" />
    </div>
  );
};
const mapStateToProps = state => {
  return {
    tickets: state.data,
    jwt: state.jwt
  };
};
export default connect(mapStateToProps, { fetchDataSuccess })(FieldReportTable);
