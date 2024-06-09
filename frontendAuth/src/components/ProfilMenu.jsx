import React, { useEffect, useState } from "react";
import {
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  Dialog,
  DialogHeader,
  DialogBody,
  Input,
  DialogFooter,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  ChevronDownIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setAuthenticate,
  setUserLogin,
  updateAdminById,
} from "../store/reducers/usersSlice";
import { updateAdmin } from "../services/AdminService";
import { CustomSpinner } from "./CustomSpiner";


function ProfileMenu({ profile, image }) {
  const [isLoading, setIsLoading] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(!open);
    if (!open) {
      setProfileImage(null); 
    }
  };
  const [profileImage, setProfileImage] = useState(null);
  const handleProfileImageChange = (e) => {
    const imageFile = e.target.files[0];
    setProfileImage(imageFile);
  };

  const imageUser = localStorage.getItem('profileImg');

  const username = localStorage.getItem('username')
  const [user, setUser] = useState({
    id: profile.id,
    username: username,
    email: profile.email,
    name: profile.name,
    phone: profile.phone,
    address: profile.address,
    profileImage: profileImage,
  });
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      setOpen(false);
      setIsLoading(true);
      
      const formData = new FormData();
      formData.append("id", user.id);
      formData.append("username", user.username);
      formData.append("email", user.email);
      formData.append("name", user.name);
      formData.append("phone", user.phone);
      formData.append("address", user.address);
      formData.append("image", profileImage);
      const res = await updateAdmin(formData);
      dispatch(updateAdminById(res));
      dispatch(setUserLogin(res.data.data));
      
      navigate("/dashboard");
      console.log(res);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false); 
    }
  };

  const handleLogOut = () => {
    dispatch(setAuthenticate(false));
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
{isLoading && (
  <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
    <div className="absolute top-0 left-0 w-full h-full bg-white opacity-45 backdrop-filter backdrop-blur-lg"></div>
    <CustomSpinner />
  </div>
)}
      <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
        <MenuHandler>
          <Button
            variant="text"
            color="blue-gray"
            className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5"
          >
            <Avatar
              variant="circular"
              size="xl"
              alt="tania andrew"
              className="border border-gray-900 p-0.5"
              src={imageUser}
            />
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`h-3 w-3 transition-transform ${
                isMenuOpen ? "rotate-180" : ""
              }`}
            />
          </Button>
        </MenuHandler>
        <MenuList className="p-1">
          <MenuItem
            onClick={handleOpen}
            className="flex items-center gap-2 rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
          >
            <UserCircleIcon className="h-4 w-4" strokeWidth={2} />
            <Typography as="span" variant="small" className="font-normal">
              Profile
            </Typography>
          </MenuItem>
          <MenuItem
            onClick={handleLogOut}
            className="flex items-center gap-2 rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
          >
            <PowerIcon className="h-4 w-4 text-red-500" strokeWidth={2} />
            <Typography
              as="span"
              variant="small"
              className="font-normal text-red-500"
            >
              Sign Out
            </Typography>
          </MenuItem>
        </MenuList>
      </Menu>

      <Dialog open={open} size="xs" handler={handleOpen}>
        <div className="flex items-center justify-between">
          <DialogHeader className="flex flex-col items-start">
            {" "}
            <Typography className="mb-1" variant="h4">
              Update Profile
            </Typography>
          </DialogHeader>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5"
            onClick={handleOpen}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <DialogBody>
          <Typography className="mb-10 -mt-7 " color="gray" variant="lead">
            Update your and then click button.
          </Typography>
          <div className="grid gap-6">
            <div className="relative my-6">
              <Avatar
                variant="circular"
                size="xxl"
                alt="tania andrew"
                className="border border-gray-900 p-0.5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                src={profileImage ? URL.createObjectURL(profileImage) : imageUser}
              />
            </div>
            <Typography className="mt-4 text-center text-blue-800" variant="h6">
              <label htmlFor="uploadFile1">
                Change Photo Profile
                <input
                  type="file"
                  id="uploadFile1"
                  className="hidden"
                  onChange={handleProfileImageChange}
                />
              </label>
            </Typography>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <Typography  color="blue-gray" variant="h6">
                  Username
                </Typography>
                <Input label="username" value={user.username} onChange={(e)=> setUser((prevData)=> ({...prevData, username: e.target.value}))} />
              </div>
              <div>
                <Typography  color="blue-gray" variant="h6">
                  Full name
                </Typography>
                <Input label="fullname" value={user.name} onChange={(e)=> setUser((prevData)=> ({...prevData, name: e.target.value}))} />
              </div>
              <div>
                <Typography color="blue-gray" variant="h6">
                  Email
                </Typography>
                <Input label="email" value={user.email} onChange={(e)=> setUser((prevData)=> ({...prevData, email: e.target.value}))} />
              </div>
              <div>
                <Typography  color="blue-gray" variant="h6" >
                  Phone
                </Typography>
                <Input label="phone" value={user.phone} onChange={(e)=> setUser((prevData)=> ({...prevData, phone: e.target.value}))} />
              </div>
              <div>
                <Typography  color="blue-gray" variant="h6">
                  Address
                </Typography>
                <Input label="address" value={user.address} onChange={(e)=> setUser((prevData)=> ({...prevData, address: e.target.value}))} />
              </div>
            </div>
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="gray" onClick={handleOpen}>
            cancel
          </Button>
          <Button
            type="submit"
            variant="gradient"
            color="gray"
            onClick={handleUpdateProfile}
          >
            Update
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export function Profile({ profil, image }) {

  React.useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960);
  }, []);

  return (
    <>
      <ProfileMenu profile={profil} image={image} />
    </>
  );
}
