function Senders({active, sender}) {
  return (
    <>
      <div className={`flex items-center space-x-2 px-2 py-4 border-b ${active?"bg-green-700":""}`}>
        <img
          className="w-8 h-8 rounded-full"
          src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"
          alt="Jese image"
        />
        <span className={`text-sm font-semibold ${active?"text-gray-50":"text-gray-900"} dark:text-white`}>
          {sender}
        </span>
      </div>
    </>
  );
}

export default Senders;
