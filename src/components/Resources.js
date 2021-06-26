import React from 'react'

const Resources = (props) => {
    return (
        <div className="resources">
            <ul className="resources__list">
                {
                    props.resources.map(res => (
                        <li className="resources__resource"><a href={res.url}>{res.title}</a></li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Resources
