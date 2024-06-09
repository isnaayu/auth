import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Checkbox,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../services/Auth";
import hero from "/img/hero.jpeg";
import RegisterSchema from "../validator/RegisterSchema";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

const RegisterPages = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    name: "",
    mobilePhone: "",
    address: "",
    showPassword: false,
  });

  const togglePasswordVisibility = () => {
    setUser((prevUser) => ({
      ...prevUser,
      showPassword: !prevUser.showPassword,
    }));
  };

  const [errors, setErrors] = useState({});

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await RegisterSchema.validate(user, { abortEarly: false });

      const response = await register({
        username: user.username,
        password: user.password,
        email: user.email,
        name: user.name,
        mobilePhone: user.mobilePhone,
        address: user.address,
      });
      console.log(response);
      navigate("/login")
    } catch (err) {
      if (err.name === "ValidationError") {
        const newErrors = {};
        err.inner.forEach((e) => {
          newErrors[e.path] = e.message;
        });
        setErrors(newErrors);
      } else {
        console.error(err);
      }
    }
  };

  return (
    <>
      <div
        className="h-[100%] bg-no-repeat bg-cover overflow-hidden items-center justify-center relative"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-3xl z-10"></div>
        <div className="justify-center ml-[15%] mt-7 pb-7">
          <Card className="w-full max-w-[1300px] flex-row relative z-20">
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-3/5 shrink-0 rounded-r-none"
            >
              <img
                src="https://img.freepik.com/free-vector/wash-machine-with-laundry-service-icons_24877-50295.jpg?w=826&t=st=1707155998~exp=1707156598~hmac=943f7d4d16671a03e21594a9ef0d22107fd5997f4b78457039328feeede9c350"
                alt="card-image"
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography
                variant="h4"
                color="blue-gray"
                className="justify-items-center"
              >
                Sign Up
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                Nice to meet you! Enter your details to register. Lets join Us!
              </Typography>
              <form className="mt-8 mb-2 w-[100%] max-w-screen-lg sm:w-[100%]">
                <div className="mb-1 flex flex-col gap-6">
                  <div className="flex items-center gap-2">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Username
                    </Typography>
                    <Typography className="-mb-3 text-red-900">*</Typography>
                    {errors.username && (
                      <Typography
                        variant="small"
                        className="-mb-3 text-red-700"
                      >
                        {errors.username}
                      </Typography>
                    )}
                  </div>
                  <Input
                    size="lg"
                    placeholder="Enter your username"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    onChange={(e) =>
                      setUser((prevData) => ({
                        ...prevData,
                        username: e.target.value,
                      }))
                    }
                  />

                  <div className="flex items-center gap-2">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Email
                    </Typography>
                    <Typography className="-mb-3 text-red-900">*</Typography>
                    {errors.email && (
                      <Typography
                        variant="small"
                        className="-mb-3 text-red-700"
                      >
                        {errors.email}
                      </Typography>
                    )}
                  </div>
                  <Input
                    size="lg"
                    placeholder="Enter Your Email"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    onChange={(e) =>
                      setUser((prevData) => ({
                        ...prevData,
                        email: e.target.value,
                      }))
                    }
                  />

                  <div className="flex items-center gap-2">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Password
                    </Typography>
                    <Typography className="-mb-3 text-red-900">*</Typography>
                    {errors.password && (
                      <Typography
                        variant="small"
                        className="-mb-3 text-red-700"
                      >
                        {errors.password}
                      </Typography>
                    )}
                  </div>
                  <div className="relative">
                    <Input
                      type={user.showPassword ? "text" : "password"}
                      size="lg"
                      placeholder="********"
                      className="!border-t-blue-gray-200 focus:!border-t-gray-900 pr-10"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      containerProps={{
                        className: "min-w-0",
                      }}
                      value={user.password}
                      onChange={(e) =>
                        setUser((prevData) => ({
                          ...prevData,
                          password: e.target.value,
                        }))
                      }
                    />
                    {user.showPassword ? (
                      <EyeSlashIcon
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-blue-gray-500 cursor-pointer"
                        onClick={togglePasswordVisibility}
                      />
                    ) : (
                      <EyeIcon
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-blue-gray-500 cursor-pointer"
                        onClick={togglePasswordVisibility}
                      />
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Full Name
                    </Typography>
                    <Typography className="-mb-3 text-red-900">*</Typography>
                    {errors.name && (
                      <Typography
                        variant="small"
                        className="-mb-3 text-red-700"
                      >
                        {errors.name}
                      </Typography>
                    )}
                  </div>
                  <Input
                    size="lg"
                    placeholder="Enter your fullname"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    onChange={(e) =>
                      setUser((prevData) => ({
                        ...prevData,
                        name: e.target.value,
                      }))
                    }
                  />
                  <div className="flex items-center gap-2">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      mobilePhone
                    </Typography>
                    <Typography className="-mb-3 text-red-900">*</Typography>
                    {errors.mobilePhone && (
                      <Typography
                        variant="small"
                        className="-mb-3 text-red-700"
                      >
                        {errors.mobilePhone}
                      </Typography>
                    )}
                  </div>
                  <Input
                    size="lg"
                    type="tel"
                    placeholder="Enter your mobilePhone"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    value={user.mobilePhone}
                    onChange={(e) => {
                      const input = e.target.value;
                      const sanitizedInput = input.replace(/[^0-9+]/g, "");
                      setUser((prevData) => ({
                        ...prevData,
                        mobilePhone: sanitizedInput,
                      }));
                    }}
                  />
                  <div className="flex items-center gap-2">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Address
                    </Typography>
                    <Typography className="-mb-3 text-red-900">*</Typography>
                    {errors.address && (
                      <Typography
                        variant="small"
                        className="-mb-3 text-red-700"
                      >
                        {errors.address}
                      </Typography>
                    )}
                  </div>
                  <Input
                    size="lg"
                    placeholder="Enter your address"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    onChange={(e) =>
                      setUser((prevData) => ({
                        ...prevData,
                        address: e.target.value,
                      }))
                    }
                  />
                </div>
                <Checkbox
                  label={
                    <Typography
                      variant="small"
                      color="gray"
                      className="flex items-center font-normal"
                    >
                      I agree the
                      <a
                        href="#"
                        className="font-medium transition-colors hover:text-gray-900"
                      >
                        &nbsp;Terms and Conditions
                      </a>
                    </Typography>
                  }
                  containerProps={{ className: "-ml-2.5" }}
                />
                <Button
                  className="mt-6 bg-[#42C2FF]"
                  fullWidth
                  onClick={handleRegister} type="submit"
                >
                  sign up
                </Button>
                <Typography
                  color="gray"
                  className="mt-4 text-center font-normal"
                >
                  Already have an account?{" "}
                  <Link to={"/login"} className="text-[#42C2FF] font-bold">
                    Sign In
                  </Link>
                </Typography>
              </form>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
};

export default RegisterPages;
