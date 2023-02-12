import React from 'react'
import Ellipse from '../../assets/Ellipse.png'
export default function Header() {
    return (
        <div className="heading">
            <button className="button-back"></button>
            <span className="text-back">Back</span>
            <div>
                <img src={Ellipse} alt="Avatar" className="avatar" />
                <strong className="avatar-name">Pattie Trusdale</strong>
                <p className="avatar-job">Full-stack Developer</p>
            </div>
            <div>
                <button className="button-hire">HIRE</button>
            </div>
        </div>
    )
}
