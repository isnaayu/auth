import React,{Fragment,useState} from 'react'
import Layout from '../layout/Layout'
import EditOrder from './EditOrder'
import Search from './Search'
import CreateOrder from './CreateOrder'

export default function TableOrder() {
  const [visible,setVisible] = useState(false)
  const [createOrderVisible,setCreateOrderVisible] = useState(false)
  
  return (
    <Layout>
      <Fragment>
        <Search/>
      <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-dark-purple dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-dark-purple dark:text-gray-400">
                  <tr>
                      <th scope="col" className="px-6 py-3">
                          Number
                      </th>
                      
                      <th scope="col" className="px-6 py-3">
                          Service
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Date Submitted
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Date Finish
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Customer
                      </th>
                      <th scope="col" className="px-6 py-3">
                          price per kg
                      </th>
                      <th scope="col" className="px-6 py-3">
                          weight
                      </th>
                      <th scope="col" className="px-6 py-3">
                          total price
                      </th>
                      <th scope="col" className="px-6 py-3">
                          status
                      </th>
                     
                      {localStorage.getItem('role') == '"ROLE_CUSTOMER"' ? "" : 
                      <th scope="col" className="px-6 py-3">
                      action
                      </th>
                      }
                      
                  </tr>
              </thead>
              <tbody>
                  <tr className="bg-white dark:bg-blue-200">
                      <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-black">
                          1
                      </th>
                      <td className="px-6 py-4 text-black">
                          cuci bersih (3 hari)
                      </td>
                      <td className="px-6 py-4 text-black">
                          8 feb 2024 12:30:12
                      </td>
                      <td className="px-6 py-4 text-black">
                          11 feb 2024 12:30:12
                      </td>
                      <td className="px-6 py-4 text-black">
                          Roni
                      </td>
                      <td className="px-6 py-4 text-black">
                          Rp.10.000
                      </td>
                      <td className="px-6 py-4 text-black">
                          10
                      </td>
                      <td className="px-6 py-4 text-black">
                          Rp.100.000
                      </td>
                      <td className="px-6 py-4 text-black">
                          submitted
                      </td>
                      <td className="px-6 py-4 text-black">
                        {localStorage.getItem('role') == '"ROLE_CUSTOMER"' ? "" : <button onClick={()=>{setVisible(true)}}>change</button>}
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>


      <EditOrder visible={visible} setVisible={setVisible} id={1}/>

      <CreateOrder visible={createOrderVisible} setVisible={setCreateOrderVisible}/>

      </Fragment>

    </Layout>
      
    
  )
}
