import React from "react";
const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(!open);

const EditProfile = () => {
  return (
    <>
      <Dialog open={open} size="xs" handler={handleOpen}>
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
          <div className="grid gap-6">
            <Typography className="-mb-1" color="blue-gray" variant="h6">
              Customer Name
            </Typography>
            <Input
              label="customer name"
            />
          </div>
          {/* {data && (
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

                </div>
            </div>
            )} */}
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="gray" onClick={handleOpen}>
            cancel
          </Button>
          <Button type="submit" variant="gradient" color="gray">
            Update
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default EditProfile;
