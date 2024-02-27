import { useState } from "react";
import image1 from "../images/guitar/tod10.png";
import image2 from "../images/guitar/lg-08.png";
import image3 from "../images/guitar/m4160.png";
import image4 from "../images/guitar/stratocaster.png";
import image5 from "../images/guitar/lg05.jpg"
import image6 from "../images/guitar/tod10n.png"
import image7 from "../images/guitar/skystang.png"
import image8 from "../images/guitar/fenderstrato.png"
import { FaShoppingCart } from "react-icons/fa";

export default function Guitar  () {
    const [hovered1, setHovered1] = useState(false);
    const [hovered2, setHovered2] = useState(false);
    const [hovered3, setHovered3] = useState(false);
    const [hovered4, setHovered4] = useState(false);
    const [hovered5, setHovered5] = useState(false);
    const [hovered6, setHovered6] = useState(false);
    const [hovered7, setHovered7] = useState(false);
    const [hovered8, setHovered8] = useState(false);
    

    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ml-5 mt-20 pt-3">
                <div
                    onMouseEnter={() => setHovered1(true)}
                    onMouseLeave={() => setHovered1(false)}
                    className="relative mb-5">
                    <img
                        src={image1}
                        alt="Guitar 1"
                        className="w-full h-full object-cover"/>

                    <div className={`absolute bottom-0 bg-gray-800 bg-opacity-75 w-full h-16 flex items-center justify-center text-white ${hovered1 ? "block" : "hidden"}`} >
                        <div className="flex flex-col">
                            <span>$999.99</span>
                            <button className="bg-white text-gray-800 font-bold py-1 px-2 rounded">
                                <span className="flex items-center"><FaShoppingCart className="mr-2"/>Add to Cart</span>
                            </button>
                        </div>

                    </div>
                    <h1 className="text-center">Ibanez~TOD 10</h1>
                </div>
                <div
                    onMouseEnter={() => setHovered2(true)}
                    onMouseLeave={() => setHovered2(false)}
                    className="relative mb-5">
                    <img
                        src={image2}
                        alt="Guitar 2"
                        className="w-full h-full object-cover"/>

                    <div className={`absolute bottom-0 bg-gray-800 bg-opacity-75 w-full h-16 flex items-center justify-center text-white ${hovered2 ? "block" : "hidden"}`} >
                        <div className="flex flex-col">
                            <span>$15.99</span>
                            <button className="bg-white text-gray-800 font-bold py-1 px-2 rounded">
                                <span className="flex items-center"><FaShoppingCart className="mr-2"/>Add to Cart</span>
                            </button>
                        </div>

                    </div>
                    <h1 className="text-center">Lg-08-eq-05</h1>
                </div>
                <div
                    onMouseEnter={() => setHovered3(true)}
                    onMouseLeave={() => setHovered3(false)}
                    className="relative mb-5">
                    <img
                        src={image3}
                        alt="Guitar 3"
                        className="w-full h-full object-cover"/>

                    <div className={`absolute bottom-0 bg-gray-800 bg-opacity-75 w-full h-16 flex items-center justify-center text-white ${hovered3 ? "block" : "hidden"}`} >
                        <div className="flex flex-col">
                            <span>$150.99</span>
                            <button className="bg-white text-gray-800 font-bold py-1 px-2 rounded">
                            <span className="flex items-center"><FaShoppingCart className="mr-2"/>Add to Cart</span>
                            </button>
                        </div>

                    </div>
                    <h1 className="text-center">Smiger m4160</h1>
                </div>
                <div
                    onMouseEnter={() => setHovered4(true)}
                    onMouseLeave={() => setHovered4(false)}
                    className="relative mb-5">
                    <img
                        src={image4}
                        alt="Guitar 4"
                        className="w-full h-full object-cover"/>

                    <div className={`absolute bottom-0 bg-gray-800 bg-opacity-75 w-full h-16 flex items-center justify-center text-white ${hovered4 ? "block" : "hidden"}`} >
                        <div className="flex flex-col">
                            <span>$999.99</span>
                            <button className="bg-white text-gray-800 font-bold py-1 px-2 rounded">
                            <span className="flex items-center"><FaShoppingCart className="mr-2"/>Add to Cart</span>
                            </button>
                        </div>

                    </div>
                    <h1 className="text-center">Fender</h1>
                </div>
                <div
                    onMouseEnter={() => setHovered5(true)}
                    onMouseLeave={() => setHovered5(false)}
                    className="relative mb-5">
                    <img
                        src={image5}
                        alt="Guitar 5"
                        className="w-full h-full object-cover mt-5"/>

                    <div className={`absolute bottom-0 bg-gray-800 bg-opacity-75 w-full h-16 flex items-center justify-center text-white ${hovered5 ? "block" : "hidden"}`} >
                        <div className="flex flex-col">
                            <span>$199.99</span>
                            <button className="bg-white text-gray-800 font-bold py-1 px-2 rounded">
                                <span className="flex items-center"><FaShoppingCart className="mr-2"/>Add to Cart</span>
                            </button>
                        </div>

                    </div>
                    <h1 className="text-center mb-20">Smiger lg 08</h1>
                </div>
                <div
                    onMouseEnter={() => setHovered6(true)}
                    onMouseLeave={() => setHovered6(false)}
                    className="relative mb-5">
                    <img
                        src={image6}
                        alt="Guitar 6"
                        className="w-full h-full object-cover mt-5"/>

                    <div className={`absolute bottom-0 bg-gray-800 bg-opacity-75 w-full h-16 flex items-center justify-center text-white ${hovered6 ? "block" : "hidden"}`} >
                        <div className="flex flex-col">
                            <span>$1500.00</span>
                            <button className="bg-white text-gray-800 font-bold py-1 px-2 rounded">
                                <span className="flex items-center"><FaShoppingCart className="mr-2"/>Add to Cart</span>
                            </button>
                        </div>

                    </div>
                    <h1 className="text-center">Ibanez~TOD 10 N</h1>
                </div>
                <div
                    onMouseEnter={() => setHovered7(true)}
                    onMouseLeave={() => setHovered7(false)}
                    className="relative mb-5">
                    <img
                        src={image7}
                        alt="Guitar 7"
                        className="w-full h-full object-cover mt-5"/>

                    <div className={`absolute bottom-0 bg-gray-800 bg-opacity-75 w-full h-16 flex items-center justify-center text-white ${hovered7 ? "block" : "hidden"}`} >
                        <div className="flex flex-col">
                            <span>$1,500,000</span>
                            <button className="bg-white text-gray-800 font-bold py-1 px-2 rounded">
                                <span className="flex items-center"><FaShoppingCart className="mr-2"/>Add to Cart</span>
                            </button>
                        </div>

                    </div>
                    <h1 className="text-center">Sky Stang 1</h1>
                </div>
                <div
                    onMouseEnter={() => setHovered8(true)}
                    onMouseLeave={() => setHovered8(false)}
                    className="relative mb-5">
                    <img
                        src={image8}
                        alt="Guitar 8"
                        className="w-full h-full object-cover mt-5"/>

                    <div className={`absolute bottom-0 bg-gray-800 bg-opacity-75 w-full h-16 flex items-center justify-center text-white ${hovered8 ? "block" : "hidden"}`} >
                        <div className="flex flex-col">
                            <span>$2,700,000</span>
                            <button className="bg-white text-gray-800 font-bold py-1 px-2 rounded">
                                <span className="flex items-center"><FaShoppingCart className="mr-2"/>Add to Cart</span>
                            </button>
                        </div>

                    </div>
                    <h1 className="text-center">Fender Stratocaster</h1>
                </div>
                </div>
                </div>
                );}