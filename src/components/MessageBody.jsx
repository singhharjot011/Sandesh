import MessageContent from "./MessageContent";
import MessageInput from "./MessageInput";

function MessageBody() {
  return (
    <div className="flex flex-col w-full justify-end">
      <div className="flex flex-col-reverse p-4">
        <MessageContent
          position="self-start"
          bgColor="bg-green-700"
          textColor="text-white"
          statusTextColor="text-gray-50"
        />
        <MessageContent
          position="self-end"
          bgColor="bg-gray-100"
          textColor="text-black"
          statusTextColor="text-gray-400"
        />
      </div>
      <MessageInput />
    </div>
  );
}

export default MessageBody;
