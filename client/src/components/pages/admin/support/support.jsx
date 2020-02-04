import React, {useState} from 'react';
import MaterialTable from 'material-table'

const Support = () => {
    const [supportData, setSupportData] = useState([])
    const columns = [
        { title: 'Item', field: 'item' },
        { title: 'Serial No', field: 'serialNo' },
        { title: 'On Hand', field: 'onHand' },
        { title: 'On PO', field: 'onPO' },
        {
            title: 'Next Delivery',
            field: 'nextDelivery',
        },
    ]

    return (
        <MaterialTable
            columns={columns}
            data={supportData}
            title="Support"
            editable={{
                onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            {
                                const data = [...supportData]
                                data.push(newData)
                                setSupportData(data)
                            }
                            resolve()
                        }, 1000)
                    }),
                onRowDelete: oldData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            {
                                let data = [...supportData]
                                const index = data.indexOf(oldData)
                                data.splice(index, 1)
                                setSupportData(data)
                            }
                            resolve()
                        }, 1000)
                    }),
            }}
            options={{ actionsColumnIndex: -1 }}
        />
    )
}
export default Support