function MessageContent() {
  return (
    <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
      <div className="flex items-center space-x-2 rtl:space-x-reverse"></div>
      <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
        Message text will go here
      </p>
      <div className="flex space-x-2 justify-end">
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          Delivered
        </span>
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          11:46
        </span>
      </div>
    </div>
  );
}

export default MessageContent;
