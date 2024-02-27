import { useState } from "react";
import image1 from "../images/drums/mapex-torn.png";
import image2 from "../images/drums/venus.png";
import image3 from "../images/drums/rdpof.png";
import image4 from "../images/drums/sbp2.png";

import { FaShoppingCart } from "react-icons/fa";

export default function Drum() {
    const [hovered1, setHovered1] = useState(false);
    const [hovered2, setHovered2] = useState(false);
    const [hovered3, setHovered3] = useState(false);
    const [hovered4, setHovered4] = useState(false);

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
                            <span>$289.99</span>
                            <button className="bg-white text-gray-800 font-bold py-1 px-2 rounded">
                                <span className="flex items-center"><FaShoppingCart className="mr-2"/>Add to Cart</span>
                            </button>
                        </div>

                    </div>
                    <h1 className="text-center">Mapex Tornado</h1>
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
                            <span>$179.99</span>
                            <button className="bg-white text-gray-800 font-bold py-1 px-2 rounded">
                                <span className="flex items-center"><FaShoppingCart className="mr-2"/>Add to Cart</span>
                            </button>
                        </div>

                    </div>
                    <h1 className="text-center">Mapex~Venus</h1>
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
                    <h1 className="text-center">Yamaha RDPO05</h1>
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
                    <h1 className="text-center">Yamaha~SBP2</h1>
                </div>
                </div>
                <div className="text-center mt-10">
                <div className="w-full text-center">
        <h2 className="text-4xl font-bold mb-4 text-center">More drums coming soon!</h2>

        <p className="text-gray-600">Stay tuned for more exciting drum products!</p>
        </div>
      </div>
                
                </div>
    );
  }