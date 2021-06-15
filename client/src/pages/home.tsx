import * as React from "react";

export interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
        return (
                <div className="flex items-center justify-center flex-1 w-full h-full px-24 py-20 bg-gradient-to-bl from-red-300 to-yellow-300 ">
                        <div className="mr-40">
                                <h2 className="text-5xl font-medium text-green-600">Best for Health</h2>
                                <h1 className="font-semibold text-green-500 text-8xl">Online Sport</h1>
                                <p className="text-4xl font-medium text-green-700">Sport every time,</p>
                                <p className="text-4xl font-medium text-green-700">everywhere!</p>
                        </div>
                        <video autoPlay muted loop className="rounded">
                                <source src="/video/introbackground.mp4" />
                        </video>
                </div>
        );
};

export default Home;
