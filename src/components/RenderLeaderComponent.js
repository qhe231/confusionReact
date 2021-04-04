import React from 'react'
import { Media } from 'reactstrap'
import { baseUrl } from '../shared/baseUrl'

function RenderLeader(props) {
    return (
        <div className="col-12 mt-5">
            <Media tag="li">
                <Media left middle>
                    <Media object src={baseUrl + props.leader.image} alt={props.leader.name} />
                </Media>
                <Media body className="ml-5">
                    <Media heading>{props.leader.name}</Media>
                    <Media body>
                        <p>{props.leader.designation}</p>
                        <p>{props.leader.description}</p>
                    </Media>
                </Media>
            </Media>
        </div>
    )
}

export default RenderLeader