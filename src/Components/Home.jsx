import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { removeUser } from "./UserReducer";

const Home = () => {
    let users = useSelector((state) => state.users);

    const [searchedUser, setSearchedUser] = useState('');
    const [showUsers, setShowUsers] = useState(false);

    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeUser({ id }));
    }

    const handleClick = (value) => {
        setShowUsers(true);
    }

    return (
        <div className="container">
            <h1>User Details App</h1>
            <Link to="/create" className="btn btn-success my-3">Add new user</Link>
            {users.length === 0 ? <h3>No users found</h3> :
                <><button type="button" onClick={(e) => handleClick(e.target.value)} className="btn btn-primary ms-2 my-3">Show users</button><div className="show-users">
                    {showUsers ?
                        (<>
                            <input type="text" className="form-control" onChange={(e) => setSearchedUser(e.target.value)} placeholder="search...">
                            </input>
                            <div className="show-users">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.filter((user) => {
                                            return searchedUser.toLowerCase() === '' ? user :
                                                user.name.toLowerCase().includes(searchedUser.toLowerCase()) || user.email.toLowerCase().includes(searchedUser.toLowerCase());
                                        })
                                            .map((user) => (
                                                <tr key={user.id}>
                                                    <td> {user.id} </td>
                                                    <td> {user.name} </td>
                                                    <td> {user.email} </td>
                                                    <td>
                                                        <Link to={`/edit/${user.id}`} className="btn btn-sm btn-secondary">Edit</Link>
                                                        <button type="button" onClick={() => handleRemove(user.id)} className="btn  btn-sm btn-danger ms-2">Remove</button>
                                                    </td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>
                            </div>
                        </>) : null
                    }
                </div></>
            }
        </div>
    );
}

export default Home;