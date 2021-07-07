import React from 'react'
import Message from '../../components/Message'
const NotAllowed = () => {
    return (
        <div style={{minHeight: '90vh', width: '100%'}}>
            <Message type="error" message=" 405 Not Allowed: Unable to Access Resource." style={{minHeight: '90vh'}}/>
        </div>
    )
}

export default NotAllowed
