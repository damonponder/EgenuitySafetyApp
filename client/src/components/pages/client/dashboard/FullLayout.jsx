import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import TopMenu from './TopMenu'
import { Container } from 'semantic-ui-react'

const FullLayout = props => {
    const [visible, setVisible] = useState(false)

    const handleSideMenuClick = () => {
        setVisible(true)
    }

    console.log(visible)

    return (
        <React.Fragment>
            <TopMenu handleSideMenuClick={() => setVisible(true)} />
            <Container>{props.children}</Container>
        </React.Fragment>
    )
}

export default FullLayout
