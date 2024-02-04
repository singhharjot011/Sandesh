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
      <div className="flex justify-center items-center  text-gray-400 flex-grow">
        <strong className="w-max">
          Select someone from the sidebar to start chat
        </strong>
      </div>
    );
  return (
    <>
      {curChat
        .sort(
          (a, b) => getMilliseconds(b.timestamp) - getMilliseconds(a.timestamp)
        )
        .map((c, i, arr) => (
          //   const todayDate = new Date();
          //   const newDate = new Date(arr[i].timestamp);
          //   const oldDate = new Date(arr[i - 1]?.timestamp);

          //   <span>
          //   {todayDate.getDate() === newDate.getDate() &&
          //     todayDate.getDate() !== oldDate.getDate() &&
          //     "Today"}
          // </span>

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
    </>
  );
}

export default MessageBody;
