import React from 'react'
import "../style/Profile.css"

const Profile = () => {
    return (
        <div className='profile-container'>
            <div className='header'>
                <div className="cover-image-div">
                    <img className='cover-image' src="https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2021/03/LinkedIn-Default-Background-2020-.jpg" alt="" />
                </div>
                <div className="profile-deatails">
                    <strong>Sidath Dabare</strong>
                    <p>Web Developer</p>
                </div>
                <div className="image-container">
                    <img className="profile-image" src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" alt="" />
                </div>
            </div>
            <div className="section-1 d-flex justify-content-between p-2">
                <div className="connection-details">
                    <p>Connection</p>
                    <strong>Grow your network</strong>
                </div>
                <div className="connection-count">
                    <strong>12</strong>
                </div>
            </div>
            <div className="section-2 p-2">
                <div><small>Access exlusive tools insights</small></div>
                <div className='d-flex align-items-center'>
                    <div><i className="bi bi-app"></i></div>
                    <div className='ml-2'><strong>Network Smarter, Try Premium Free</strong></div>
                </div>

            </div>
            <div className="section-3 p-2">
                <div className='d-flex align-items-center'>
                    <div><i className="bi bi-bookmark-fill"></i></div>
                    <div className='ml-2'><strong>My items</strong></div>
                </div>
            </div>
        </div>
    )
}

export default Profile