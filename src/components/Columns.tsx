import { type ColumnDef } from "@tanstack/react-table";

export type PaymentType = {
  id: number;
  amount: number;
  status: "completed" | "pending" | "failed";
  email: string;
  username: string;
};

export const columns: ColumnDef<PaymentType>[] = [
  {
    accessorKey: "username",
    header: "User",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
];
