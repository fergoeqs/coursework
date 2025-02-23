import React from "react";
import useBodyMap from "../UseBodyMap";

const CatBodyMap = ({ onMark, initialMarker, readOnly = false }) => {
    const { selectedPart, clickPoint, handleClick } = useBodyMap(onMark, initialMarker);



    return (
        <svg viewBox="0 0 500 500" width="500" height="500" style={{ pointerEvents: readOnly ? "none" : "auto" }}>
            <path
                d="m 144.01414,136.16528 -9.35444,-24.94519 -10.60171,12.47259 -6.85992,11.84897 -4.98904,15.59074 -3.11815,9.35445 50.51401,32.42874 16.838,-0.62363 9.97807,-11.84896 3.11815,-4.36541 -6.23629,-8.10719 -4.36541,-3.11815 -2.49452,-11.22533 -8.73082,-7.48356 -7.48355,-3.11815 4.98903,-22.45067 z"
                fill={selectedPart === "HEAD" ? "red" : "black"}
                onClick={(e) => handleClick(e, "HEAD")}
                style={{ cursor: "pointer" }}
            />
            <path
                d="m 108.46726,161.00347 -5.61267,20.57978 -1.87089,18.08526 -0.62364,13.09622 56.12669,-9.97807 -1.87089,-3.74178 4.36541,-4.98904 z"
                fill={selectedPart === "NECK" ? "red" : "black"}
                onClick={(e) => handleClick(e, "NECK")}
                style={{ cursor: "pointer" }}
            />
            <path
                d="m 100.9302,213.90499 -2.494522,15.90256 1.870892,14.96712 8.419,23.69792 7.48356,13.40804 5.30085,5.61267 10.28989,5.30085 18.70889,4.0536 15.59074,3.74178 53.00853,-9.35445 -31.4933,-84.19001 -17.77345,4.05359 h -4.98904 l -5.92448,-4.05359 -1.87089,-3.11815 z"
                fill={selectedPart === "CHEST" ? "red" : "black"}
                onClick={(e) => handleClick(e, "CHEST")}
                style={{ cursor: "pointer" }}
            />
            <path
                d="m 188.95685,207.03673 14.5521,-5.95313 15.87502,-4.18924 17.19794,-3.52779 16.31599,-1.5434 22.04864,0.44097 14.11113,1.32292 -12.12675,92.60429 -7.27605,-0.66146 -13.0087,0.66146 -14.5521,1.5434 -17.8594,2.86633 -3.74827,0.66146 z"
                fill={selectedPart === "STOMACH" ? "red" : "black"}
                onClick={(e) => handleClick(e, "STOMACH")}
                style={{ cursor: "pointer" }}
            />
            <path
                d="m 290.38059,193.14609 16.53648,2.20486 17.19794,3.52778 13.89064,6.6146 8.37849,6.61459 17.8594,17.8594 3.30729,4.40973 5.29168,12.78821 2.86632,11.68578 1.10243,11.90626 -96.79353,15.87502 -1.76389,-0.44097 z"
                fill={selectedPart === "REAR" ? "red" : "black"}
                onClick={(e) => handleClick(e, "REAR")}
                style={{ cursor: "pointer" }}
            />
            <path
                d="m 345.94316,210.12354 9.26043,-1.98438 16.09551,-6.61459 9.48092,-5.95313 9.03994,-7.49654 3.96875,-6.3941 2.64584,-9.70141 1.76389,-12.34723 0.66146,-14.11113 1.10243,-10.58335 4.40973,-14.99308 7.93751,-12.78821 7.05557,-7.276051 7.71702,-5.291672 7.05557,-4.409728 8.81945,-3.527783 4.8507,-0.661459 1.54341,1.984378 0.22048,3.307296 -2.86632,3.748269 -9.26043,6.39411 -9.48091,6.3941 -4.63022,5.73265 -3.52778,5.29167 -3.74827,8.59897 -1.76389,7.05557 -1.32292,9.92188 -0.44097,10.58335 0.22048,9.03994 -1.10243,10.58335 -1.32292,9.03994 -3.30729,10.58335 -7.05557,10.80384 -7.71702,7.27605 -8.81946,6.17362 -9.48091,5.51216 -9.48092,4.18924 z"
                fill={selectedPart === "TAIL" ? "red" : "black"}
                onClick={(e) => handleClick(e, "TAIL")}
                style={{ cursor: "pointer" }}
            />
            <path
                d="m 124.13384,291.04205 8.81946,8.158 3.08681,2.64583 4.40972,6.6146 1.7639,9.92188 1.10243,15.21357 -0.66146,14.33161 -2.20487,9.26043 -5.51216,22.7101 -3.0868,5.73265 -4.18925,2.64583 -6.3941,2.20487 -1.32292,2.86632 0.44097,2.64584 2.86633,1.98437 20.06426,-1.32291 0.66146,-4.18925 3.74827,-9.7014 3.74827,-5.51216 2.64583,-11.68578 6.39411,-14.33161 9.48091,-19.18232 9.48092,-15.87502 3.96875,-4.40973 9.48092,5.95313 5.73265,5.07119 7.71702,11.24481 8.59897,15.87502 6.3941,14.11113 2.20487,12.56772 0.88194,11.02432 -1.76389,4.18925 -4.63021,1.32291 -1.76389,1.32292 -0.88195,3.3073 1.54341,2.20486 18.96183,0.44098 1.98437,-2.42536 v -9.26042 l 0.66146,-12.34724 1.10244,-5.95314 -3.74827,-7.05556 -1.54341,-5.73265 -0.88194,-8.59897 -1.10244,-10.80383 -1.32291,-11.24481 -1.76389,-11.90626 -1.32292,-6.83508 -5.95314,-10.14238 -2.86632,-5.29167 -51.37333,9.26043 -27.11983,-5.73265 -10.14237,-2.42535 z"
                fill={selectedPart === "LEG" ? "red" : "black"}
                onClick={(e) => handleClick(e, "LEG")}
                style={{ cursor: "pointer" }}
            />
            <path
                d="m 279.35627,288.17574 1.54341,13.22918 3.08681,18.96183 3.30729,12.34724 5.29168,13.44967 1.32291,3.52778 -0.44097,5.95314 -5.51216,11.68577 -11.90626,16.75697 -4.18925,4.40973 -2.86632,1.32292 -4.40973,0.88194 -1.98438,2.86633 0.66146,2.86632 3.3073,1.32292 17.63891,-0.44097 3.3073,-3.52779 14.77259,-22.93058 8.59897,-10.80384 3.30729,-3.08681 1.10244,-2.86632 -1.10244,-14.99307 1.98438,-7.49654 9.26043,-18.74135 6.39411,-10.80383 0.44097,-0.66146 1.5434,3.3073 4.40973,6.17362 9.03994,10.14237 7.93751,7.93751 7.49654,5.73265 7.71703,4.18924 11.2448,8.37848 4.18924,4.63022 1.76389,9.03994 1.54341,15.21356 -0.44097,9.7014 -1.98438,1.98438 h -3.74827 l -3.96875,3.08681 v 2.20486 l 1.5434,2.20487 3.96876,0.66146 7.93751,0.66146 8.37848,-0.88195 1.98438,-0.44097 1.98437,-3.3073 0.22049,-2.42535 -0.66146,-15.43405 -0.22048,-15.65453 0.88194,-14.77259 1.32292,-6.39411 -1.10243,-3.74826 -3.3073,-2.64584 -4.8507,-3.74827 -4.40973,-4.18924 -6.17362,-9.48092 -3.52778,-9.48091 -2.20486,-8.59897 -1.76389,-7.93751 -1.54341,-9.03995 -0.88195,-6.61459 z"
                fill={selectedPart === "LEG" ? "red" : "black"}
                onClick={(e) => handleClick(e, "LEG")}
                style={{ cursor: "pointer" }} />

            {clickPoint && (
                <circle cx={clickPoint.x} cy={clickPoint.y} r="5" fill="blue" />
            )}
        </svg>
    );
};

export default CatBodyMap;
