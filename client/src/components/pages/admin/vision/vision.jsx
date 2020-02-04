import React, {useState} from 'react';
import MaterialTable from 'material-table'

const Vision = () => {
    const [visionData, setVisionData] = useState([])
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
            data={visionData}
            title="Vision"
            editable={{
                onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            {
                                const data = [...visionData]
                                data.push(newData)
                                setVisionData(data)
                            }
                            resolve()
                        }, 1000)
                    }),
                onRowDelete: oldData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            {
                                let data = [...visionData]
                                const index = data.indexOf(oldData)
                                data.splice(index, 1)
                                setVisionData(data)
                            }
                            resolve()
                        }, 1000)
                    }),
            }}
            options={{ actionsColumnIndex: -1 }}
        />
    )
}
export default Vision