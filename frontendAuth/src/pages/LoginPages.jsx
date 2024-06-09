import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Input,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAuthenticate, setPassword, setUsername } from "../store/reducers/usersSlice";
import { login } from "../services/Auth";
import hero from "/img/hero.jpeg"
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import AlertCustomCloseIcon from "../components/AlertCustom";


const LoginPages = () => {
  const dispatch = useDispatch()
  const username = useSelector((state)=> state.users.username)
  const password = useSelector((state)=> state.users.password)
  const [user, setUser] = useState({
    showPassword: false,
  })
  const [showAlert, setShowAlert] = useState(false);

  const togglePasswordVisibility = () => {
    setUser((prevUser) => ({
      ...prevUser,
      showPassword: !prevUser.showPassword,
    }));
  };
  const navigate = useNavigate()


  const handleLogin = async(e) => {
    e.preventDefault();
    try{
      const response = await login({
        username: username,
        password: password
      })
      dispatch(setAuthenticate(true))
      localStorage.setItem('authenticate', true)
      localStorage.setItem('token', response.data.data.token)
      navigate('/dashboard');
    }catch(e){
      console.log(e)
      setShowAlert(true);
    }
  }

  return (
    <>
      <div className="min-h-screen bg-no-repeat bg-cover overflow-hidden items-center justify-center relative"
        style={{
          backgroundImage: `url(${hero})`,
          
        }}>
          <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-3xl z-10"></div>
        <div className="justify-center mx-[35%] my-48 relative z-20" >
          <Card className="max-w-[800px] min-h-[500px] shadow-lg">
            <CardHeader
              variant="gradient"
              // color="#FFFFFF"
              className="mb-4 grid h-28 place-items-center bg-[#42C2FF]"
            >
              <Typography variant="h3" color="white">
                Login
              </Typography>
            </CardHeader>
            
            <CardBody className="flex flex-col gap-4">
            {showAlert && <AlertCustomCloseIcon />}
            <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Username 
            </Typography>
            <Input
                size="lg"
                value={username}
                placeholder="Enter your username"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                className: "before:content-none after:content-none",
                }}
                onChange={(e)=> dispatch(setUsername(e.target.value))}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Password 
            </Typography>
            <div className="relative">
            <Input
              type={user.showPassword ? 'text' : 'password'}
              size="lg"
              placeholder="********"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900 pr-10" // Menggunakan pr-10 untuk memberi ruang di sebelah kanan input
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              containerProps={{
                className: "min-w-0",
              }}
              value={password}
              onChange={(e)=> dispatch(setPassword(e.target.value))}
            />
            {user.showPassword ? (
              <EyeSlashIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-blue-gray-500 cursor-pointer" onClick={togglePasswordVisibility} />
            ) : (
              <EyeIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-blue-gray-500 cursor-pointer" onClick={togglePasswordVisibility} />
            )}
          </div>
              {/* <div className="-ml-2.5">
                <Checkbox label="Remember Me" />
              </div> */}
            </CardBody>
            <CardFooter className="pt-0">
              <Button fullWidth className="bg-[#42C2FF]" onClick={handleLogin}>
                Login
              </Button>
              <Typography variant="small" className="mt-6 flex justify-center">
                Don&apos;t have an account?
                <Link to={"/register"} variant="small"
                  style={{color: "#42C2FF"}}
                  className="ml-1 font-bold" >Sign up</Link>
              </Typography>
            </CardFooter>
          </Card>
          
        </div>
      </div>
    </>
  );
};

export default LoginPages;
