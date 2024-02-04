import Interactors from "./Interactors";

import { useChat } from "../contexts/chatContext";

function Sidebar() {
  const { data, selectedInteractor, openContact, dispatch } = useChat();
  const interactorsMap = new Map(data.map((c) => [c.interactorId, c]));
  const allInteractors = [...interactorsMap.values()];

  return (
    <>
      <div className="h-full relative">
        {allInteractors.map(
          (chat) =>
            chat.interactorId && (
              <Interactors
                interactorName={chat.interactorName}
                interactorId={chat.interactorId}
                key={chat.id}
                active={chat.interactorId === selectedInteractor ? true : false}
              />
            )
        )}
      </div>
      <div className="sticky bottom-0 px-2 py-6 flex items-center justify-center text-green-800 space-x-2">
        <strong
          className="text-2xl rounded-2xl bg-gray-200 px-2  cursor-pointer "
          onClick={() => {
            dispatch({ type: "contact/opened", payload: true });
          }}
        >
          &#43;
        </strong>
        <span className=" text-xl">Contact</span>
      </div>
    </>
  );
}

export default Sidebar;
