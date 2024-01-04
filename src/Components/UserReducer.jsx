import { createSlice } from "@reduxjs/toolkit";

const data = await fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json());

// console.log(data);

const usersList = data.map(({id, name, email}) => ({id, name, email}));

// console.log(usersList);

const userSlice = createSlice({
    name: "users",
    initialState: usersList,
    reducers: { 
        addUser: (state, action) => {
            const { id, name, email } = action.payload;
            state.push({ id, name, email });
        },
        updateUser: (state, action) => {
            const { id, name, email } = action.payload;
            const updatedUser = state.find((user) => user.id == id);
            if (updatedUser) {
                updatedUser.name = name;
                updatedUser.email = email;
            }
        },
        removeUser: (state, action) => {
            const { id } = action.payload;
            const removedUser = state.find((user) => user.id == id);
            if (removedUser) {
            return state.filter((user) => user.id !== id);
            }
        }
    }
});

export const { addUser, updateUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
