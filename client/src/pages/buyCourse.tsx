import * as React from "react";
import { Link } from "react-router-dom";

export interface BuyCourseProps {}

interface course {
        label: string;
        isBuy: boolean;
}

const courses: course[] = [
        { label: "Lesson 1", isBuy: false },
        { label: "Lesson 2", isBuy: true },
        { label: "Lesson 3", isBuy: true },
        { label: "Lesson 4", isBuy: true },
        { label: "Lesson 5", isBuy: true },
];

const BuyCourse: React.FunctionComponent<BuyCourseProps> = () => {
        const [course, setCourse] = React.useState<Boolean[]>([false, true, false, true, false]);
        return (
                <div className="flex items-center justify-center flex-1 bg-gray-900">
                        <div className="flex items-start justify-center">
                                <div style={{ width: "640px" }} className="flex flex-col items-center">
                                        <div className="overflow-hidden round">
                                                <img src="/share/buycourse.jpg" alt="" />
                                        </div>
                                        <div className="text-white w-160">
                                                <h1 className="text-2xl font-semibold">Beginner course</h1>
                                                <p className="text-sm font-medium">
                                                        We happy to see you being here that mean you want to train your
                                                        body however not all of you know to do it correctly. Thus, we
                                                        introduce you to this course , it will help you how to do it
                                                        easily and correctly. Thank you for reading. please enjoy the
                                                        lesson!
                                                </p>
                                        </div>
                                </div>
                                <div
                                        style={{ width: "780px" }}
                                        className="flex flex-col items-center p-6 ml-16 bg-gray-200 rounded"
                                >
                                        {courses.map((item, index) => (
                                                <div
                                                        className="flex items-center justify-between w-full px-4 py-2 mb-2 font-semibold text-gray-100 bg-blue-400 rounded"
                                                        key={item.label}
                                                >
                                                        <p>{item.label}</p>
                                                        <div
                                                                className="w-40 p-3 bg-indigo-500 rounded cursor-pointer"
                                                                onClick={() => {
                                                                        let newCourse: Boolean[] = { ...course };
                                                                        newCourse[index] = true;
                                                                        setCourse(newCourse);
                                                                }}
                                                        >
                                                                {course[index] ? "Already purchased" : "Buy lesson"}
                                                        </div>
                                                </div>
                                        ))}

                                        <div className="flex justify-around w-full font-semibold">
                                                <div
                                                        className="p-4 mt-4 text-gray-100 bg-indigo-500 rounded cursor-pointer"
                                                        onClick={() => {
                                                                const allCourse: Boolean[] = [
                                                                        true,
                                                                        true,
                                                                        true,
                                                                        true,
                                                                        true,
                                                                ];
                                                                setCourse(allCourse);
                                                        }}
                                                >
                                                        Buy All lesson
                                                </div>
                                                <div className="p-4 mt-4 text-gray-100 bg-indigo-500 rounded cursor-pointer">
                                                        <Link to="/watch">Watch</Link>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default BuyCourse;
