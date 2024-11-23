import { TUser } from "@/constants";
import { formatName, getBgColor } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { Button } from "./ui/button";
import { EditProfileDialog } from "./EditProfileDialog";
import { EditProfileForm } from "./EditProfileForm";
import { DeleteUserDialog } from "./DeleteUserDialog";

const Trigger = ({ label }: { label: string }) => {
  return (
    <Button className="w-full" variant={"ghost"}>
      {label}
    </Button>
  );
};

export const columns: ColumnDef<TUser>[] = [
  {
    accessorKey: "fullName",
    header: () => <div className="font-semibold text-slate-950">Full Name</div>,
    cell: ({ row }) => {
      const name = row.getValue("fullName") as string;
      return formatName(name);
    },
  },
  {
    accessorKey: "email",
    header: () => <div className="font-semibold text-slate-950">Email</div>,
  },
  {
    accessorKey: "status",
    header: () => <div className="font-semibold text-slate-950">Status</div>,
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      const colors =
        status === "active"
          ? "bg-green-200 text-green-800"
          : "bg-yellow-200 text-yellow-800";
      return (
        <div className={`inline-flex ${colors} rounded-lg p-1 items-center`}>
          {status.toUpperCase()}
        </div>
      );
    },
  },
  {
    accessorKey: "role",
    header: () => <div className="font-semibold text-slate-950">Role</div>,
  },
  {
    accessorKey: "permission",
    header: () => (
      <div className="font-semibold text-slate-950">Permission</div>
    ),
    cell: ({ row }) => {
      const permission = row.getValue("permission") as (
        | "read"
        | "write"
        | "delete"
      )[];
      return (
        <div className="inline-flex gap-2 items-center justify-center">
          {permission.map((el) => (
            <span
              key={el}
              className={`p-1 rounded-md ${getBgColor(el)} capitalize`}
            >
              {el}
            </span>
          ))}
        </div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const email = row.getValue("email");
      const fullName = row.getValue("fullName");
      const status = row.getValue("status");
      const role = row.getValue("role");
      const permission = row.getValue("permission");
      const userDetails = {
        email,
        fullName,
        status,
        role,
        permission,
      } as TUser;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div>
              <EditProfileDialog
                triggerElement={<Trigger label="Edit Profile" />}
              >
                <EditProfileForm user={userDetails} />
              </EditProfileDialog>
            </div>
            <div>
              <DeleteUserDialog
                triggerElement={<Trigger label="delete" />}
                user={userDetails}
              />
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
