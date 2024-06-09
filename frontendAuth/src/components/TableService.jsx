import React, { Fragment, useEffect, useState } from "react";
import Layout from "../layout/Layout";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchServices,deleteService } from "../store/reducers/servicesSlice";
import CreateService from "../pages/CreateService";
import UpdateService from "../pages/UpdateService";
import PaginationButton from "./PaginationButton";
import { formatIDRCurrency, formatPrice } from "../utils/Number";
import { Card, CardBody, CardFooter, Input, Typography } from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";


export default function TableService() {
  const [visible, setVisible] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // Added state for search query
  const layanans = useSelector((state) => state.services.services);
  const [selectedService, setSelectedService] = useState(null);
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  useEffect(()=>{
    dispatch(fetchServices()) 
  },[dispatch])


  const searchService = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredLayanans = layanans.filter((layanan) =>
  layanan.name.toLowerCase().includes(searchQuery.toLowerCase())
);

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  const pageCount = Math.ceil(filteredLayanans.length / itemsPerPage);

  const displayLayanans = filteredLayanans.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };


  return (
    
    <Layout>
       {/* <Input
              label="Search by Name"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              onChange={searchService}
            /> */}
      <Fragment>
      <div className="w-[1500px]">
        <Card className="w-full">
        <div className="relative bg-clip-border mt-4 mx-4 bg-white text-gray-700 rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Service List
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all services
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <Button variant="gradient" size="sm" onClick={() => {
            setVisible(true)}}>
          Add Service
          </Button>  
           
          </div>

        </div>
<Input
              label="Search by Name"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              onChange={searchService}
            />
         </div>
         
     
      <CardBody className="px-0">
      <table className="mt-4 w-full text-left">
        <thead>
                <tr>
                <th scope="col" className="px-6 py-3 cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                  Description
                </th>
                <th scope="col" className="px-6 py-3 cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                  Duration
                </th>
                <th scope="col" className="px-6 py-3 cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                  Price
                </th>
                <th scope="col" className="px-6 py-3 cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                  Action
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
             
             {displayLayanans && displayLayanans.map((service, index) => {
              const classes = index === displayLayanans.length - 1 ? "p-4" : "p-4 border-b border-blue-gray-50";
              let profileImage = service.imageProfile || "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg";
              {console.log("cst"+service.imageProfile)}
              return (
                <tr key={service.id}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      {/* <Avatar src={profileImage} alt={service.username} size="sm" /> */}
                      <div className="flex flex-col">
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {service.name}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex flex-col">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                      {service.description}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex flex-col">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {service.duration}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {formatIDRCurrency(service.price)}
                    </Typography>
                  </td>
                  <td className={classes}>
                  <Button
                        onClick={() => {
                          setSelectedService(service)
                          setShowEdit(true);
                        }}
                      >
                        Edit
                      </Button>
                    <Button
                        onClick={() => {
                          dispatch(deleteService(service.id))
                        }}
                      >
                        Delete
                      </Button>
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

        <PaginationButton onPageChange={handlePageClick}  pageCount={pageCount}/>
      </CardFooter>
    </Card>
      </div>
       <CreateService visible={visible} setVisible={setVisible}/>
       <UpdateService showEdit={showEdit} setShowEdit={setShowEdit} selectedService={selectedService} setSelectedService={setSelectedService}/>
      </Fragment>
    </Layout>
  );
}
