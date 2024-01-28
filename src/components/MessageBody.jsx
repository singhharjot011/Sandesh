import MessageContent from "./MessageContent";
import MessageInput from "./MessageInput";
import { useChat } from "../contexts/chatContext";

function MessageBody() {
  const { dispatch, curChat, selectedInteractor, data } = useChat();
  const chat = data.filter((c) => c.interactorId === selectedInteractor);

  function getMilliseconds(dateTimeString) {
    return new Date(dateTimeString).getTime();
  }

  return (
    <div className="flex flex-col w-full justify-end">
      <div className="flex flex-col-reverse p-4">
        {
          chat
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
            ))
          // .
        }
      </div>
      <MessageInput />
    </div>
  );
}

export default MessageBody;
