import React from 'react'
import Message from '../../components/Message'
const NotFound = () => {
    return (
        <div style={{minHeight: '90vh', width: '100%'}}>
            <Message type="error" message=" 404 Not Found: Resource Might Not Exists on Our Servers." style={{minHeight: '90vh'}}/>
        </div>
    )
}

export default NotFound
