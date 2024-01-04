import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { addUser } from './UserReducer';

const Create = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const users = useSelector((state) => state.users);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addUser({ id: users.length ? users[users.length -1].id + 1 : 1, name, email}));
        navigate('/');
    }

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <h3 className='add-user'>Enter new user details</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="form-label">Name*:</label>
                        <input type="text" className="form-control" name="name" placeholder="enter name"
                        required={true}
                        maxLength={255}
                        onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input type="email" className="form-control" name="email" placeholder='enter email'
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div> <br />
                    <button className="btn btn-info"
                    disabled={!name}>
                        Add
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Create;