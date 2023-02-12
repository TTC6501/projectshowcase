import React from 'react'
import avatarPerson1 from '../../assets/avatar-person1.png'
import avatarPerson2 from '../../assets/avatar-person2.png'
import avatarPerson3 from '../../assets/avatar-person3.png'
import avatarPerson4 from '../../assets/avatar-person4.png'
export default function Team() {
    return (
        <div>
            {/*Team information */}
            <div>
                <p className="heading-team">Team-members</p>
                <div>
                    <hr className="border1-person1" />
                    <p className="name-person1">Antons Playden</p>
                    <hr className="border2-person1" />
                    <img src={avatarPerson1} alt="avatar-person1" className="avatar-person1" />
                    <hr className="border3-person1" />
                    <p className="job-person1">Dental Hygienist </p>
                    <hr className="border4-person1" />
                    <hr className="border5-person1" />
                    <hr className="border6-person1" />
                </div>
                <div>
                    <hr className="border1-person2" />
                    <p className="name-person2">Lowe Coronas </p>
                    <hr className="border2-person2" />
                    <img src={avatarPerson2} alt="avatar-person2" className="avatar-person2" />
                    <hr className="border3-person2" />
                    <p className="job-person2">Financial Analyst</p>
                    <hr className="border4-person2" />
                    <hr className="border5-person2" />
                    <hr className="border6-person2" />
                </div>
                <div>
                    <hr className="border1-person3" />
                    <p className="name-person3">Galvan Bonifas</p>
                    <hr className="border2-person3" />
                    <img src={avatarPerson3} alt="avatar-person3" className="avatar-person3" />
                    <hr className="border3-person3" />
                    <p className="job-person3">Media Manager </p>
                    <hr className="border4-person3" />
                    <hr className="border5-person3" />
                    <hr className="border6-person3" />
                </div>
                <div>
                    <hr className="border1-person4" />
                    <p className="name-person4">Galvan Bonifas</p>
                    <hr className="border2-person4" />
                    <img src={avatarPerson4} alt="avatar-person4" className="avatar-person4" />
                    <hr className="border3-person4" />
                    <p className="job-person4">Media Manager </p>
                    <hr className="border4-person4" />
                    <hr className="border5-person4" />
                    <hr className="border6-person4" />
                </div>
            </div>
        </div>
    )
}
