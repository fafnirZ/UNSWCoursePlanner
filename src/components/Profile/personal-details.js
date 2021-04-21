import React from 'react'
import './personal-details.css'
import { SubmitConsumer } from '../../helpers/submitContext.js'

function PersonalDetails (props) {
    return (

        <div className="details">
            <div className="details-gender">
                <div className="details-gender-title">
                    <strong>Gender:</strong>
                </div>
                <div className="details-gender-user">
                    {props.gender}
                </div>
            </div>
            <div className="details-year">
                <div className="details-year-title">
                    <strong>Year:</strong>
                </div>
                <div className="details-year-user">
                    {`year ${props.year}`}
                </div>
            </div>
            <div className="details-degree">
                <div className="details-degree-title">
                    <strong>Degree:</strong>
                </div>
                <div className="details-degree-user">
                    {props.degree}
                </div>
            </div>
            <div className="details-email">
                <div className="details-email-title">
                    <strong>Email:</strong>
                </div>
                <div className="details-email-user">
                    {props.email}
                </div>
            </div>
        </div>
    )
}

export default PersonalDetails;