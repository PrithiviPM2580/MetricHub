import { USER_DATA } from "@/constants";
import { columns } from "./Columns";
import { DataTable } from "./DataTable";

const Payment = () => {
  return (
    <div className="">
      <div className="mb-4 px-4 py-2 bg-secondary rounded-md">
        <h1 className="font-semibold">All Payments</h1>
      </div>
      <DataTable columns={columns} data={USER_DATA} />
    </div>
  );
};

export default Payment;
