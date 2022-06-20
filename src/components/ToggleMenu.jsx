import React from 'react'
import "../style/ToggleMenu.css"

const ToggleMenu = () => {
    return (
        <div className='toggle-menu p-3'>
            <div className='d-flex justify-content-between'><span><h5>Work</h5></span><span><i class="bi bi-x-lg"></i></span></div>
            <div className='toggle-section01'>
                <div className='mx-3 py-2 '><span>Visit More LinkedIn Products</span></div>
                <div className='d-flex justify-content-between mx-2 text-center' >
                    <div><div className='toggle-item'><i class="bi bi-play-btn-fill"></i></div><small>Learning</small></div>
                    <div><div className='toggle-item'><i class="bi bi-play-btn-fill"></i></div><small>Insight</small></div>
                    <div><div className='toggle-item'><i class="bi bi-play-btn-fill"></i></div><small>Post a Job</small></div>
                    <div><div className='toggle-item'><i class="bi bi-play-btn-fill"></i></div><small>Advertise</small></div>

                </div>
                <div className='d-flex justify-content-between mx-2 text-center' >
                    <div> <div className='toggle-item'><i class="bi bi-play-btn-fill"></i></div><small>Find Leads</small></div>
                    <div><div className='toggle-item'><i class="bi bi-play-btn-fill"></i></div><small>Groups</small></div>
                    <div><div className='toggle-item'><i class="bi bi-play-btn-fill"></i></div><small>Service Marketplace</small></div>
                    <div><div className='toggle-item'><i class="bi bi-play-btn-fill"></i></div><small>Salary</small></div>
                </div>
            </div>
        </div>
    )
}

export default ToggleMenu