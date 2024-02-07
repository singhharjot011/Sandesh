import { useChat } from "../contexts/chatContext";

function Interactors({ active, interactorName, interactorId }) {
  const { dispatch } = useChat();

  return (
    <>
      <div
        className={`flex items-center space-x-2 px-2 py-4 border-b cursor-pointer ${
          active ? "bg-green-700" : ""
        }`}
        onClick={() => {
          dispatch({
            type: "interactor/selected",
            payload: {
              interactorId: interactorId,
              interactorName: interactorName,
            },
          });
          dispatch({ type: "contact/opened", payload: false });
        }}
      >
        <img
          className="w-8 h-8 rounded-full"
          src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"
          alt="Jese image"
        />
        <span
          className={`text-sm font-semibold ${
            active ? "text-gray-50" : "text-gray-900"
          } dark:text-white`}
        >
          {interactorName}
        </span>
      </div>
    </>
  );
}

export default Interactors;
