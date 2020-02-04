import React from 'react'
import MaterialTable from 'material-table'
//this will be from sharepoint
const EquipmentTable = () => {
    // const columns = [
    //     { title: 'Serial NO', field: 'serialNo' },
    //     { title: 'Equipment Type', field: 'equipmentType' },
    //     { title: 'Notes', field: 'notes' },
    //     { title: 'Data Converter', field: 'dataConverter' },
    //     { title: 'EZ Chart/Converter Box Numer', field: 'ezChartNo' },
    //     // { title: 'Company', field: 'company' },
    //     { title: 'Rig', field: 'rig' },
    //     { title: 'Location', field: 'location' },
    //     // { title: 'Teamview Password', field: 'teamViewPassword' },
    //     { title: 'Laptop Serial No', field: 'laptopSerialNo' },
    //     { title: 'Laptop Ram', field: 'laptopRam' },
    //     {
    //         title: 'MAC ID',
    //         field: 'macId',
    //     },
    //     {
    //         title: 'Account',
    //         field: 'account',
    //     },
    //     { title: 'Software Version', field: 'softwareVersion' },
    // ]

    const columns = [
        { title: 'Part No.', field: 'partNo' },
        { title: 'Description', field: 'description' },
        { title: 'Qty on Hand', field: 'qtyOnHand' },
        { title: 'Qty on PO', field: 'qtyOnPO' },
    ]

    return (
        <div style={{ maxWidth: '100%' }}>
            <MaterialTable
                title="Equipment on Rigs "
                columns={columns}
                data={[]}
            />
        </div>
    )
}

export default EquipmentTable
