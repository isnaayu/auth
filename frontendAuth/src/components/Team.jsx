import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";
import React from "react";

const Team = () => {
  return (
    <>
      <div className="bg-[#EFFFFD] rounded-t-[65px] -mt-11 relative z-20 pt-2 pb-16">
        <div className="flex justify-center w-full mt-7">
          <div className="w-[30%] p-4 text-justify mr-2 align-top">
            <Typography
              className="text-2xl font-bold text-[#42C2FF] items-start"
              style={{ textTransform: "uppercase" }}
            >
              Developer Team
            </Typography>
          </div>
          <div className="w-[50%] p-4 text-justify mr-2"></div>
        </div>
        <div className="flex justify-center w-full">
          <div className="w-[80%] p-4 text-justify mr-2 flex flex-wrap justify-center">
            <div className="mr-6 mt-4">
            <Card className="w-96">
                <CardHeader floated={false} className="h-80">
                    <img src="img/fikron.jpg" alt="profile-picture" />
                </CardHeader>
                <CardBody className="text-center">
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                    Ahmad Fikron Huda
                    </Typography>
                    <Typography color="blue-gray" className="font-medium" textGradient>
                    Software Engineer
                    </Typography>
                </CardBody>
                <CardFooter className="flex justify-center gap-7 pt-2">
                    <Tooltip content="Like">
                    <Typography
                        as="a"
                        href="https://github.com/akhfih"
                        variant="lead"
                        color="blue"
                        textGradient
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        fill="currentColor"
                        style={{color: '#333'}}
                        viewBox="0 0 24 24">
                        <path
                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </Typography>
                    </Tooltip>
                    <Tooltip content="Follow">
                    <Typography
                        as="a"
                        href="https://id.linkedin.com/in/akhfih"
                        variant="lead"
                        color="light-blue"
                        textGradient
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        fill="currentColor"
                        style={{color: '#0077b5'}}
                        viewBox="0 0 24 24">
                        <path
                            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                    </Typography>
                    </Tooltip>
       
                </CardFooter>
                </Card>
            </div>
            <div className="mr-6 mt-4 ">
            <Card className="w-96 transition duration-150 ease-in-out">
                <CardHeader floated={false} className="h-80">
                    <img src="img/fabian.jpg" alt="profile-picture" />
                </CardHeader>
                <CardBody className="text-center">
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                    Fabian Andre Fajar H.
                    </Typography>
                    <Typography color="blue-gray" className="font-medium" textGradient>
                    Software Engineer
                    </Typography>
                </CardBody>
                <CardFooter className="flex justify-center gap-7 pt-2">
                    <Tooltip content="Follow">
                    <Typography
                        as="a"
                        href="https://github.com/Andre1821"
                        variant="lead"
                        color="blue"
                        textGradient
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        fill="currentColor"
                        style={{color: '#333'}}
                        viewBox="0 0 24 24">
                        <path
                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </Typography>
                    </Tooltip>
                    <Tooltip content="Follow">
                    <Typography
                        as="a"
                        href="https://www.linkedin.com/in/fabianandre/"
                        variant="lead"
                        color="light-blue"
                        textGradient
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        fill="currentColor"
                        style={{color: '#0077b5'}}
                        viewBox="0 0 24 24">
                        <path
                            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                    </Typography>
                    </Tooltip>
                </CardFooter>
                </Card>
            </div>
            <div className="mr-6 mt-4">
            <Card className="w-96">
                <CardHeader floated={false} className="h-80">
                    <img src="img/isna.jpg" alt="profile-picture" />
                </CardHeader>
                <CardBody className="text-center">
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                    Isna Ayu Muarofah
                    </Typography>
                    <Typography color="blue-gray" className="font-medium" textGradient>
                    Software Engineer
                    </Typography>
                </CardBody>
                <CardFooter className="flex justify-center gap-7 pt-2">
                    <Tooltip content="Follow">
                    <Typography
                        as="a"
                        href="https://github.com/isnaayu"
                        variant="lead"
                        color="blue"
                        textGradient
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        fill="currentColor"
                        style={{color: '#333'}}
                        viewBox="0 0 24 24">
                        <path
                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </Typography>
                    </Tooltip>
                    <Tooltip content="Follow">
                    <Typography
                        as="a"
                        href="https://www.linkedin.com/in/isna-ayu-m/"
                        variant="lead"
                        color="light-blue"
                        textGradient
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        fill="currentColor"
                        style={{color: '#0077b5'}}
                        viewBox="0 0 24 24">
                        <path
                            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                    </Typography>
                    </Tooltip>
                </CardFooter>
                </Card>
            </div>
            <div className="mr-6 mt-4">
            <Card className="w-96">
                <CardHeader floated={false} className="h-80">
                    <img src="img/yazid.jpg" alt="profile-picture" />
                </CardHeader>
                <CardBody className="text-center">
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                    Irfaan Yaziid
                    </Typography>
                    <Typography color="blue-gray" className="font-medium" textGradient>
                    Software Engineer
                    </Typography>
                </CardBody>
                <CardFooter className="flex justify-center gap-7 pt-2">
                    <Tooltip content="Follow">
                    <Typography
                        as="a"
                        href="https://github.com/irfanyazid-13032000"
                        variant="lead"
                        color="blue"
                        textGradient
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        fill="currentColor"
                        style={{color: '#333'}}
                        viewBox="0 0 24 24">
                        <path
                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </Typography>
                    </Tooltip>
                    <Tooltip content="Follow">
                    <Typography
                        as="a"
                        href="https://www.linkedin.com/in/irfan-yazid-41b9b8258/"
                        variant="lead"
                        color="light-blue"
                        textGradient
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        fill="currentColor"
                        style={{color: '#0077b5'}}
                        viewBox="0 0 24 24">
                        <path
                            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                    </Typography>
                    </Tooltip>
                </CardFooter>
                </Card>
            </div>
            <div className="mr-6 mt-4">
            <Card className="w-96">
                <CardHeader floated={false} className="h-80">
                    <img src="img/ibnu.jpg" alt="profile-picture" />
                </CardHeader>
                <CardBody className="text-center">
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                    M. Ibnu Assayyis
                    </Typography>
                    <Typography color="blue-gray" className="font-medium" textGradient>
                    Software Engineer
                    </Typography>
                </CardBody>
                <CardFooter className="flex justify-center gap-7 pt-2">
                    <Tooltip content="Like">
                    <Typography
                        as="a"
                        href="https://github.com/assayyis"
                        variant="lead"
                        color="blue"
                        textGradient
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        fill="currentColor"
                        style={{color: '#333'}}
                        viewBox="0 0 24 24">
                        <path
                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </Typography>
                    </Tooltip>
                    <Tooltip content="Follow">
                    <Typography
                        as="a"
                        href="https://www.linkedin.com/in/moh-ibnu-assayyis-250b33130/"
                        variant="lead"
                        color="light-blue"
                        textGradient
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        fill="currentColor"
                        style={{color: '#0077b5'}}
                        viewBox="0 0 24 24">
                        <path
                            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                    </Typography>
                    </Tooltip>

                </CardFooter>
                </Card>
            </div>
            <div className="mr-6 mt-4">
            <Card className="w-96">
                <CardHeader floated={false} className="h-80">
                    <img src="img/sendy.png" alt="profile-picture" />
                </CardHeader>
                <CardBody className="text-center">
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                    Shendy Setiawan
                    </Typography>
                    <Typography color="blue-gray" className="font-medium" textGradient>
                    Software Engineer
                    </Typography>
                </CardBody>
                <CardFooter className="flex justify-center gap-7 pt-2">
                    <Tooltip content="Like">
                    <Typography
                        as="a"
                        href="https://github.com/shendy234"
                        variant="lead"
                        color="blue"
                        textGradient
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        fill="currentColor"
                        style={{color: '#333'}}
                        viewBox="0 0 24 24">
                        <path
                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </Typography>
                    </Tooltip>
                    <Tooltip content="Follow">
                    <Typography
                        as="a"
                        href="https://www.linkedin.com/in/shendy-setiawan/"
                        variant="lead"
                        color="light-blue"
                        textGradient
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        fill="currentColor"
                        style={{color: '#0077b5'}}
                        viewBox="0 0 24 24">
                        <path
                            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                    </Typography>
                    </Tooltip>
             
                </CardFooter>
                </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
