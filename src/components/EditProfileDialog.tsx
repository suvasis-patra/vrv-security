import { DialogDescription } from "@radix-ui/react-dialog";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
type EditProfileDialogProps = {
  triggerElement: React.ReactNode;
  children: React.ReactNode;
};

export const EditProfileDialog = ({
  triggerElement,
  children,
}: EditProfileDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger className="flex justify-center w-full">
        {triggerElement}
      </DialogTrigger>
      <DialogContent aria-describedby="dialog-description">
        <DialogHeader>
          <DialogTitle>Edit user profile</DialogTitle>
          <DialogDescription className="sr-only" id="dialog-description">
            This is a form for editing user profile
          </DialogDescription>
          <div>{children}</div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
