import * as React from "react";
import LoginForm from "../components/loginForm";

export interface LoginProps {}

const Login: React.FunctionComponent<LoginProps> = () => {
        return (
                <div className="flex-1 flex items-center  bg-gray-800">
                        <LoginForm />
                </div>
        );
};

export default Login;
