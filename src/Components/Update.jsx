import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "./UserReducer";

const Update = () => {
    const {id} = useParams();
    const users = useSelector((state) => state.users);
    const existingUser = users.filter((user) => user.id == id);
    const {name, email} = existingUser[0];
    const [updatedName, setName] = useState(name);
    const [updatedEmail, setEmail] = useState(email);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(updateUser({ id, name: updatedName, email: updatedEmail}));
        navigate('/');
    }

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <h3 className='update-user-details'>Update user details</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className="form-label">Name*:</label>
                    <input type="text" className="form-control" name="name" placeholder="enter name" 
                    value={updatedName}
                    required={true}
                    maxLength={255}
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" className="form-control" name="email" placeholder='enter email'
                    value={updatedEmail}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div> <br />
                <button className="btn btn-info btn-secondary" disabled={!updatedName}>Update</button>
            </form>
        </div>
    </div> 
    );
} 

export default Update;