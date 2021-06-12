import { userLogin, userRegister, getUserInfo } from "./action";
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
        extraReducers: (builder) => {
                builder.addCase(getUserInfo.fulfilled, (state, { payload }) => {
                        const newState = { ...state, payload };
                        newState.isLogin = true;
                        return newState;
                });
                builder.addCase(getUserInfo.rejected, (state, { payload }) => {
                        state.isLogin = false;
                });

                builder.addCase(userRegister.fulfilled, (state, { payload }) => {
                        state.isLogin = true;
                });
                builder.addCase(userLogin.fulfilled, (state, { payload }) => {
                        state.isLogin = true;
                });
        },
});

export const userActions = { ...userSlice.actions, userLogin, userRegister, getUserInfo };

export const authReducer = userSlice.reducer;
