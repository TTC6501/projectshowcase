import React from 'react'
import { useState } from 'react'
import work1 from '../../assets/work1.jpg'
import work2 from '../../assets/work2.jpg'
import work3 from '../../assets/work3.jpg'
export default function Features() {
    const [hidden, setHidden] = useState(false);
    const displayBlock = () => {
        setHidden(!hidden);
    }

    const displayNone = () => {
        setHidden(!hidden);
    }
    return (
        <div>
            {/* <Features content*/}
            <div>
                <div>
                    <h1 className="heading-features">Features</h1>
                    <i className="fa-solid fa-pencil features-icon" id="icon-features" onClick={displayBlock}></i>
                </div>

            </div>
            <div>
                <img src={work1} alt="work1" className="features-image1" />
                <p className="heading-image1">User research</p>
                <p className="description-image1">Metus vitae durea nullam ipsum aliquam non mauris morbi non lectus aliquam
                    sit
                    amet aliquam dieam earn
                    magna bibendum imperdiet nullam orci pede.
                </p>
                <hr className="features-border-image1" />
            </div>
            <div>
                <img src={work2} alt="work2" className="features-image2" />
                <div className="heading-image2">
                    <p className="heading-text-image2">Getting stakeholder</p>
                </div>
                <p className="description-image2">Ipsum ac tellus semper interdum mauris libero ullamcorper purus sit amet
                    nulla
                    quisque arcu libero
                    rustrum sempereed ac lobortis vel dapibus at.
                </p>
                <hr className="features-border-image2" />
            </div>
            <div>
                <img src={work3} alt="work3" className="features-image3" />
                <p className="heading-image3">User interaction</p>
                <p className="description-image3">Sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt
                    anteca
                    veal ipsum praesent
                    blandit lacinia erat vestibulum sed at magna.
                </p>
                <hr className="features-border-image3" />
            </div>

            {/*Modal Features */}
            <div className={hidden ? "modal-features" : "hidden"} id="modal-features">
                <div className="modal-content" id="modal-content-features">
                    <div className="modal-header">
                        <h4 className="modal-title-features">Features</h4>
                    </div>
                    <div className="modal-body">
                        <div className="row responsive996px">
                            <div className="col-xl-6">
                                <img src={work1} alt="work1" className="modal-image-work" />
                            </div>
                            <div className="col-xl-6 col-md-12">
                                <p className="modal-features-title">Title <span className="star">*</span></p>
                                <input type="text" className="modal-title-input" value="User research" />
                                <p className="modal-features-description">Description <span className="star">*</span></p>
                                <textarea
                                    className="modal-features-textarea">Metus vitae durea nullam ipsum aliquam non mauris morbi non lectus aliquam sit amet aliquam dieam earn magna bibendum imperdiet nullam orci pede.</textarea>
                                <p className="length-description-area">133/250</p>
                            </div>
                        </div>
                        <div className="row responsive996px">
                            <div className="col-xl-6">
                                <img src={work2} alt="work2" className="modal-image-work" />
                            </div>
                            <div className="col-xl-6">
                                <p className="modal-features-title">Title <span className="star">*</span></p>
                                <input type="text" className="modal-title-input" value="Getting stakeholder" />
                                <p className="modal-features-description">Description <span className="star">*</span></p>
                                <textarea
                                    className="modal-features-textarea">Ipsum ac tellus semper interdum mauris libero ullamcorper purus sit amet nulla quisque arcu libero rustrum sempereed ac lobortis vel dapibus at.</textarea>
                                <p className="length-description-area">140/250</p>
                            </div>
                            <div>
                                <button className="modal-button-add">Add another feature</button>
                            </div>
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
