import React, { Fragment, useEffect, useState } from "react";
import Layout from "../layout/Layout";
import CreateAdmin from "../pages/CreateAdmin";
import Button from "./Button";
import UpdateAdmin from "../pages/UpdateAdmin";
import { useDispatch, useSelector } from "react-redux";
import { getAllAdmin,deleteAdmin } from "../services/AdminService";
// import { fetchAdmin } from "../store/reducers/usersSlice";
import PaginationButton from "./PaginationButton";
import { Avatar, Card, CardBody, CardFooter, Input, Typography } from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { setAdmin } from "../store/reducers/usersSlice";

export default function TableAdmin() {
  const [visible, setVisible] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // Added state for search query
  const admins = useSelector((state) => state.users.admins);
  const [selectedAdmin, setSelectedAdmin] = useState(null);
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAdmins = async() => {
      try {
        const response = await getAllAdmin();
        dispatch(setAdmin(response.data.data))
        console.log("cobaaa"+response.data)
        // dispatch(fetchAdmin(response.data.data))
      } catch (error) {
        console.error('Error fetching admins:', error);
        setError(error);
      }
    }
    fetchAdmins()
  }, []);
  console.log("admin"+ admins)


  const hapusAdmin = async (id) => {
    try{
      await deleteAdmin(id)
      // dispatch(fetchAdmin())
    }catch(e){
      console.log(e);
    }
  }

  const searchAdmin = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredAdmins = admins.filter((admin) =>
  admin.name.toLowerCase().includes(searchQuery.toLowerCase())
);

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  const pageCount = Math.ceil(filteredAdmins.length / itemsPerPage);

  const displayAdmins = filteredAdmins.slice(
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
              onChange={searchAdmin}
            /> */}
      <Fragment>
      <div className="w-[1500px]">
        <Card className="w-full">
        <div className="relative bg-clip-border mt-4 mx-4 bg-white text-gray-700 rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Admin List
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all admins
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <Button variant="gradient" size="sm" onClick={() => {
            setVisible(true);
          }}>
          Add Admin
          </Button>  
           
          </div>

        </div>
<Input
              label="Search by Name"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              onChange={searchAdmin}
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
                <th scope="col" className="px-6 py-3 cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                  Actions
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
             
             {displayAdmins && displayAdmins.map((admin, index) => {
              const classes = index === displayAdmins.length - 1 ? "p-4" : "p-4 border-b border-blue-gray-50";
              let profileImage = admin.imageProfile || "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg";
              {console.log("cst"+admin.imageProfile)}
              return (
                <tr key={admin.id}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <Avatar src={profileImage} alt={admin.username} size="sm" />
                      <div className="flex flex-col">
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {admin.username}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex flex-col">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                      {admin.name}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex flex-col">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {admin.email}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {admin.phone}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" disabled className="font-normal">
                      {admin.address}
                    </Typography>
                  </td>
                  <td className={classes}>
                  <Button
                        onClick={() => {
                          setShowEdit(true);
                          setSelectedAdmin(admin);
                        }}
                      >
                        Edit
                      </Button>
                      <Button onClick={()=>hapusAdmin(admin.id)}>Delete</Button>
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

        <CreateAdmin visible={visible} setVisible={setVisible} />
        <UpdateAdmin showEdit={showEdit} setShowEdit={setShowEdit} selectedAdmin={selectedAdmin} />
      </Fragment>
    </Layout>
  );
}
