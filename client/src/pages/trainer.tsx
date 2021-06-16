import * as React from "react";
import { Button } from "@material-ui/core";

export interface TrainerProps {}

const Trainer: React.FunctionComponent<TrainerProps> = () => {
        const [trainer, setTrainer] = React.useState<number>(0);

        const handleOnClick = () => {
                if (trainer === 0) {
                        return setTrainer(1);
                }
                return setTrainer(0);
        };

        return (
                <div className="flex flex-col items-center justify-center flex-1 w-screen py-24 overflow-hidden bg-gray-900">
                        <div
                                className={`flex duration-500 transform ${
                                        trainer === 0 ? "translate-x-1/4" : "-translate-x-1/4"
                                }`}
                                style={{ width: "200%" }}
                        >
                                <div className="flex items-center justify-between flex-1 w-full px-32">
                                        <div>
                                                <div className="flex items-center mb-2 transform -translate-x-16">
                                                        <div className="items-center w-12 h-12">
                                                                <img
                                                                        src="/share/trainericon.svg"
                                                                        alt=""
                                                                        className="w-full h-full"
                                                                />
                                                        </div>
                                                        <h1 className="text-5xl font-semibold text-pink-500">
                                                                Liliana - Personal Trainer
                                                        </h1>
                                                </div>
                                                <div className="mr-2 text-2xl font-medium text-gray-100">
                                                        <div className="flex transform -translate-x-16">
                                                                <div className="items-center w-12 h-12">
                                                                        <img
                                                                                src="/share/profile.svg"
                                                                                alt=""
                                                                                className="w-full h-full"
                                                                        />
                                                                </div>
                                                                <h1 className="text-5xl font-semibold text-green-400">
                                                                        Certificate
                                                                </h1>
                                                        </div>
                                                        <p>Qualified Gym Instructor</p>
                                                        <p>Qualified Personal Trainer</p>
                                                        <p>High Intensity Interval Training (HIIT)</p>
                                                        <p>Qualified Metafit Instructor</p>
                                                        <p>Functional Fitness</p>
                                                </div>
                                                <div className="text-2xl font-medium text-gray-100 w-180">
                                                        <div className="flex transform -translate-x-16">
                                                                <div className="items-center w-12 h-12">
                                                                        <img
                                                                                src="/share/fire.svg"
                                                                                alt=""
                                                                                className="w-full h-full"
                                                                        />
                                                                </div>
                                                                <h1 className="text-5xl font-semibold text-orange-400">
                                                                        Why should you train with me
                                                                </h1>
                                                        </div>
                                                        <p>I have been a Personal Trainer for over 9 Years.</p>
                                                        <p>I have spent many years specialising in Women's Fitness</p>
                                                        <p>I have helped many people,with their exercise goals.</p>
                                                        <p>Whether you train for a specific goal.</p>
                                                </div>
                                        </div>
                                        <div className="rounded w-180 h-116 ">
                                                <img src="share/liliana.jpg" alt="" className="w-full h-full" />
                                        </div>
                                </div>
                                <div className="flex items-center justify-between flex-1 w-full px-32">
                                        <div>
                                                <div className="flex items-center mb-2 transform -translate-x-16">
                                                        <div className="items-center w-12 h-12">
                                                                <img
                                                                        src="/share/trainericon.svg"
                                                                        alt=""
                                                                        className="w-full h-full"
                                                                />
                                                        </div>
                                                        <h1 className="text-5xl font-semibold text-blue-500">
                                                                Adam - Personal Trainer
                                                        </h1>
                                                </div>
                                                <div className="mb-2 text-2xl font-medium text-gray-100">
                                                        <div className="flex transform -translate-x-16">
                                                                <div className="items-center w-12 h-12">
                                                                        <img
                                                                                src="/share/profile.svg"
                                                                                alt=""
                                                                                className="w-full h-full"
                                                                        />
                                                                </div>
                                                                <h1 className="text-5xl font-semibold text-green-400">
                                                                        Certificate
                                                                </h1>
                                                        </div>
                                                        <p>Aerobic Conditioning</p>
                                                        <p>Suspension Training</p>
                                                        <p>High Intensity Interval Training (HIIT)</p>
                                                        <p>Strength & Conditioning</p>
                                                        <p>Functional Fitness</p>
                                                </div>
                                                <div className="text-2xl font-medium text-gray-100 w-180 ">
                                                        <div className="flex transform -translate-x-16">
                                                                <div className="w-12 h-12 -center">
                                                                        <img
                                                                                src="/share/fire.svg"
                                                                                alt=""
                                                                                className="w-full h-full"
                                                                        />
                                                                </div>
                                                                <h1 className="text-5xl font-semibold text-orange-500">
                                                                        Why should you train with me
                                                                </h1>
                                                        </div>
                                                        <p>
                                                                I have many different influences on my training style,
                                                                including experience and achievements in athletics,
                                                                rugby league, soccer, and tennis.
                                                        </p>
                                                        <p>
                                                                I like to train across various modalities and training
                                                                styles. My current focus is strength training. Sport and
                                                                fitness has always been apart of my life, and now it is
                                                                my career.
                                                        </p>
                                                        <p>
                                                                Whether you train for a specific goal, or train for the
                                                                love of fitness, I hope that I can inspire you with my
                                                                experience and knowledge to become a better you!
                                                        </p>
                                                </div>
                                        </div>
                                        <div className="rounded w-180 h-116">
                                                <img
                                                        src="share/adam.jpg"
                                                        alt="Whe"
                                                        className="object-cover object-top w-full h-full"
                                                />
                                        </div>
                                </div>
                        </div>
                        <Button
                                variant="contained"
                                color={trainer === 0 ? `secondary` : `primary`}
                                onClick={() => handleOnClick()}
                                size="large"
                        >
                                Switch to
                                {trainer === 0 ? ` Liliana` : " Adam"}
                        </Button>
                </div>
        );
};

export default Trainer;
