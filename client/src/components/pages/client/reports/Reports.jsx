import React from "react";
import { Tab } from "semantic-ui-react";
import ApprovalTable from "../tables/report/ApprovalTable";
import FieldSupportTable from "../tables/report/FieldReport";
import "./reports.scss";

const panes = [
  {
    menuItem: "Queue",
    render: () => (
      <Tab.Pane>
        <FieldSupportTable />
      </Tab.Pane>
    )
  },
  {
    menuItem: "Closed Tickets",
    render: () => (
      <Tab.Pane>
        <ApprovalTable />
      </Tab.Pane>
    )
  }
];
const ReportsPage = () => {
  return <Tab menu={{ attached: false }} panes={panes} />;
};

export default ReportsPage;
