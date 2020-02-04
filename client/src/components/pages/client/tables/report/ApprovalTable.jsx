import React from 'react'
import MaterialTable from 'material-table'
import { columns } from './reportColumns'

const ApprovalTable = () => {
    return (
        <div style={{ maxWidth: '100%' }}>
            <MaterialTable
                columns={columns}
                data={[]}
                title="Approved Tickets"
            />
        </div>
    )
}

export default ApprovalTable
