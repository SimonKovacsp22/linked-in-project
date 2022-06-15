import React from 'react'
import "../style/AddPost.css"

const AddPost = () => {
    return (
        <div className='add-post'>
            <div className="input-container d-flex justify-content-between p-2">
                <img className='post-profile-image' src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" alt="" />
                <input type="text" class="post-input" placeholder="Start a post" aria-label="Username" aria-describedby="addon-wrapping" />
            </div>
            <div className="action-container m-auto">
                <p><i class="bi bi-card-image text-info mr-2"></i>Photo</p>
                <p><i class="bi bi-play-btn-fill text-success mr-2"></i>Video</p>
                <p><i class="bi bi-calendar-date text-warning mr-2"></i>Event</p>
                <p><i class="bi bi-file-text text-danger mr-2"></i>Write article</p>
            </div>
        </div>
    )
}

export default AddPost