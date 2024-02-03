import Header from "../components/Header";
import MessageBody from "../components/MessageBody";
import Sidebar from "../components/Sidebar";
import { useChat } from "../contexts/chatContext";

function AppLayout() {
  const { curChat, dispatch } = useChat();

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex w-full h-full">
        <Sidebar />
        <MessageBody />
      </div>
    </div>
  );
}

export default AppLayout;
