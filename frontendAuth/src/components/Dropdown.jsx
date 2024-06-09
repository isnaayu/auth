import { Select, Option } from "@material-tailwind/react";
 
export default function Dropdown({setSearchQuery,statuses}) {
  return (
    <div className="w-72">
      <Select label="Select Version"
      onChange={(val) => setSearchQuery(val)}
      >
        {statuses && statuses.map((status) => (
          <Option value={status.id}>{status.name}</Option>
        ))}
      </Select>
    </div>
  );
}