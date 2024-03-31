import React, { useState } from "react";
import Nav from "./components/Nav";

export default function App() {
    const [A, setA] = useState();
    const [B, setB] = useState();
    const [C, setC] = useState();
    const [msg, setMsg] = useState("");

    const calculate = () => {
        if (A == "" || B == "") {
            return setMsg("Please enter values..");
        }

        let D = Math.pow(B, 2) - 4 * A * C; //discriminant

        if (D < 0) {
            //roots are imaginary
            setMsg("Roots are imaginary...");
            setTimeout(() => {
                setMsg("");
            }, 1500);
        } else {
            let x = (-B + Math.sqrt(D)) / (2 * A);
            let x1 = (-B - Math.sqrt(D)) / (2 * A);
            setMsg(`Value of x is ${x} or ${x1}`);
        }
    };

    const clear = () => {
        //clear all
        setA("");
        setB("");
        setC("");
        setMsg("");
    };
    return (
        <>
            <Nav />
            <div className="m-auto my-8 px-10 py-4">
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-lg text-indigo-500 font-semibold">
                            Solve any Quadritic Equation
                        </div>
                        <p className="mt-2 text-gray-500">
                            Please enter the cofficients A , B , C of a
                            Quadratic Equation in the form of (Ax² + Bx + C = 0)
                        </p>
                        <p className="mt-1 text-red-600">{msg && "* " + msg}</p>
                        <div className="mt-2 flex items-center justify-center gap-2">
                            <input
                                type="text"
                                className="bg-gray-100 rounded-sm w-12 p-1 outline-none"
                                placeholder="A"
                                value={A}
                                onChange={e => {
                                    setA(e.target.value);
                                }}
                            />
                            <p className="text-gray-500">X²+</p>
                            <input
                                type="text"
                                className="bg-gray-100 rounded-sm p-1 w-12 outline-none"
                                placeholder="B"
                                value={B}
                                onChange={e => {
                                    setB(e.target.value);
                                }}
                            />
                            <p className="text-gray-500">B+</p>
                            <input
                                type="text"
                                className="bg-gray-100 rounded-sm w-12 p-1 outline-none"
                                placeholder="C"
                                value={C}
                                onChange={e => {
                                    setC(e.target.value);
                                }}
                            />
                            <p className="text-gray-500">=0</p>
                        </div>
                        <div className="mt-3 flex items-center justify-center gap-4">
                            <button
                                onClick={calculate}
                                className="bg-indigo-500 rounded-sm p-2 text-white"
                            >
                                Calculate
                            </button>
                            <button
                                onClick={clear}
                                className="bg-indigo-500 rounded-sm p-2 text-white"
                            >
                                Clear
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
