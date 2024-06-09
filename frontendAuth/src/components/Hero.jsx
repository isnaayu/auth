import React from "react";
import { Typography, Input, Button } from "@material-tailwind/react";
import hero from "/img/hero.jpeg"

const Hero = () => {
  const [email, setEmail] = React.useState("");
  const onChange = ({ target }) => setEmail(target.value);
  return (
    <>
      <div id="home"
        className="h-[800px] bg-no-repeat bg-cover pt-48 overflow-hidden flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${hero})`,
          zIndex: -1
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <Typography
          style={{
            textTransform: "uppercase",
            color: "#ffffff",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
            zIndex: 1
          }}
          variant="h1"
          color="blue"
          textGradient
          className="text-center mb-8"
        >
          <span style={{ fontSize: "3rem", fontWeight: 700 }}>Clean</span>{" "}
          <span style={{ fontSize: "5rem", fontWeight: 900 }}>clothes</span>{" "}
          <span style={{ fontSize: "3rem", fontWeight: 700 }}>
            without going out
          </span>
          
        </Typography>
        <Typography color="white" className="text-center text-xl" style={{zIndex: 1}}>
            Struggling to keep up with your laundry? Want to free up your time?
            Dreaming of hassle-free laundry services? <br /> Choose our Laundry
            Services and <span className="font-bold" >#FreshStartNow</span>
          </Typography>
        <div className="flex justify-center gap-6 w-full max-w-screen-md relative z-1">
          <img src="/img/male2.png" className="relative z-1" />
          <div className="flex flex-col">
          </div>
          <img src="/img/woman.png" className="relative z-1" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full">
        <div className="flex justify-center mt-80">
          <Button
              color="blue"
              buttontype="filled"
              className="shadow-lg mr-5"
            >
              Get Started
            </Button>

            <Button
              color="white"
              buttontype="filled"
              className="shadow-lg"
            >
              See More
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
