import React, { Fragment, useEffect, useState } from "react";
import Layout from "../layout/Layout";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchStatuses } from "../store/reducers/statusSlice";
import CreateStatus from "../pages/CreateStatus";
import UpdateStatus from "../pages/UpdateStatus";


export default function TableStatus() {
  const [visible, setVisible] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const statusKeadaan = useSelector((state) => state.statuses.statuses);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchStatuses()) 
  },[dispatch])




  return (
    <Layout>
      <Fragment>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-dark-purple dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-dark-purple dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 text-center">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Indicator
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {statusKeadaan &&
                statusKeadaan.map((status) => (
                  <tr className="bg-white dark:bg-blue-200" key={status.id}>
                    <td className="px-6 py-4 text-black">
                    {status.name}
                    </td>
                    <td className="px-6 py-4 text-black">
                    {status.indicator}
                    </td>
                    <td className="px-6 py-4 text-black">
                    <Button
                        onClick={() => {
                          setSelectedStatus(status)
                          setShowEdit(true);
                        }}
                      >
                        Edit
                      </Button>
                    <Button
                        onClick={() => {
                        }}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <button
          className="text-white text-xl place-self-end bg-blue-500 p-2 rounded-md"
          onClick={() => {
            setVisible(true);
          }}
        >
          Add
        </button>
        </div>

       <CreateStatus visible={visible} setVisible={setVisible}/>
       <UpdateStatus showEdit={showEdit} setShowEdit={setShowEdit} selectedStatus={selectedStatus}/>
       {/* <UpdateService showEdit={showEdit} setShowEdit={setShowEdit} selectedService={selectedService} setSelectedService={setSelectedService}/> */}
      </Fragment>
    </Layout>
  );
}
