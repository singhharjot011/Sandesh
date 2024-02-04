import "moment-timezone";

function MessageContent({
  position,
  bgColor,
  textColor,
  statusTextColor,
  chatObj,
  isSender,
}) {
  function formatTime(dateTimeString) {
    const options = { hour: "numeric", minute: "2-digit", hour12: true };
    return new Date(dateTimeString).toLocaleTimeString("en-US", options);
  }

  return (
    <div
      className={`flex flex-col w-max px-2 py-1 my-2 border-gray-200 ${bgColor} rounded-xl dark:bg-gray-700 ${position} `}
    >
      <div className="flex items-center space-x-2"></div>
      <p
        className={`text-sm py-2.5 ${textColor}`}
        style={{ whiteSpace: "pre-line" }}
      >
        {chatObj.message}
      </p>
      <div className="flex text-xs space-x-2 justify-end">
        <span className={`${statusTextColor}`}> {isSender && "Delivered"}</span>
        <span className={`${statusTextColor}`}>
          {formatTime(chatObj.timestamp)}
        </span>
      </div>
    </div>
  );
}

export default MessageContent;
