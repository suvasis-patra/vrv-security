import { useRecoilValue } from "recoil";
import { userDetailsAtom } from "./store/atom/userDataAtom";
import { UserTable } from "./components/UserTable";
import { columns } from "./components/columns";

function App() {
  const userData = useRecoilValue(userDetailsAtom);
  return (
    <div>
      <UserTable data={userData} columns={columns} />
    </div>
  );
}

export default App;
