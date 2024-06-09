import React from 'react'
import ReactPaginate from 'react-paginate'
import { AiFillLeftCircle, AiFillRightCircle} from "react-icons/ai";
import {motion} from "framer-motion"


export default function PaginationButton({ onPageChange, pageCount }) {
  const paginationVariants = {
    hidden:{
      opacity:0,
      y:100
    },
    visible:{
      opacity:1,
      y:0,
      transition:{
        type:"spring",
        stiffness:260,
        damping:20
      }
    }
  }
  return (
    <motion.div variants={paginationVariants} initial="hidden" animate="visible">
      <ReactPaginate
      breakLabel={
        <span className='mr-4'>...</span>
      }
      nextLabel={
        <span className='w-10 h-10 flex items-center justify-center bg-gray-200 rounded-md ml-4'>
          <AiFillRightCircle/>
        </span>
    }
      pageRangeDisplayed={3}
      pageCount={pageCount}
      onPageChange={onPageChange}
      previousLabel={
        <span className='w-10 h-10 flex items-center justify-center bg-gray-200 rounded-md mr-4'>
          <AiFillLeftCircle/>
        </span>
    }
      containerClassName='flex items-center justify-center mt-8 mb-4'
      pageClassName='block border border-solid border-bg-gray-200 hover:bg-gray-300 w-10 h-10 flex items-center justify-center rounded-md mr-4'
      activeClassName='bg-blue-500 text-white'
      />
    </motion.div>
  )
}