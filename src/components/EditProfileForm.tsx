import { TUser } from "@/constants";
import { EditUserSchema } from "@/validation/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useSetRecoilState } from "recoil";
import { userDetailsAtom } from "@/store/atom/userDataAtom";
import { z } from "zod";

type TEditUser = z.infer<typeof EditUserSchema>;

export const EditProfileForm = ({ user }: { user: TUser }) => {
  const { fullName, email, role, status, permission } = user;
  const setUserDetails = useSetRecoilState(userDetailsAtom);
  const form = useForm<TEditUser>({
    resolver: zodResolver(EditUserSchema),
    defaultValues: {
      fullName,
      email,
      role,
      status,
      permission: permission.join(","),
    },
  });
  console.log(status);
  const onSubmit = (data: TEditUser) => {
    const permission = data.permission.split(",") as (
      | "read"
      | "write"
      | "delete"
    )[];
    setUserDetails((prev) =>
      prev.map((u) => (u.email === data.email ? { ...data, permission } : u))
    );
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 my-2">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Admin">Admin</SelectItem>
                  <SelectItem value="User">User</SelectItem>
                  <SelectItem value="Moderator">Moderator</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="active">active</SelectItem>
                  <SelectItem value="inactive">inactive</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="permission"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Permission</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full flex items-center gap-2 justify-end py-2">
          <Button className="" type="button">
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-blue-400 hover:bg-blue-200 hover:text-slate-950 transition duration-100"
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};
