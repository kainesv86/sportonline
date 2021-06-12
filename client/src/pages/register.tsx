import * as React from "react";
import RegisterForm from "../components/registerForm";

export interface RegisterProps {}

const Login: React.FunctionComponent<RegisterProps> = () => {
        return (
                <div className="flex items-center flex-1 bg-gray-800">
                        <RegisterForm />
                </div>
        );
};

export default Login;
