import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
    Typography
  } from "@material-tailwind/react";

  function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    );
  }

const Question = () => {
    const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <>
      <div id="Questions" className="bg-white flex rounded-t-[65px] -mt-11 relative z-20 mb-20">
        
        <div className="flex justify-center  w-full mt-7">
          <div className="w-[30%] p-4 text-justify mr-2 align-top">
          <Typography
              className="text-2xl mb-2 font-bold text-[#42C2FF] items-start"
              style={{ textTransform: "uppercase" }}
            >
              popular question
            </Typography>
            <img src="https://img.freepik.com/free-vector/organic-flat-people-asking-questions-illustration_23-2148906283.jpg?w=826&t=st=1707294175~exp=1707294775~hmac=0e19886e1b99940c5ff74cdafdaa994895b5e4db5fbdebba86ee078eb4988d51" alt="" />
          </div>
          <div className="w-[50%] p-4 text-justify mr-2">
          <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(1)}>Can you pick up and drop off?</AccordionHeader>
            <AccordionBody>
            Of course, we have a pick-up and drop-off service so you don't have to walk to our shop. Let us come to you!
            </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(2)}>
            Is it open 24 hours??
            </AccordionHeader>
            <AccordionBody>
            Of course, we are open 24 hours without holidays
            </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(3)}>
            Can I monitor the progress of my laundry?
            </AccordionHeader>
            <AccordionBody>
            Of course, because we have the K-Loun application which can monitor the status of your laundry. starting from being picked up, arriving at the shop, washed, dried, ironed, folded, wrapped and ready to be delivered to your house, so you can check it.
            </AccordionBody>
        </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
