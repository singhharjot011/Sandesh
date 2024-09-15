import { useChat } from "../contexts/chatContext";

function Interactors({ chatUser }) {
  const { dispatch, selectedInteractor } = useChat();

  return (
    <>
      <div
        className={`flex items-center space-x-2 px-2 py-4 border-b cursor-pointer ${
          selectedInteractor?.chatUser._id === chatUser._id
            ? "bg-green-800 text-stone-200"
            : ""
        }`}
        onClick={() => {
          dispatch({
            type: "interactor/selected",
            payload: {
              chatUser,
            },
          });
        }}
      >
        <img
          className="w-8 h-8 rounded-full"
          src={
            chatUser.profilePicture
              ? chatUser.profilePicture
              : "https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"
          }
          alt="DP"
        />
        <span className={`text-sm font-semibold  dark:text-white`}>
          {chatUser.name}
        </span>
      </div>
    </>
  );
}

export default Interactors;
