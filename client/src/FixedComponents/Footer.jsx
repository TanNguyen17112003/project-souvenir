import React from "react";
import { TbCopyrightFilled } from "react-icons/tb";
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaTwitterSquare,
    FaLinkedin,
    FaTiktok,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { useMemo } from "react";
function Footer() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });
    const center = useMemo(() => {
        return { lat: 10.88081, lng: 106.80534 };
    }, []);
    if (!isLoaded) return "Loading...";
    else {
        return (
            <div className="bg-[#26282b] flex justify-around   py-10 px-0">
                <div className="flex flex-col">
                    <h3 className="uppercase text-white">
                        công ty cổ phần tập đoàn TTV
                    </h3>
                    <span className="text-neutral-50">
                        Trụ sở chính: Số 50 Đường Lê Cao Lãng, Phường Phú Thạnh,{" "}
                        <br /> Quận Tân Phú, Thành phố Hồ Chí Minh
                    </span>
                    <span className="text-neutral-50">
                        GPĐK: 0102721191 cấp ngày 14/07/2023
                    </span>
                    <span className="text-neutral-50">
                        ĐT: 0862898859 Email: duytan17112003@gmail.com
                    </span>
                    <span className="uppercase text-white mt-5">
                        <TbCopyrightFilled className="inline" /> Copyright All
                        rights reserved
                    </span>
                </div>

                <div className="footer-reserved">
                    <h3 className="uppercase text-white">
                        Các kênh thông tin liên lạc
                    </h3>

                    <div className="mt-5 ml-10 flex flex-col gap-y-2 h-(100%-20)">
                        <Link to="https://www.facebook.com/">
                            <FaFacebookSquare
                                size="2rem"
                                color="#fff"
                                className="hover:bg-indigo-600 hover:text-white"
                            />
                        </Link>
                        <Link to="https://www.instagram.com/">
                            <FaInstagramSquare
                                size="2rem"
                                color="#fff"
                                className="hover:bg-indigo-600 hover:text-white"
                            />
                        </Link>
                        <Link to="https://www.tiktok.com/vi-VN/">
                            <FaTiktok
                                size="2rem"
                                color="#fff"
                                className="hover:bg-indigo-600 hover:text-white"
                            />
                        </Link>
                        <Link to="https://twitter.com/home">
                            <FaTwitterSquare
                                size="2rem"
                                color="#fff"
                                className="hover:bg-indigo-600 hover:text-white"
                            />
                        </Link>
                        <Link to="https://www.linkedin.com/feed/">
                            <FaLinkedin
                                size="2rem"
                                color="#fff"
                                className="hover:bg-indigo-600 hover:text-white"
                            />
                        </Link>
                    </div>
                </div>
                <div className="map-container w-1/3 h-(100%-20) rounded-md overflow-hidden">
                    <GoogleMap
                        mapContainerStyle={{ width: "100%", height: "100%" }}
                        center={center}
                        zoom={15}
                    >
                        <MarkerF position={center} />
                    </GoogleMap>
                </div>
            </div>
        );
    }
}

export default Footer;
