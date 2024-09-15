import Interactors from "./Interactors";
import { useChat } from "../contexts/chatContext";

function Sidebar() {
  const { chats, loggedInUser } = useChat();

  return (
    <>
      <div className="h-full relative overflow-auto">
        {chats.length > 0 &&
          chats.map((chat) =>
            chat.participants
              .filter((participant) => participant._id !== loggedInUser[0]._id)
              .map((chatUser) => (
                <Interactors key={chatUser._id} chatUser={chatUser} />
              ))
          )}
      </div>
      <div className="sticky bottom-0 px-2 py-6 flex items-center justify-center text-green-800 space-x-2">
        <strong className="text-2xl rounded-2xl bg-gray-200 px-2 cursor-pointer">
          &#43;
        </strong>
        <span className="text-xl">Contact</span>
      </div>
    </>
  );
}

export default Sidebar;
