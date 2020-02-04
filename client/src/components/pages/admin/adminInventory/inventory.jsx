import React, {useState} from 'react';
import MaterialTable from 'material-table'


const AdminInventory = () => {

    const [inventoryData, setInventoryData] = useState([])

        const headers = [
        {title: 'Part Number', field: 'TextField'},
        {title: 'Description', field: 'TextField'},
        {title: 'Quantity on Hand', field: 'TextField'},
        {title: 'Quantity on PO', field: 'TextField'},
        {title: 'Date', field: 'DatePicker'},
        {title: 'Enabled', field: 'Toggle'},
        {title: 'Last Edited By', field: 'ReadOnly'}

        ]

    return (
        <MaterialTable
            columns={headers}
            data={inventoryData}
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
            onRowAdd: newData =>
                new Promise((resolve, reject) => {
                    setTimeout(() => {
                        {
                            const data = [...inventoryData]
                            data.push(newData)
                            setInventoryData(data)
                        }
                        resolve();
                    }, 1000);
                }),
            onRowUpdate: (newData, oldData) =>
                new Promise((resolve, reject) => {
                    setTimeout(() => {
                        {
                            const data = [...inventoryData];
                            const index = data.indexOf(oldData);
                            data[index] = newData;                
                            setInventoryData({ data }, () => resolve()); 
                        }
                        resolve();
                    }, 1000);
                }),
            onRowDelete: oldData =>
                new Promise((resolve, reject) => {
                    setTimeout(() => {
                        {
                            let data = [...inventoryData];
                            const index = data.indexOf(oldData);
                            data.splice(index, 1);
                            setInventoryData({ data }, () => resolve()); 
                        }
                        resolve();
                    }, 1000);
                })
        }}
    />
)
}


export default AdminInventory
  
            