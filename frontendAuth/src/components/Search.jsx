import React, { useState } from 'react';

const statusOptions = [
  'picked up',
  'arrived at the shop',
  'washed',
  'dried in the sun',
  'ironed',
  'perfumed',
  'wrapped',
  'ready to be delivered',
];

export default function Search() {
  const [selectedStatus, setSelectedStatus] = useState('');

  const handleSearch = () => {
    console.log('Search status:', selectedStatus);
  };

  return (
    <div>
      <div className="flex items-center">
        <select
          className="border rounded-l-md px-4 py-2 focus:outline-none"
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
          <option value="" disabled>
            Select status
          </option>
          {statusOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button
          className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-400 duration-500"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
}
