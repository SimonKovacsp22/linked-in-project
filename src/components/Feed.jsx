import React from 'react'
import "../style/Feed.css"

const Feed = () => {
    return (
        <div className='feed'>
            <div className='p-2 d-flex justify-content-between'>
                <strong>Add to your feed</strong>
                <span><i className="bi bi-info-square-fill"></i></span>
            </div>
            <div className='d-flex pl-2 my-2'>
                <div className="users-profile-div">
                    <img className="users-profile-image" src="https://i.pinimg.com/736x/b8/69/5f/b8695f007aea9a08a0419479217ca6aa.jpg" alt="" />
                </div>
                <div className="px-1">
                    <div className='font-weight-bold'>sidath ssssds</div>
                    <div className='user-details pr-3'><small >Digital Humanities Expert in the making && Teaching Assistant @ Epicode manities Expert in the making && Teaching Assistant @ Epicode </small></div>
                    <button type="button" className="btn btn-outline-secondary rounded-pill mt-1 px-3">
                        <i className="bi bi-plus-lg"></i> Follow

                    </button>
                </div>
            </div>
            <div className='d-flex my-2'>
                <div className="users-profile-div">
                    <img className="users-profile-image" src="https://i.pinimg.com/736x/b8/69/5f/b8695f007aea9a08a0419479217ca6aa.jpg" alt="" />
                </div>
                <div className="px-1">
                    <div className='font-weight-bold'>sidath</div>
                    <div className="user-details pr-3"><small>Digital Humanities Expert in the makinDigital Humanities Expert in the makig && Teaching Assistant @ Epicode </small></div>
                    <button type="button" className="btn btn-outline-secondary rounded-pill mt-1 px-3">
                        <i className="bi bi-plus-lg"></i>  Follow

                    </button>
                </div>
            </div>
        </div>
    )
}

export default Feed