function MessageContent({ position, bgColor, textColor,statusTextColor }) {
  return (
    <div
      className={`flex flex-col w-2/3 p-2 my-2 border-gray-200 ${bgColor} rounded-xl dark:bg-gray-700 ${position} `}
    >
      <div className="flex items-center space-x-2"></div>
      <p className={`text-sm py-2.5 ${textColor}`}>
        Message text will go here
      </p>
      <div className="flex text-xs space-x-2 justify-end">
        <span className={`${statusTextColor}`}> Delivered</span>
        <span className={`${statusTextColor}`}>11:46</span>
      </div>
    </div>
  );
}

export default MessageContent;
