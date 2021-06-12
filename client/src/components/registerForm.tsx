import * as React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Button, FormControlLabel, Checkbox } from "@material-ui/core";
import { Link } from "react-router-dom";
import { store } from "../store";
import { userActions } from "../store/user";

export interface RegisterFormProps {}

interface RegisterType {
        fullname: string;
        email: string;
        username: string;
        password: string;
        confirmPassword: string;
}

const RegisterForm: React.FunctionComponent<RegisterFormProps> = () => {
        const { register, handleSubmit } = useForm<RegisterType>();

        const onSubmit: SubmitHandler<RegisterType> = (data) => {
                console.log("Login Click");
                store.dispatch(userActions.userRegister(data));
        };

        return (
                <form
                        className="flex flex-col px-5 py-8 mx-auto bg-white rounded w-96 bg-gray- "
                        onSubmit={handleSubmit(onSubmit)}
                >
                        <h1 className="mb-4 text-3xl font-semibold text-center text-green-300">
                                Register with Sport Online
                        </h1>
                        <TextField
                                required
                                id="fullname"
                                label="Fullname"
                                defaultValue=""
                                style={{ width: "100%", margin: "0 0 24px 0" }}
                                {...register("fullname")}
                        />
                        <TextField
                                required
                                id="email"
                                label="Email"
                                defaultValue=""
                                style={{ width: "100%", margin: "0 0 24px 0" }}
                                {...register("email")}
                        />
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
                        <TextField
                                required
                                id="confirmPassword"
                                label="Confirm Password"
                                defaultValue=""
                                type="password"
                                style={{ width: "100%", margin: "0 0 24px 0" }}
                                {...register("confirmPassword")}
                        />
                        <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="Remember password"
                                style={{ margin: "0 0 24px 0" }}
                        />
                        <Button variant="contained" color="secondary" type="submit">
                                Register
                        </Button>
                        <div className="flex justify-center mt-6">
                                <p className="text-base font-medium text-gray-700">have a account yet?</p>
                                <Link to="/login">
                                        <p className="ml-1 text-base font-medium text-gray-900 hover:text-blue-500">
                                                Sign in here
                                        </p>
                                </Link>
                        </div>
                </form>
        );
};

export default RegisterForm;
