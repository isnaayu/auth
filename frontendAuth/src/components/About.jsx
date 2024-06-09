import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";
import {
  HomeIcon,
  BellIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";


const About = () => {
  return (
    <>
      <div id="AboutUs" className="bg-white flex rounded-t-[65px] -mt-11 relative z-20 mb-20">
        <div className="flex justify-center items-center w-full mt-7">
          <div className="w-[40%] p-4 text-justify mr-2">
            <Typography
              className="text-2xl mb-2 font-bold text-[#42C2FF]"
              style={{ textTransform: "uppercase" }}
            >
              About K-Loun
            </Typography>
            <p className="text-gray-700">
              Introducing K-Loun, your ultimate online laundry service solution.
              Say goodbye to wasting time stepping out of your home – with just
              one click, your laundry dilemmas are sorted. Spend your time
              unwinding or enjoying quality moments with your loved ones, while
              we take care of the rest
            </p>
            <div>
              <img
                src="https://img.freepik.com/free-vector/laundromat-cartoon-illustration-with-people-using-laundry-iron-service-washing-machines-background_1284-65157.jpg?w=1380&t=st=1707283640~exp=1707284240~hmac=11b23f332f71b8091dca05eec7d7142d374eb4def05136896780dd77e03b2173"
                alt=""
              />
            </div>
          </div>
          <div className="w-[40%] p-4 bg-[#EFFFFD] rounded-2xl">
            <Typography className="text-2xl mb-2 font-bold text-[#42C2FF]">
              How it works?
            </Typography>
            <div className="">
              <Timeline>
                <TimelineItem>
                  <TimelineConnector />
                  <TimelineHeader>
                    <TimelineIcon className="p-2 bg-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>

                    </TimelineIcon>
                    <Typography variant="h5" color="blue-gray">
                      Clik Your Device
                    </Typography>
                  </TimelineHeader>
                  <TimelineBody className="pb-8">
                    <Typography
                      color="gray"
                      className="font-normal text-gray-600"
                    >
                      Wait until our officers pick up your laundry
                    </Typography>
                  </TimelineBody>
                </TimelineItem>
                <TimelineItem>
                  <TimelineConnector />
                  <TimelineHeader>
                    <TimelineIcon className="p-2 bg-green-600">
                    <svg fill="#000000" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <title/>
  <g id="Layer_2">
    <path d="M17,2H14.62l-.29.46a2.75,2.75,0,0,1-4.65,0L9.38,2H7A5,5,0,0,0,2,7v5H6V22H18V12h4V7A5,5,0,0,0,17,2Zm3,8H18V7H16V20H8V7H6v3H4V7A3,3,0,0,1,7,4H8.32a4.75,4.75,0,0,0,7.36,0H17a3,3,0,0,1,3,3Z" stroke="#ffffff"/>
  </g>
</svg>


                    </TimelineIcon>
                    <Typography variant="h5" color="blue-gray">
                      Pick Up Your Laundry
                    </Typography>
                  </TimelineHeader>
                  <TimelineBody className="pb-8">
                    <Typography
                      color="gray"
                      className="font-normal text-gray-600"
                    >
                     Your clothes will be taken gently by our officers
                    </Typography>
                  </TimelineBody>
                </TimelineItem>
                <TimelineItem>
                  <TimelineConnector />
                  <TimelineHeader>
                    <TimelineIcon className="p-2 bg-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                    </svg>

                    </TimelineIcon>
                    <Typography variant="h5" color="blue-gray">
                      Monitor Your Laundry Progress
                    </Typography>
                  </TimelineHeader>
                  <TimelineBody className="pb-8">
                    <Typography
                      color="gray"
                      className="font-normal text-gray-600"
                    >
                    You can check your laundry whether it is being washed, ironed or packed
                    </Typography>
                  </TimelineBody>
                </TimelineItem>
                <TimelineItem>
                  <TimelineHeader>
                    <TimelineIcon className="p-2 bg-green-600">
                      <svg width="24px" height="24px" viewBox="0 -0.5 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="si-glyph si-glyph-door">
                      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">

                      <g transform="translate(4.000000, 0.000000)" fill="#434343">

                      <path d="M0.083,0.041 L7.042,2.708 L7.042,14.792 L0.333,13.083 L0.125,13.917 L7.928,15.917 L7.928,13.875 L9.896,13.874 L9.896,0.041 L0.083,0.041 Z" className="si-glyph-fill">

                      </path>

                      <rect x="5" y="8" width="0.875" height="0.875" className="si-glyph-fill">

                      </rect>

                      </g>

                      </g>

                      </svg>
                    </TimelineIcon>
                    <Typography variant="h5" color="blue-gray">
                    Pick up your clothes right in front of the door
                    </Typography>
                  </TimelineHeader>
                  <TimelineBody>
                    <Typography
                      color="gray"
                      className="font-normal text-gray-600"
                    >
                     Our staff will deliver the laundry at your doorstep so you don't have to move around too much, you can get clean clothes while you're lazing around all day!
                    </Typography>
                  </TimelineBody>
                </TimelineItem>
              </Timeline>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
