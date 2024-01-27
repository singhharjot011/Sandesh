import MessageBody from "../components/MessageBody";
import Sidebar from "../components/Sidebar";

function AppLayout() {
  return (
    <div className="flex ">
      <Sidebar />
      <MessageBody/>
    </div>
  );
}

export default AppLayout;
