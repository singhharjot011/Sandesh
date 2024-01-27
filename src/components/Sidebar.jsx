import Senders from "./Senders";

import { useChat } from "../contexts/chatContext";

function Sidebar() {
  const { data } = useChat();
  const sendersMap = new Map(data.map((c) => [c.senderId, c]));
  const allSenders = [...sendersMap.values()];



  return (
    <div className="w-1/5 h-full border-r" >
      {allSenders.map(
        (chat) =>
          chat.senderId && <Senders sender={chat.senderName} key={chat.id} onClick={handleSelectSender}/>
      )}
    </div>
  );
}

export default Sidebar;
