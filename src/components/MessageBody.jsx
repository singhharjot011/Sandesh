import MessageContent from "./MessageContent";
import MessageInput from "./MessageInput";
import { useChat } from "../contexts/chatContext";
import { useEffect } from "react";

function MessageBody() {
  const { dispatch, curChat, selectedInteractor, data } = useChat();

  useEffect(() => {
    dispatch({
      type: "chat/loaded",
      payload: data.filter((c) => c.interactorId === selectedInteractor),
    });
  }, [selectedInteractor, data, dispatch]);

  function getMilliseconds(dateTimeString) {
    return new Date(dateTimeString).getTime();
  }

  if (!selectedInteractor)
    return (
      <div className="flex justify-center items-center w-4/5 text-gray-400 ">
        <strong className="w-max">
          Select someone from the sidebar to start chat
        </strong>
      </div>
    );
  return (
    <div className="flex flex-col w-4/5 justify-end">
      <div className="flex flex-col-reverse p-4">
        {curChat
          .sort(
            (a, b) =>
              getMilliseconds(b.timestamp) - getMilliseconds(a.timestamp)
          )
          .map((c) => (
            <MessageContent
              position={c.isSender ? "self-end" : "self-start"}
              bgColor={c.isSender ? "bg-gray-100" : "bg-green-700"}
              textColor={c.isSender ? "text-black" : "text-gray-50"}
              statusTextColor={c.isSender ? "text-gray-800" : "text-gray-200"}
              chatObj={c}
              key={c.id}
              isSender={c.isSender}
            />
          ))}
      </div>
      <MessageInput />
    </div>
  );
}

export default MessageBody;
