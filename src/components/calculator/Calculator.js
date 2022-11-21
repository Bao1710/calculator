import React, { useEffect, useState } from "react";

export default function Calculator() {
    const [result, setResult] = useState("");
    const [theme, setTheme] = useState("light");
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);
    const handleChangeTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };
    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
    };
    const handleClear = () => {
        setResult("");
    };
    const handleBackSpace = () => {
        setResult(result.slice(0, -1));
    };
    const calc = () => {
        try {
            setResult(eval(result).toString());
        } catch {
            setResult("syntax error");
        }
    };

    return (
        <div>
            <div className="min-w-screen min-h-screen bg-[#ebebeb] dark:bg-[#1a1a1a] flex items-center justify-center  px-5 ">
                <div
                    className="w-full mx-auto rounded-3xl bg-white dark:bg-[#22252d]  shadow-xl text-gray-800 relative overflow-hidden"
                    style={{ maxWidth: 350 }}
                >
                    <div className="w-full flex justify-center">
                        <button
                            onClick={handleChangeTheme}
                            className="flex bg-[#f9f9f9] dark:bg-[#292d36]  mt-5 px-5 py-1 rounded-3xl "
                        >
                            <div className="w-1/2 mr-2 text-lg dark:text-[#77797e]">
                                <i className="fa-regular fa-sun"></i>
                            </div>
                            <div className="w-1/2 ml-2 text-lg text-[#dedede]">
                                <i className="fa-regular fa-moon"></i>
                            </div>
                        </button>
                    </div>
                    <div className="w-full h-40 bg-white dark:bg-[#22252d] flex items-end text-right ">
                        <div className="w-full dark:text-white  py-5 px-6 text-6xl text-black font-thin text-ellipsis overflow-hidden">
                            <div>{result}</div>
                        </div>
                    </div>
                    <div className="w-full bg-[#f9f9f9] dark:bg-[#292d36] py-3 rounded-t-3xl">
                        <div className="flex w-full px-3 ">
                            <div className="w-1/4 rounded-2xl  bg-[#f7f7f7] dark:bg-[#272b33] m-2 ">
                                <button
                                    onClick={handleClear}
                                    className="w-full h-16 outline-none focus:outline-none hover:bg-gray-300 hover:rounded-2xl hover:bg-opacity-20 text-[#22fbd3] text-xl font-medium"
                                >
                                    AC
                                </button>
                            </div>
                            <div className="w-1/4 rounded-2xl  bg-[#f7f7f7] dark:bg-[#272b33] m-2 ">
                                <button
                                    name="("
                                    onClick={handleClick}
                                    className="w-full h-16 outline-none focus:outline-none hover:bg-gray-300 hover:rounded-2xl hover:bg-opacity-20 text-[#22fbd3] text-xl font-medium"
                                >
                                    (
                                </button>
                            </div>
                            <div className="w-1/4 rounded-2xl  bg-[#f7f7f7] dark:bg-[#272b33] m-2 ">
                                <button
                                    name=")"
                                    onClick={handleClick}
                                    className="w-full h-16 outline-none focus:outline-none hover:bg-gray-300 hover:rounded-2xl hover:bg-opacity-20 text-[#22fbd3] text-xl font-medium"
                                >
                                    )
                                </button>
                            </div>
                            <div className="w-1/4 rounded-2xl  bg-[#f7f7f7] dark:bg-[#272b33] m-2 ">
                                <button
                                    name="/"
                                    onClick={handleClick}
                                    className="w-full h-16 outline-none focus:outline-none hover:bg-gray-300 hover:rounded-2xl hover:bg-opacity-20 text-[#ec6666] text-4xl font-medium"
                                >
                                    &divide;
                                </button>
                            </div>
                        </div>
                        <div className="flex w-full px-3 ">
                            <div className="w-1/4 rounded-2xl  bg-[#f7f7f7] dark:bg-[#272b33] m-2 ">
                                <button
                                    name="7"
                                    onClick={handleClick}
                                    className="w-full h-16 outline-none focus:outline-none hover:bg-gray-300 hover:rounded-2xl hover:bg-opacity-20 text-black dark:text-white text-xl font-medium"
                                >
                                    7
                                </button>
                            </div>
                            <div className="w-1/4 rounded-2xl  bg-[#f7f7f7] dark:bg-[#272b33] m-2 ">
                                <button
                                    name="8"
                                    onClick={handleClick}
                                    className="w-full h-16 outline-none focus:outline-none hover:bg-gray-300 hover:rounded-2xl hover:bg-opacity-20 text-black dark:text-white text-xl font-medium"
                                >
                                    8
                                </button>
                            </div>
                            <div className="w-1/4 rounded-2xl  bg-[#f7f7f7] dark:bg-[#272b33] m-2 ">
                                <button
                                    name="9"
                                    onClick={handleClick}
                                    className="w-full h-16 outline-none focus:outline-none hover:bg-gray-300 hover:rounded-2xl hover:bg-opacity-20 text-black dark:text-white text-xl font-medium"
                                >
                                    9
                                </button>
                            </div>
                            <div className="w-1/4 rounded-2xl  bg-[#f7f7f7] dark:bg-[#272b33] m-2 ">
                                <button
                                    name="*"
                                    onClick={handleClick}
                                    className="w-full h-16 outline-none focus:outline-none hover:bg-gray-300 hover:rounded-2xl hover:bg-opacity-20 text-[#ec6666] text-4xl font-medium"
                                >
                                    &times;
                                </button>
                            </div>
                        </div>
                        <div className="flex w-full px-3 ">
                            <div className="w-1/4 rounded-2xl  bg-[#f7f7f7] dark:bg-[#272b33] m-2 ">
                                <button
                                    name="4"
                                    onClick={handleClick}
                                    className="w-full h-16 outline-none focus:outline-none hover:bg-gray-300 hover:rounded-2xl hover:bg-opacity-20 text-black dark:text-white text-xl font-medium"
                                >
                                    4
                                </button>
                            </div>
                            <div className="w-1/4 rounded-2xl  bg-[#f7f7f7] dark:bg-[#272b33] m-2 ">
                                <button
                                    name="5"
                                    onClick={handleClick}
                                    className="w-full h-16 outline-none focus:outline-none hover:bg-gray-300 hover:rounded-2xl hover:bg-opacity-20 text-black dark:text-white text-xl font-medium"
                                >
                                    5
                                </button>
                            </div>
                            <div className="w-1/4 rounded-2xl  bg-[#f7f7f7] dark:bg-[#272b33] m-2 ">
                                <button
                                    name="6"
                                    onClick={handleClick}
                                    className="w-full h-16 outline-none focus:outline-none hover:bg-gray-300 hover:rounded-2xl hover:bg-opacity-20 text-black dark:text-white text-xl font-medium"
                                >
                                    6
                                </button>
                            </div>
                            <div className="w-1/4 rounded-2xl  bg-[#f7f7f7] dark:bg-[#272b33] m-2 ">
                                <button
                                    name="-"
                                    onClick={handleClick}
                                    className="w-full h-16 outline-none focus:outline-none hover:bg-gray-300 hover:rounded-2xl hover:bg-opacity-20 text-[#ec6666] text-4xl font-medium"
                                >
                                    &ndash;
                                </button>
                            </div>
                        </div>
                        <div className="flex w-full px-3 ">
                            <div className="w-1/4 rounded-2xl  bg-[#f7f7f7] dark:bg-[#272b33] m-2 ">
                                <button
                                    name="1"
                                    onClick={handleClick}
                                    className="w-full h-16 outline-none focus:outline-none hover:bg-gray-300 hover:rounded-2xl hover:bg-opacity-20 text-black dark:text-white text-xl font-medium"
                                >
                                    1
                                </button>
                            </div>
                            <div className="w-1/4 rounded-2xl  bg-[#f7f7f7] dark:bg-[#272b33] m-2 ">
                                <button
                                    name="2"
                                    onClick={handleClick}
                                    className="w-full h-16 outline-none focus:outline-none hover:bg-gray-300 hover:rounded-2xl hover:bg-opacity-20 text-black dark:text-white text-xl font-medium"
                                >
                                    2
                                </button>
                            </div>
                            <div className="w-1/4 rounded-2xl  bg-[#f7f7f7] dark:bg-[#272b33] m-2 ">
                                <button
                                    name="3"
                                    onClick={handleClick}
                                    className="w-full h-16 outline-none focus:outline-none hover:bg-gray-300 hover:rounded-2xl hover:bg-opacity-20 text-black dark:text-white text-xl font-medium"
                                >
                                    3
                                </button>
                            </div>
                            <div className="w-1/4 rounded-2xl  bg-[#f7f7f7] dark:bg-[#272b33] m-2 ">
                                <button
                                    name="+"
                                    onClick={handleClick}
                                    className="w-full h-16 outline-none focus:outline-none hover:bg-gray-300 hover:rounded-2xl hover:bg-opacity-20 text-[#ec6666] text-4xl font-medium"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <div className="flex w-full px-3">
                            <div className="w-1/4 rounded-2xl  bg-[#f7f7f7] dark:bg-[#272b33] m-2 ">
                                <button
                                    onClick={handleBackSpace}
                                    className="w-full h-16 outline-none focus:outline-none hover:bg-gray-300 hover:rounded-2xl hover:bg-opacity-20 text-black dark:text-white text-xl font-medium"
                                >
                                    <i className="fa-solid fa-rotate-left"></i>
                                </button>
                            </div>
                            <div className="w-1/4 rounded-2xl  bg-[#f7f7f7] dark:bg-[#272b33] m-2 ">
                                <button
                                    name="0"
                                    onClick={handleClick}
                                    className="w-full h-16 outline-none focus:outline-none hover:bg-gray-300 hover:rounded-2xl hover:bg-opacity-20 text-black dark:text-white text-xl font-medium"
                                >
                                    0
                                </button>
                            </div>
                            <div className="w-1/4 rounded-2xl  bg-[#f7f7f7] dark:bg-[#272b33] m-2 ">
                                <button
                                    name="."
                                    onClick={handleClick}
                                    className="w-full h-16 outline-none focus:outline-none hover:bg-gray-300 hover:rounded-2xl hover:bg-opacity-20 text-black dark:text-white text-xl font-medium"
                                >
                                    .
                                </button>
                            </div>
                            <div className="w-1/4 rounded-2xl  bg-[#f7f7f7] dark:bg-[#272b33] m-2 ">
                                <button
                                    onClick={calc}
                                    className="w-full h-16 outline-none focus:outline-none hover:bg-gray-300 hover:rounded-2xl hover:bg-opacity-20 text-[#ec6666] text-4xl font-medium"
                                >
                                    =
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
