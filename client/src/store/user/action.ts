import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginDto, RegisterDto, UserDto } from "./dto";
import { http } from "../../service/http";

export const userLogin = createAsyncThunk<boolean, LoginDto, { rejectValue: string }>(
        "userLogin",
        async (input, thunkApi) => {
                const { rejectWithValue } = thunkApi;
                try {
                        await http.post("/user/login", input);
                        return true;
                } catch (err) {
                        return rejectWithValue("Error");
                }
        }
);

export const userRegister = createAsyncThunk<boolean, RegisterDto, { rejectValue: string }>(
        "userRegister",
        async (input, thunkApi) => {
                const { rejectWithValue } = thunkApi;
                try {
                        await http.post("/user/register", input);
                        return true;
                } catch (err) {
                        return rejectWithValue("Error");
                }
        }
);

export const getUserInfo = createAsyncThunk<UserDto, void, { rejectValue: string }>("userInfo", async (_, thunkApi) => {
        const { rejectWithValue } = thunkApi;
        try {
                const res = await http.get("/user");
                return res.data.data;
        } catch (err) {
                return rejectWithValue("Error");
        }
});
