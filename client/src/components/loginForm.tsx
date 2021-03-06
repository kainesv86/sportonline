import * as React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Button, FormControlLabel, Checkbox } from "@material-ui/core";
import { Link } from "react-router-dom";
import { store } from "../store";
import { userActions } from "../store/user";

export interface LoginFormProps {}

interface LoginType {
        username: string;
        password: string;
}

const LoginForm: React.FunctionComponent<LoginFormProps> = () => {
        const { register, handleSubmit } = useForm<LoginType>();

        const onSubmit: SubmitHandler<LoginType> = (data) => {
                console.log("Login Click");
                store.dispatch(userActions.userLogin(data));
        };

        return (
                <form
                        className="flex flex-col px-5 py-8 mx-auto bg-white rounded w-96 bg-gray- "
                        onSubmit={handleSubmit(onSubmit)}
                >
                        <h1 className="mb-4 text-3xl font-semibold text-center text-green-300">
                                Login with Sport Online
                        </h1>
                        <TextField
                                required
                                id="username"
                                label="Username"
                                defaultValue=""
                                style={{ width: "100%", margin: "0 0 24px 0" }}
                                {...register("username")}
                        />
                        <TextField
                                required
                                id="password"
                                label="Password"
                                defaultValue=""
                                type="password"
                                style={{ width: "100%", margin: "0 0 24px 0" }}
                                {...register("password")}
                        />
                        <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="Remember password"
                                style={{ margin: "0 0 24px 0" }}
                        />
                        <Button variant="contained" color="secondary" type="submit">
                                Login
                        </Button>
                        <div className="flex justify-center mt-6">
                                <p className="text-base font-medium text-gray-700">Don't have a account?</p>
                                <Link to="/register">
                                        <p className="ml-1 text-base font-medium text-gray-900 hover:text-blue-500">
                                                Sign up here
                                        </p>
                                </Link>
                        </div>
                </form>
        );
};

export default LoginForm;
