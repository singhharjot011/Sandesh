import Header from "../components/Header";
import MessageBody from "../components/MessageBody";
import MessageInput from "../components/MessageInput";
import Sidebar from "../components/Sidebar";
import { useChat } from "../contexts/chatContext";

function AppLayout() {
  const { curChat, dispatch, selectedInteractor, openContact } = useChat();

  return (
    <div className="flex flex-wrap h-screen w-screen">
      <div className="flex w-full justify-between p-2 items-center border-b h-1/10  bg-white z-10 fixed top-0">
        <Header />
      </div>
      <div className="w-1/5 h-full border-r mt-16 fixed left-0">
        <Sidebar />
      </div>
      {openContact ? (
        <div className="w-4/5 flex flex-col absolute right-0 h-full">
          <div className="flex w-full  p-4 pt-16 overflow-y-auto flex-grow">
            Add contact
          </div>
        </div>
      ) : (
        <div className="w-4/5 flex flex-col absolute right-0 h-full">
          <div className="flex flex-col-reverse w-full  p-4 pt-16 overflow-y-auto flex-grow">
            <MessageBody />
          </div>
          <div className=" h-3/10  sticky bottom-0 right-0">
            {selectedInteractor && <MessageInput />}
          </div>
        </div>
      )}
    </div>
  );
}

export default AppLayout;
