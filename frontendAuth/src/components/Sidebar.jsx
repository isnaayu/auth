import cursor from '/img/control.png'
import logo from '/img/logo-k-loun-biru.png'
import chartfill from '/img/Chart_fill.png'
import setting from '/img/Setting.png'
import user from '/img/User.png'
import kloun from '/img/k-loun-favicon-biru.png'
import home from '/img/home.png'
import { Link,Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { Profile } from './ProfilMenu'
import { jwtDecode } from 'jwt-decode'
import { useDispatch, useSelector } from 'react-redux'
import { getUserByCredentialId } from '../services/UserService'
import { setUserLogin } from '../store/reducers/usersSlice'
import { Typography } from '@material-tailwind/react'
export default function Sidebar() {
  const [open,setOpen] = useState(true)
  const dispatch = useDispatch()
  const MenusSuperadmin = [
    {title:"Dashboard",src:chartfill,link:'/dashboard'},
    {title:"Home",src:chartfill,link:'/'},
    {title:"Service",src:setting,link:'/service'},
    {title:"Admin",src:user,link:'/admin'},
    {title:"Customer",src:user,link:'/customer'},
    {title:"Transaction",src:kloun,gap:true,link:'/history'},
  ]

  const MenusAdmin = [
    {title:"Dashboard",src:chartfill,link:'/dashboard'},
    {title:"Home",src:chartfill,link:'/'},
    {title:"Customer",src:user,link:'/customer'},
    {title:"Transaction",src:kloun,gap:true,link:'/history'},
    
  ]

  const MenusCustomer = [
    {title:"Dashboard",src:chartfill,link:'/dashboard'},
    {title:"Home",src:chartfill,link:'/'},
    {title:"Transaction",src:kloun,gap:true,link:'/customerTrx'},
    
  ]

  const userLogin = useSelector((state)=> state.users.userLogin)

  const token = localStorage.getItem('token');
  const userlog = jwtDecode(token)
  console.log(userlog.sub)
  console.log(userLogin)
  useEffect(()=> {
    const fetchUser = async() => {
      try {
        const response = await getUserByCredentialId(userlog.sub)
        // console.log(response)
        if(response.data.data.imageProfile == null){
          localStorage.setItem('profileImg', "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80")
        }else{
        localStorage.setItem('profileImg', response.data.data.imageProfile.url)
        }
        localStorage.setItem('username', response.data.data.userCredential.username)
        dispatch(setUserLogin(response.data.data))
      } catch (error) {
        console.log(error)
      }
    }
    fetchUser()
  }, [dispatch])
  // console.log(userLogin)

  return (
    <div className="flex flex-col h-screen">
      <div className={` ${open ? 'w-72' : 'w-20'} duration-300 h-screen p-5 pt-8 bg-[#081A51] relative`}>
        <img src={cursor} className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-dark-purple ${!open && "rotate-180"}`} onClick={() => { setOpen(!open) }} />
        <div className='flex gap-x-4 items-center'>
          <img src={logo} className={`cursor-pointer duration-500 ${open && "rotate-[720deg]"}`} />
        </div>
        <ul className='pt-6 flex-grow'>
        {userlog.role === "ROLE_ADMIN" && (
  MenusAdmin.map((menu, index) => (
    <Link to={menu.link} key={index}>
      <li className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${menu.gap ? "mt-9" : "mt-2"}`}>
        <img src={menu.src} alt="" />
        <span className={`${!open && "hidden"} origin-left duration-200`}>{menu.title}</span>
      </li>
    </Link>
  ))
)}

{userlog.role === "ROLE_SUPER_ADMIN" && (
  MenusSuperadmin.map((menu, index) => (
    <Link to={menu.link} key={index}>
      <li className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${menu.gap ? "mt-9" : "mt-2"}`}>
        <img src={menu.src} alt="" />
        <span className={`${!open && "hidden"} origin-left duration-200`}>{menu.title}</span>
      </li>
    </Link>
  ))
)}

{userlog.role === "ROLE_CUSTOMER" && (
  MenusCustomer.map((menu, index) => (
    <Link to={menu.link} key={index}>
      <li className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${menu.gap ? "mt-9" : "mt-2"}`}>
        <img src={menu.src} alt="" />
        <span className={`${!open && "hidden"} origin-left duration-200`}>{menu.title}</span>
      </li>
    </Link>
  ))
)}
          {/* <li className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2`}>
            <span className={`${!open && "hidden"} origin-left duration-200`}>role : {localStorage.getItem("role") == "ROLE_CUSTOMER" ? "customer" : "admin"}</span>
          </li> */}
        </ul>
        
      </div>

      <div className={`${!open ? 'hidden' : ''} mt-auto bg-[#081A51] p-2 flex items-center`}>
        <div>
          <Profile profil={userLogin} /> 
        </div>
        <div>
        <Typography variant="h6" color="white" className="-mb-3">
                  {userLogin.name} <br />
                  {userlog.role === "ROLE_ADMIN" ? "ADMIN" : (userlog.role === "ROLE_SUPER_ADMIN" ? "SUPERADMIN" : "CUSTOMER")}
        </Typography>
        </div>
        
      </div>

      <Outlet />
    </div>
  )
}
