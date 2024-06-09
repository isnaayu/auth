import {
    MagnifyingGlassIcon,
    ChevronUpDownIcon,
  } from "@heroicons/react/24/outline";
  import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
  import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Tabs,
    TabsHeader,
    Tab,
    Avatar,
    IconButton,
    Tooltip,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Select,
    Option
  } from "@material-tailwind/react";
import React, { Fragment, useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getAllTransactions, updateTransaction } from "../services/TransactionsService";
import { setTransactions, updateTrxById } from "../store/reducers/transactionsSlice";
import { getAllStatus } from "../services/StatusService";
import { setStatus } from "../store/reducers/statusSlice";
import { formatIDRCurrency } from "../utils/Number";
import Dropdown  from "./Dropdown";

export function formatDateTime(stringTanggal) {
  const timestamp = new Date(stringTanggal);
  const options = { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric', 
      hour: 'numeric', 
      minute: '2-digit', 
      hour12: true 
  };

  return timestamp.toLocaleString('en-US', options);
}





const TABLE_HEAD = ["Customer", "Service", "Status", "Started at", "Finished", "Total Price","Address","Phone", "Action"];

const TABLE_ROWS = [
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "John Michael",
    email: "john@creative-tim.com",
    job: "Fast Wash",
    org: "10 Kg",
    online: true,
    date: "23/04/18",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    name: "Alexa Liras",
    email: "alexa@creative-tim.com",
    job: "Dry Wash",
    org: "5 Kg",
    online: false,
    date: "23/04/18",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
    name: "Laurent Perrier",
    email: "laurent@creative-tim.com",
    job: "Fast Wash",
    org: "4 Kg",
    online: false,
    date: "19/09/17",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
    name: "Michael Levi",
    email: "michael@creative-tim.com",
    job: "Dry Wash",
    org: "2 Kg",
    online: true,
    date: "24/12/08",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
    name: "Richard Gran",
    email: "richard@creative-tim.com",
    job: "Fast Wash",
    org: "3 Kg",
    online: false,
    date: "04/10/21",
  },
];



export function HistoryTrx() {
    const dispatch = useDispatch();
    const transactions = useSelector((state)=> state.transactions.transactions)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(!open);
    const statuses = useSelector((state) => state.status.statuses)
    const [sortedTransactions, setSortedTransactions] = useState([]);
    const [sortBy, setSortBy] = useState(null);
    const [sortOrder, setSortOrder] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [totalPages, setTotalPages] = useState(0);
    const [error, setError] = useState(null);
   

    const handleAccept = async(trxId) => {
      alert(trxId)
      console.log(transactions);

      const selectedTrx = transactions.filter((trans) => {
        return trans.id == trxId
      })

      const acceptId = statuses.find(status => status.name === "accept");

  if (selectedTrx[0].status.name === "waiting") {
    try {
      const updatedData = { ...selectedTrx[0], statusId: acceptId.id };
      const response = await updateTransaction(updatedData);
      dispatch(updateTrxById(response.data.data));
    } catch (error) {
      console.log(error);
    }
  }
    }
    const [searchQuery, setSearchQuery] = useState(""); // Added state for search query
    // const statusId = searchQuery
    const [data, setData] = useState({})

    useEffect(() => {
      const fetchTransactions = async () => {
        try {
          let statusId = null;
          console.log("statusId"+statusId)
          if (searchQuery != null || searchQuery != "") {
            statusId = searchQuery;
          }
          const response = await getAllTransactions(currentPage, pageSize, statusId);
          setTotalPages(response.paging.totalPage)
          console.log("totalPage"+response.paging.totalPage)
          dispatch(setTransactions(response.data));
          // console.log("transaksi"+response.data.data)
          setError(null)
        } catch (error) {
          if (error.response && error.response.status === 404) {
            setError("Transactions not found");
        } else {
            setError("Error fetching transactions");
        }
        console.log(error);
        }
      };
      fetchTransactions();
    }, [currentPage, pageSize, searchQuery]);

    console.log(totalPages)
    useEffect(()=> {
        const fetchStatuses = async()=> {
            try {
                const response = await getAllStatus()
                dispatch(setStatus(response.data.data))
            } catch (error) {
                console.log(error)
            }
        }
        fetchStatuses()
    }, [])

    const handleUpdateTrx = async(trxId) => {
        const selectedTrx = transactions.find(trx => trx.id === trxId)
        setData(selectedTrx)
        handleOpen()
    }

    const updateTrx = async() => {
        try {
            const response = await updateTransaction(data)
            dispatch(updateTrxById(response.data.data))
            handleOpen()
        } catch (error) {
            console.log(error)
        }
    }
 

    const filteredTransaction = transactions.filter((transaction) =>
    transaction.status.id.includes(searchQuery)
  );





    useEffect(() => {
        setSortedTransactions(transactions);
    }, [transactions]);

    const handleSort = (key) => {
        setSortOrder(sortBy === key ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc');
        setSortBy(key);
        const sorted = [...transactions];
        sorted.sort((a, b) => {
            const valueA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
            const valueB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];
    
            if (sortOrder === 'asc') {
                return valueA > valueB ? 1 : -1;
            } else {
                return valueA < valueB ? 1 : -1;
            }
        });
        setSortedTransactions(sorted);
    };

    const handlePreviousPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
    
    const handleNextPage = () => {
      if(currentPage == totalPages){
        setCurrentPage(currentPage);
      }else{
        setCurrentPage(currentPage + 1);
      }
    };

    

console.log(sortedTransactions)
  return (
    <>
      <Layout>
        <Fragment>
        {error && (
                    <div className="alert alert-danger" role="alert">
                        {error}
                    </div>
                )}
        <div className="w-[1500px]">
        <Card className="w-full">
        <div className="relative bg-clip-border mt-4 mx-4 bg-white text-gray-700 rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Transactions History
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all transactions
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <Button variant="gradient" size="sm" onClick={()=> setSearchQuery("")}>
          All
          </Button>  
           <Dropdown setSearchQuery={setSearchQuery} statuses={statuses}/>
          </div>
        </div>

         </div>
     
      <CardBody className="px-0">
      <table className="mt-4 w-full text-left">
        <thead>
                <tr>
                    {TABLE_HEAD.map((head, index) => (
                        <th
                            key={head}
                            className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                            onClick={() => handleSort(head.toLowerCase())}
                        >
                            <span className="flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                                {head}{" "}
                                {sortBy === head.toLowerCase() && (
                                    <ChevronUpDownIcon
                                        strokeWidth={2}
                                        className={`h-4 w-4 ${sortOrder === 'asc' ? 'rotate-180' : ''}`}
                                    />
                                )}
                            </span>
                        </th>
                    ))}
                </tr>
            </thead>
          <tbody>
            {error ? 
            <>
            <tr className="flex justify-center">
                <td colSpan="5" className="py-8 text-center justify-center items-center">
                  <img src="/img/notfounddata.png" width={400} className="" alt="" />
                </td>
              </tr>
            </>
             
             : 
             <>
             
             
             
             {transactions && transactions.map(
              ({ id, user, service, weight, status, startDate, finishDate, totalPrice }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                let statusColor = ""
                if(status.indicator == "1"){
                    statusColor = "blue"
                }else if(status.indicator == "2"){
                    statusColor = "red"
                }else if(status.indicator == "3"){
                    statusColor = "purple"
                }else if(status.indicator == "4"){
                    statusColor = "green"
                }
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                  let profileImage = ""
                  if(user.imageProfile == null){
                    profileImage = "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg"
                  }else {
                    profileImage = user.imageProfile.url
                  }

                  const start = formatDateTime(startDate)
                  const finish = formatDateTime(finishDate)
 
                return (
                  <tr key={id}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar src={profileImage} alt={user} size="sm" />
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {user.name}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {user.email}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {service.name}
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {weight} Kg
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          variant="ghost"
                          size="sm"
                          value={status.name}
                          color={statusColor}
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {startDate ? start : ''}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"              
                        disabled
                        className="font-normal"
                      >
                        {finishDate ? finish : ''}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {formatIDRCurrency(totalPrice)}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {user.address}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {user.phone}
                      </Typography>
                    </td>
                    <td className={classes}>
                      {status.name == "waiting" ?
                      <Button className="bg-green-600" size="sm" onClick={()=> {handleAccept(id)}}>
                      ACCEPT
                      </Button>
                    :
                    <Tooltip content="Edit User">
                        <IconButton variant="text" onClick={()=> {handleUpdateTrx(id)}} >
                          <PencilIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                      }
                    </td>
                  </tr>
                );
              },
            )}
             
             
             
             </>
             
             
             }
          
          </tbody>
        </table>

        
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page {currentPage} of {totalPages}
          {/* Page 1 of 10 */}
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" size="sm" onClick={handlePreviousPage}>
            Previous
          </Button>
          <Button variant="outlined" size="sm" onClick={handleNextPage} >
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
      </div>
        </Fragment>
      </Layout>
      <Dialog open={open} size="xs" handler={handleOpen} onSubmit={updateTrx}>
        <div className="flex items-center justify-between">
          <DialogHeader className="flex flex-col items-start">
            {" "}
            <Typography className="mb-1" variant="h4">
              Update Transaction
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
            Write progress information of laundry and then click button.
          </Typography>
          {data && (
            <div className="grid gap-6">
                <Typography className="-mb-1" color="blue-gray" variant="h6">
                Customer Name
                </Typography>
                <Input label="customer name" value={data.user?.name ?? ''} disabled />
                <Typography variant="h6" color="blue-gray">
                Service
                </Typography>
                <Input label="service" value={data.service?.name ?? ''} disabled />
                <Typography variant="h6" color="blue-gray">
                Weight
                </Typography>
                <Input label="weight" value={data.weight ?? ''} onChange={(e) => setData({ ...data, weight: e.target.value })} />
                <div className="flex w-full">
                    <div className="mr-2">
                        <Typography variant="h6" color="blue-gray">
                        Current Status
                        </Typography>
                        <Input label="service" value={data.status?.name ?? ''} disabled />
                    </div>
                    <div>
                        <Typography variant="h6" color="blue-gray">
                        Update Status
                        </Typography>
                        <Select color="teal" label="update status" name='statusId' onChange={(e) => setData({ ...data, statusId: e })}>
                        {statuses &&
                        statuses
                          .filter((status) => !["waiting", "cancel", "accept"].includes(status.name))
                          .map((status) => (
                            <Option key={status.id} value={status.id}>
                              {status.name}
                            </Option>
                          ))}
                        </Select>
                    </div>
                </div>
            </div>
            )}
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="gray" onClick={handleOpen}>
            cancel
          </Button>
          <Button type="submit" variant="gradient" color="gray" onClick={updateTrx} >
            Update
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
