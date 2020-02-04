import React, {useState} from 'react';
import MaterialTable from 'material-table'

const Valve= () => {
    const [valveData, setValveData] = useState([])
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
            data={valveData}
            title="Valve"
            editable={{
                onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            {
                                const data = [...valveData]
                                data.push(newData)
                                setValveData(data)
                            }
                            resolve()
                        }, 1000)
                    }),
                onRowDelete: oldData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            {
                                let data = [...valveData]
                                const index = data.indexOf(oldData)
                                data.splice(index, 1)
                                setValveData(data)
                            }
                            resolve()
                        }, 1000)
                    }),
            }}
            options={{ actionsColumnIndex: -1 }}
        />
    )
}
export default Valve

