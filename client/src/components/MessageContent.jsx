function MessageContent({ message }) {
  return (
    <div
      className={`flex flex-col w-max px-2 py-1 my-2 border-gray-200  rounded-xl dark:bg-gray-700  z-10`}
    >
      <div className="flex items-center space-x-2">{message.messageText}</div>
      <p className={`text-sm py-2.5`} style={{ whiteSpace: "pre-line" }}></p>
      <div className="flex text-xs space-x-2 justify-end">
        <span className={""}></span>
        <span className={``}>{/* {formatTime(chatObj.timestamp)} */}</span>
      </div>
    </div>
  );
}

export default MessageContent;
