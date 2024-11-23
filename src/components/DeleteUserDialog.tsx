import { TUser } from "@/constants";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { useSetRecoilState } from "recoil";
import { userDetailsAtom } from "@/store/atom/userDataAtom";
import { useState } from "react";
type DeleteUserDialogProps = {
  user: TUser;
};

export const DeleteUserDialog = ({ user }: DeleteUserDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const setUser = useSetRecoilState(userDetailsAtom);
  const deleteUser = () => {
    setUser((prev) => prev.filter((el) => el.email !== user.email));
    setIsOpen(false);
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger className="flex justify-center w-full">
        <Button className="w-full" variant={"ghost"}>
          Delete
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex items-center justify-end gap-2">
          <Button onClick={() => setIsOpen(false)}>Cancel</Button>
          <Button variant={"destructive"} onClick={deleteUser}>
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
