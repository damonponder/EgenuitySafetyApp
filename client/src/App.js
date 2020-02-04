import React from 'react'
import {
    Switch,
    Route,
    BrowserRouter as Router,
    Redirect,
} from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css'
import TicketsHome from './components/pages/admin/tickets/TicketsHome'
import ClientDashboard from './components/pages/client/dashboard/ClientDashboard'
import SuperUserDashboard from './components/pages/superUser/Dashboard/Dashboard'
import Tranducers from './components/pages/client/tables/inventory/Tranducers'
import FullLayout from './components/pages/client/dashboard/FullLayout'
import ReportsPage from './components/pages/client/reports/Reports'
import SignIn from './components/pages/login/SignIn'
import EquipmentTable from './components/pages/client/tables/equipmentOnRigs/EquipmentTable'
import Support from './components/pages/admin/support/support'
import Test from './components/pages/admin/adminTest/adminTest'
import Valve from './components/pages/admin/valve/valve'
import Vision from './components/pages/admin/vision/vision'
import ChartComponent from './components/pages/admin/reports/reports'
import AdminInventory from './components/pages/admin/adminInventory/inventory'




const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            rest.isAuthenticated === true ? (
                <Component {...props} />
            ) : (
                <Redirect to="/" />
            )
        }
    />
)

class App extends React.Component {
    render() {
        const { isAuthenticated, accessLevel } = this.props.jwt
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={SignIn} />
                    <FullLayout>
                        <PrivateRoute
                            path="/admin/home"
                            exact
                            component={TicketsHome}
                            isAuthenticated={
                                isAuthenticated && accessLevel === 2
                            }
                        />
                        <PrivateRoute
                            path="/admin/support"
                            component={Support}
                            isAuthenticated={
                                isAuthenticated && accessLevel === 2
                            }
                        />
                         <PrivateRoute
                            path="/admin/test"
                            component={Test}
                            isAuthenticated={
                                isAuthenticated && accessLevel === 2
                            }
                        />
                         <PrivateRoute
                            path="/admin/vision"
                            component={Vision}
                            isAuthenticated={
                                isAuthenticated && accessLevel === 2
                            }
                        />
                         <PrivateRoute
                            path="/admin/valve"
                            component={Valve}
                            isAuthenticated={
                                isAuthenticated && accessLevel === 2
                            }
                        />
                        <PrivateRoute
                            path="/admin/reports"
                            component={ChartComponent}
                            isAuthenticated={
                                isAuthenticated && accessLevel === 2
                            }
                        />
                         <PrivateRoute
                            path="/admin/inventory"
                            component={AdminInventory}
                            isAuthenticated={
                                isAuthenticated && accessLevel === 2
                            }
                        />

                        <PrivateRoute
                            exact
                            path="/dashboard"
                            component={ClientDashboard}
                            isAuthenticated={isAuthenticated}
                        />

                        <PrivateRoute
                            path="/tranducers"
                            component={Tranducers}
                            isAuthenticated={isAuthenticated}
                        />
                        <PrivateRoute
                            path="/reports"
                            component={ReportsPage}
                            isAuthenticated={isAuthenticated}
                        />
                        <PrivateRoute
                            path="/inventory"
                            component={EquipmentTable}
                            isAuthenticated={isAuthenticated}
                        />
                    </FullLayout>
                </Switch>
            </Router>
        )
    }
}

const mapStateToProps = state => {
    return {
        jwt: state.jwt,
    }
}

export default connect(mapStateToProps)(App)
