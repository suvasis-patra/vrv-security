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
type DeleteUserDialogProps = {
  triggerElement: React.ReactNode;
  user: TUser;
};

export const DeleteUserDialog = ({
  triggerElement,
  user,
}: DeleteUserDialogProps) => {
  const setUser = useSetRecoilState(userDetailsAtom);
  const deleteUser = () => {
    setUser((prev) => prev.filter((el) => el.email !== user.email));
  };
  return (
    <Dialog>
      <DialogTrigger>{triggerElement}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex items-center justify-end gap-2">
          <Button>Cancel</Button>
          <Button variant={"destructive"} onClick={deleteUser}>
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
