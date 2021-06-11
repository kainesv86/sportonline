import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginDto } from "./dto";

const userLogin = createAsyncThunk<void, LoginDto>("user/login", async (input) => {});
