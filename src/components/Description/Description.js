import React from 'react'
import { useState } from 'react';

export default function Description() {
    const [hidden, setHidden] = useState(false);
    const displayBlock = () => {
        setHidden(!hidden);
    }

    const displayNone = () => {
        setHidden(!hidden);
    }
    return (
        <div>
            {/* Description */}
            <div className="content-description">
                <div>
                    <h3 className="description">Description</h3>
                    <i className="fa-solid fa-pencil description-icon" id="icon-description" onClick={displayBlock}></i>
                </div>

                <div className="description-item">
                    <ul>
                        <li>
                            Dugue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel
                            nasand
                            praesent blandit lacinia erat vestibulum sed.
                        </li>
                        <li>
                            Augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.
                        </li>
                        <li>
                            Liam neque vestibulum eget vulputate ut ultrices vel.
                        </li>
                    </ul>
                </div>
            </div>

            {/* Modal description */}
            <div className={hidden ? "modal-description" : "hidden"} id="modal-description">
                <div className="modal-content">
                    <div className="modal-header">
                        <p className="modal-title">Description</p>
                    </div>
                    <div className="modal-body">
                        <div className="modal-icon">
                            <div className="wrapper-icon">
                                <i className="fa-solid fa-bold"></i>
                            </div>
                            <div className="wrapper-icon">
                                <i className="fa-solid fa-italic"></i>
                            </div>
                            <div className="wrapper-icon">
                                <i className="fa-solid fa-list"></i>
                                <i className="fa-sharp fa-solid fa-chevron-down" ></i>
                            </div>
                            <div className="wrapper-icon">
                                <i className="fa-solid fa-link"></i>
                                <i className="fa-sharp fa-solid fa-chevron-down" ></i>
                            </div>
                            <div className="wrapper-icon">
                                <i className="fa-solid fa-paperclip"></i>
                            </div>
                            <div className="wrapper-icon">
                                <i className="fa-solid fa-paragraph"></i>
                                <i className="fa-sharp fa-solid fa-chevron-down"></i>
                            </div>
                        </div>
                        <div className="modal-wrapper-box">
                            <ul>
                                <div className="wrapper-input">
                                    <li>
                                        <input type="text" className="modal-description-input"
                                            value="Dugue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante velnasand praesent blandit lacinia erat vestibulum sed." />
                                    </li>
                                </div>
                                <div className="wrapper-input">
                                    <li>
                                        <input type="text" className="modal-description-input"
                                            value="Augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere." />
                                    </li>
                                </div>
                                <div className="wrapper-input">
                                    <li>
                                        <input type="text" className="modal-description-input"
                                            value="Liam neque vestibulum eget vulputate ut ultrices vel." />
                                    </li>
                                </div>
                            </ul>
                            <div className="length-description-input">320/500</div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className={hidden ? "btn btn-default" : "btn btn-default hidden"} id="modal-cancel-project" onClick={displayNone}>Cancel</button>
                        <button className={hidden ? "btn btn-primary" : "btn btn-primary hidden"} id="modal-save-project" onClick={displayNone}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
