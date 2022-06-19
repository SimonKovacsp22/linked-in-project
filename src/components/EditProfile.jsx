import { useEffect, useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useSelector } from 'react-redux'

export default function EditProfile(props) {
    const myProfile = useSelector((state) => state.myProfile.profileData)
    console.log(myProfile._id);

    const [editDetails, setEditDetails] = useState({
        id: myProfile._id,
        name: myProfile.name,
        surname: myProfile.surname,
        bio: myProfile.bio,
        area: myProfile.area,
        email: myProfile.email,
        title: myProfile.title,
        username: myProfile.username,
        image: myProfile.image,
    })
    const editProfile = (e) => {
        e.preventDefault()
        let headers = {
            Authorization:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdjZjg3MzZkMDZiOTAwMTUyZWYyOGMiLCJpYXQiOjE2NTU0ODQ1MTksImV4cCI6MTY1NjY5NDExOX0.d7rQWRe_9lYVrOToZMOqp97sGy5noEyIV3e46ZGX9P0",
            "Content-type": "application/json",
        }
        return async () => {
            try {
                let response = await fetch(
                    `https://striveschool-api.herokuapp.com/api/profile/${editDetails.id}/picture`,
                    {
                        method: "POST",
                        headers,
                    }
                )
                console.log(response);
            } catch (err) {
                console.log(err)
            }
        }
    }
    // useEffect(() => {
    //     editProfile()
    // }, [])

    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Using Grid in Modal
                </Modal.Title>

            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your name"
                            defaultValue={editDetails.name}
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Surname</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your surname"
                            defaultValue={editDetails.surname}
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your username"
                            defaultValue={editDetails.username}
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            defaultValue={editDetails.email}
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Job title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your job title"
                            defaultValue={editDetails.title}
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Current situation(bio)</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your bio"
                            defaultValue={editDetails.bio}
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Location</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your bio"
                            defaultValue={editDetails.area}
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Add image</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your bio"
                            defaultValue={editDetails.image}
                            autoFocus
                        />
                    </Form.Group>
                    {/* <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group> */}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                {/* <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button> */}
                <Button type="submit" variant="primary" onClick={editProfile}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}