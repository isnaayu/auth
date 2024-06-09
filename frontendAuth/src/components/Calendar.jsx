import React, { useEffect } from "react";
import { generateCalendar, showModal, hideModal } from "./calendarLogic";

const Calendar = () => {
  useEffect(() => {
    const currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth();
    generateCalendar(currentYear, currentMonth);
  }, []);
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex items-center justify-between px-6 py-3 bg-gray-700">
          <button id="prevMonth" className="text-white">
            Previous
          </button>
          <h2 id="currentMonth" className="text-white"></h2>
          <button id="nextMonth" className="text-white">
            Next
          </button>
        </div>
        <div className="grid grid-cols-7 gap-2 p-4" id="calendar"></div>
        <div
          id="myModal"
          className="modal hidden fixed inset-0 flex items-center justify-center z-50"
        >
          <div className="modal-overlay absolute inset-0 bg-black opacity-50"></div>

          <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
            <div className="modal-content py-4 text-left px-6">
              <div className="flex justify-between items-center pb-3">
                <p className="text-2xl font-bold">Selected Date</p>
                <button
                  id="closeModal"
                  className="modal-close px-3 py-1 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring"
                >
                  ✕
                </button>
              </div>
              <div id="modalDate" className="text-xl font-semibold"></div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Calendar;
