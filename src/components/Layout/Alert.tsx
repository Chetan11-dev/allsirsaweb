import { connect } from 'react-redux'
import React from 'react'
import Alert from 'react-bootstrap/Alert'

export interface Props {
    alerts: any[]
}

const Alerts = ({ alerts }: Props) => {

    if (!alerts || alerts.length === 0) {
        return <></>
    }

    const elems = alerts.map(alert => (
        <Alert key={alert.id} variant={alert.alertType}>
            {alert.msg}
        </Alert>
    ))
    return <div>{elems}</div>

}

// Alert.propTypes = {
//     alerts: PropTypes.array.isRequired
// }

const mapStateToProps = (state: any) => {
    console.log(state)
    return ({
        alerts: state.alert
    })
}

export default connect(mapStateToProps)(Alerts)

