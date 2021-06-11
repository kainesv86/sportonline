import { createSlice } from "@reduxjs/toolkit";
import { UserDto } from "./dto";

const initialState: UserDto = {
        username: "",
        fullName: "",
        email: "",
        isLogin: false,
        courses: [false, false, false, false, false],
};

export const userSlice = createSlice({
        name: "user",
        initialState,
        reducers: {
                resetUser: () => ({ ...initialState }),
        },
});

export const { resetUser } = userSlice.actions;

export default userSlice.reducer;
