import React, { Fragment, useEffect, useState } from "react";
import Layout from "../layout/Layout";
import CreateAdmin from "../pages/CreateAdmin";
import Button from "./Button";
import UpdateAdmin from "../pages/UpdateAdmin";
import { useDispatch, useSelector } from "react-redux";
import { getAllAdmin,deleteAdmin } from "../services/AdminService";
import { fetchCustomer } from "../store/reducers/customersSlice";
import PaginationButton from "./PaginationButton";
import { Avatar, Card, CardBody, CardFooter, Input, Typography } from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";


export default function TableCustomer() {
  const pelanggans = useSelector((state) => state.customers.customers);
  const [selectedAdmin, setSelectedAdmin] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // Added state for search query
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  useEffect(()=>{
    dispatch(fetchCustomer()) 
  },[dispatch])

  const searchCustomer = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredPelanggans = pelanggans.filter((pelanggan) =>
  pelanggan.name.toLowerCase().includes(searchQuery.toLowerCase())
);


  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  const pageCount = Math.ceil(filteredPelanggans.length / itemsPerPage);

  const displayPelanggans = filteredPelanggans.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  console.log("display"+displayPelanggans)


  return (
    <Layout>
      
      <Fragment>
      <div className="w-[1500px]">
        <Card className="w-full">
        <div className="relative bg-clip-border mt-4 mx-4 bg-white text-gray-700 rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Customer List
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all customers
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <Button variant="gradient" size="sm" onClick={()=> setSearchQuery("")}>
          All
          </Button>  
           
          </div>

        </div>
<Input
              label="Search by Name"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              onChange={searchCustomer}
            />
         </div>
         
     
      <CardBody className="px-0">
      <table className="mt-4 w-full text-left">
        <thead>
                <tr>
                <th scope="col" className="px-6 py-3 cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                  Username
                </th>
                <th scope="col" className="px-6 py-3 cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                  Email
                </th>
                <th scope="col" className="px-6 py-3 cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                  Phone
                </th>
                <th scope="col" className="px-6 py-3 cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                  Address
                </th>
                   
                </tr>
            </thead>
          <tbody>
            {error ? 
            <>
            <div className="flex justify-center items-center w-screen">
                <img src="/img/notfounddata.png" className="-ml-44" width={400} alt="" />
            </div>
            </>
             
             : 
             <>
             
             {displayPelanggans && displayPelanggans.map((customer, index) => {
              const classes = index === displayPelanggans.length - 1 ? "p-4" : "p-4 border-b border-blue-gray-50";
              let profileImage = customer.imageProfile || "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg";
              {console.log("cst"+customer.imageProfile)}
              return (
                <tr key={customer.id}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <Avatar src={profileImage} alt={customer.username} size="sm" />
                      <div className="flex flex-col">
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {customer.username}
                        </Typography>
                        {/* <Typography variant="small" color="blue-gray" className="font-normal opacity-70">
                          {customer.name}
                        </Typography> */}
                      </div>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex flex-col">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                      {customer.name}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex flex-col">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {customer.email}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {customer.phone}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" disabled className="font-normal">
                      {customer.address}
                    </Typography>
                  </td>
                </tr>
              );
            })}

             
             
             
             </>
             
             
             }
          
          </tbody>
        </table>

        
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          {/* Page 7 of8 */}
          {/* Page 1 of 10 */}
        </Typography>
        {/* <div className="flex gap-2">
          <Button variant="outlined" size="sm" >
            Previous
          </Button>
          <Button variant="outlined" size="sm"  >
            Next
          </Button>
        </div> */}

        <PaginationButton onPageChange={handlePageClick}  pageCount={pageCount}/>
      </CardFooter>
    </Card>
      </div>

          
       
      </Fragment>
    </Layout>
  );
}
