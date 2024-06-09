import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";

import { fetchServices } from "../store/reducers/servicesSlice";
import { useDispatch, useSelector } from "react-redux";
import { formatPrice } from "../utils/Number";


function CheckIcon() {
  
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-3 w-3"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l6 6 9-13.5"
        />
      </svg>
    );
  }

const Service = () => {
    const layanans = useSelector((state)=>state.services.services)
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(fetchServices())
    },[dispatch])
  return (
    <>
      <div id="Services" className="bg-blue-gray-50 rounded-t-[65px] -mt-11 relative z-20 mb-20 pt-2 pb-16">
        <div className="flex justify-center items-center w-full mt-7"> 
          <div className="w-[40%] p-4 text-justify mr-2">
            <Typography
              className="text-2xl mb-2 font-bold text-[#42C2FF]"
              style={{ textTransform: "uppercase" }}
            >
              our Service
            </Typography>
          </div>
          <div className="w-[40%] p-4 text-justify mr-2"></div>
        </div>
        <div className="flex overflow-scroll">
            <Marquee>
                {layanans && layanans.map((layanan)=>(
            <div className="mr-4 mt-4" key={layanan.id}>
            <Card color="gray" variant="gradient" className="w-full max-w-[20rem] p-8">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
            >
                <Typography
                variant="small"
                color="white"
                className="font-normal uppercase"
                >
                {layanan.name}
                </Typography>
                <Typography
                variant="h1"
                color="white"
                className="mt-6 text-7xl font-normal"
                >
                <span className="mt-2 text-4xl">Rp. {formatPrice(String(layanan.price))}</span>
                <br />
                <span className="self-end text-4xl">/{layanan.duration} Hours</span>
                </Typography>
            </CardHeader>
          
            <CardFooter className="mt-2 p-0">
                <Button
                size="lg"
                color="white"
                className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
                ripple={false}
                fullWidth={true}
                >
                Order Now
                </Button>
            </CardFooter>
            </Card>
            </div>
                ))}
            
           
            
           
            
            
            </Marquee>
        </div>
      </div>
    </>
  );
};

export default Service;
