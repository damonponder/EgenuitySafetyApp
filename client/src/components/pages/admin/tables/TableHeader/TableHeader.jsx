import React, {useEffect} from "react";
import { connect } from "react-redux";
import MaterialTable from "material-table";
import "./tableHeader.scss";
import { fetchDataSuccess } from "../../../../../redux/data/dataActions";
import { queueTableColumns, approvalTableColumns } from "./columns";

const TableHeader = ({ fetchDataSuccess, jwt, tickets }) => {
  useEffect(() => {
    fetchDataSuccess(jwt.token);
  }, [tickets]);

console.log(fetchDataSuccess)
  const newData = tickets.data.map(item => {
    return {
      id: item.id,
      description: item.description,
      priority: item.priority,
      status: item.status,
      contractor: item.contractor,
      operator: item.operator,
      assignee: item.assignee,
      Escalation_Level: item.escalationlevel,
      region: item.region,
      ticketResolution: item.resolution,
      ticketIncident: item.incident,
      category: item.category,
      resolution: item.resolution,
      updatedAt: item.updatedAt
    };
  });
    return (
      <React.Fragment>
        <h1 className="tableHeader-Title">
          Engenuity Administrative Ticketing System
        </h1>
        <MaterialTable
            columns={queueTableColumns}
            data={[newData]}
            onRowUpdate
            onRowDelete
            options={{
                exportButton: true
              }}
            title="Inventory Report"
        editable={{
            isEditable: rowData => rowData.name === "a", // only name(a) rows would be editable
            isDeletable: rowData => rowData.name === "b", // only name(a) rows would be deletable
            onRowUpdate: (newData, oldData, setNewData) =>
                new Promise((resolve, reject) => {
                    setTimeout(() => {
                        {
                            const data = [...newData];
                            const index = data.indexOf(oldData);
                            data[index] = newData;                
                            setNewData({ data }, () => resolve()); 
                        }
                        resolve();
                    }, 1000);
                }),
            onRowDelete: (oldData, setNewData) =>
                new Promise((resolve, reject) => {
                    setTimeout(() => {
                        {
                            let data = [...newData];
                            const index = data.indexOf(oldData);
                            data.splice(index, 1);
                            setNewData({ data }, () => resolve()); 
                        }
                        resolve();
                    }, 1000);
                })
        }}
    />

<MaterialTable
            columns={approvalTableColumns}
            data={[newData]}
            onRowAdd
            onRowUpdate
            onRowDelete
            options={{
                exportButton: true
              }}
            title="Inventory Report"
        editable={{
            isEditable: rowData => rowData.name === "a", // only name(a) rows would be editable
            isDeletable: rowData => rowData.name === "b", // only name(a) rows would be deletable
            onRowUpdate: (newData, oldData, setNewData) =>
                new Promise((resolve, reject) => {
                    setTimeout(() => {
                        {
                            const data = [...newData];
                            const index = data.indexOf(oldData);
                            data[index] = newData;                
                            setNewData({ data }, () => resolve()); //This could be a problem with possible SQL injection 
                        }
                        resolve();
                    }, 1000);
                }),
            onRowDelete: (oldData, setNewData) =>
                new Promise((resolve, reject) => {
                    setTimeout(() => {
                        {
                            let data = [...newData];
                            const index = data.indexOf(oldData);
                            data.splice(index, 1);
                            setNewData({ data }, () => resolve()); 
                        }
                        resolve();
                    }, 1000);
                })
        }}
    />
   </React.Fragment> 
  )
  
}
      


const mapStateToProps = state => {
  return {
    tickets: state.data,
    jwt: state.jwt
  };
};
export default connect(mapStateToProps, { fetchDataSuccess })(TableHeader);
