import React, {useState} from 'react';
import MaterialTable from 'material-table'


const Test = () => {
    const [testData, setTestData] = useState([])
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
            data={testData}
            title="Test"
            editable={{
                onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            {
                                const data = [...testData]
                                data.push(newData)
                                setTestData(data)
                            }
                            resolve()
                        }, 1000)
                    }),
                onRowDelete: oldData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            {
                                let data = [...testData]
                                const index = data.indexOf(oldData)
                                data.splice(index, 1)
                                setTestData(data)
                            }
                            resolve()
                        }, 1000)
                    }),
            }}
            options={{ actionsColumnIndex: -1 }}
        />
    )
}
export default Test