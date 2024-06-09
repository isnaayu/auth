import Button from "./Button"

export default function Navbar() {
  let Links = [
    {name:"HOME",link:"/home"},
    {name:"SERVICE",link:"/service"},
    {name:"ABOUT",link:"/about"},
    {name:"CONTACT",link:"/contact"},
  ]
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
     <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
      <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins]">
        <span className="text-3xl text-indigo-600 mr-1 pt-2">
        <span>K-LOUN</span>
        </span>
      </div>
      <ul className="md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-allduration-500 ease-in">
       {Links.map((link)=>(
        <li key={link.link} className="md:ml-8 text-xl md:my-0 my-7">
          <a href={link.link} className="text-gray-800 hover:text-gray-400 duration-500">{link.name}</a>
        </li>
       ))}
       <Button>ORDER NOW</Button>
      </ul>
     </div>
    </div>
  )
}
