import * as React from "react";

export interface WatchProps {}

interface video {
        label: string;
        url: string;
}

const videos: video[] = [
        { label: "Lesson 1", url: "https://www.youtube.com/embed/EfoLltdvjak" },
        { label: "Lesson 2", url: "https://www.youtube.com/embed/QFUT4Myib8g" },
        { label: "Lesson 3", url: "https://www.youtube.com/embed/hzLkSqCOTBk" },
        { label: "Lesson 4", url: "https://www.youtube.com/embed/7RsxRTtBfl4" },
        { label: "Lesson 5", url: "https://www.youtube.com/embed/jcMP43qwFcs" },
];

const Watch: React.FunctionComponent<WatchProps> = () => {
        const [played, setPlayed] = React.useState(0);
        return (
                <div className="flex items-center justify-between flex-1 bg-gray-800">
                        <div className="flex flex-col h-screen px-2 py-4 bg-gray-700 w-96">
                                {videos.map((item, index) => (
                                        <div
                                                className={`flex items-center justify-between p-4 mb-3 font-bold text-gray-100 ${
                                                        index === played ? "bg-red-500" : "bg-red-400"
                                                } rounded`}
                                                key={item.label}
                                        >
                                                <p>{item.label}</p>
                                                <div
                                                        className="px-3 py-1 font-medium bg-blue-400 rounded cursor-pointer"
                                                        onClick={() => setPlayed(index)}
                                                >
                                                        Play
                                                </div>
                                        </div>
                                ))}
                        </div>
                        <div className="mr-28" style={{ width: "1280px", height: "720px" }}>
                                <iframe src={videos[played].url} className="w-full h-full" title="None"></iframe>
                        </div>
                </div>
        );
};

export default Watch;
