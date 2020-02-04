import React from 'react'
import MaterialTable from 'material-table'

const Inventory = () => {
    return (
        <div style={{ maxWidth: '100%' }}>
            <MaterialTable
                title="Tranducers"
                columns={[
                    { title: 'Operators', field: 'operators' },
                    { title: 'Certifications', field: 'certification' },
                    { title: 'Rigname', field: 'rigname' },
                    { title: 'Serial No.', field: 'serialNo' },
                    { title: 'Exp date', field: 'expDate' },
                    { title: 'EI Part No.', field: 'eiPartNo' },
                    { title: 'Pressure Rating', field: 'pressureRating' },
                    { title: 'Tranducers Type', field: 'tranducersType' },
                    { title: 'Certification Date', field: 'certDate' },
                    { title: '30 days', field: 'exp30' },
                    { title: '90 days', field: 'exp90' },
                    { title: 'Action 1', field: 'actionOne' },
                    { title: 'Action 2', field: 'actionTwo' },
                ]}
                data={[]}
            />
        </div>
    )
}

export default Inventory
