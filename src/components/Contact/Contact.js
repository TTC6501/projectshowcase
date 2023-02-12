import React from 'react'

export default function Contact() {
    return (
        <div>
            {/* Contact methods */}
            <div>
                <p className="heading-info">Want to know more, contact me!</p>
                <div className="card-info">
                    <div className="card-body">
                        <div className="card-text">
                            <i className="fa-solid fa-envelope gmail-icon"></i>
                            <span className="gmail-text">congttse150167@fpt.edu.vn</span>
                        </div>
                        <br />
                        <div className="card-text">
                            <i className="fa-solid fa-phone"></i>
                            <span className="phone-text">+84 393215170</span>
                        </div>
                        <br />
                        <div className="card-text">
                            <i className="fa-solid fa-location-dot"></i>
                            <span className="location-text">34 Milwaukee Avenue</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="github">
                        <i className="fa-brands fa-github"></i>
                        <span>
                            <a href="#" className="github-text">github.com/pattietrusdale</a>
                        </span>
                    </div>
                    <div className="linkedin">
                        <i className="fa-brands fa-linkedin"></i>
                        <span>
                            <a href="#" className="linkedin-text"> linkedin.com/in/pattie-trusdale-34...</a>
                        </span>
                    </div>
                    <div className="facebook">
                        <i className="fa-brands fa-facebook"></i>
                        <span>
                            <a href="#" className="facebook-text"> facebook.com/pattie.trusdale</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
