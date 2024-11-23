import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { useState } from "react";
type EditProfileDialogProps = {
  children: React.ReactNode;
};

export const EditProfileDialog = ({ children }: EditProfileDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogTrigger className="flex justify-center w-full">
        <Button
          className="w-full"
          variant={"ghost"}
          onClick={() => setIsOpen(true)}
        >
          Edit Profile
        </Button>
      </DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>Edit user profile</DialogTitle>
          <div>{children}</div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
