import MessageContent from "./MessageContent";

const darkText = "text-gray-900 dark:text-white";
const lightText = "text-gray-50 dark:text-gray-100";

function MessageBody() {
  return (
    <div className="flex flex-col w-full space-y-2 p-4 ">
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
  );
}

export default MessageBody;
