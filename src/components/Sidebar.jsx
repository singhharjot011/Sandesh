import Interactors from "./Interactors";

import { useChat } from "../contexts/chatContext";

function Sidebar() {
  const { selectedInteractor, dispatch, contacts, data } = useChat();
  const interactorsMap = new Map(contacts.map((c) => [c.interactorId, c]));
  const allContacts = [...interactorsMap.values()];

  return (
    <>
      <div className="h-full relative">
        {allContacts
          .sort((a, b) => {
            if (
              Date.parse(a.lastMessageTimeStamp) >=
              Date.parse(b.lastMessageTimeStamp)
            )
              return -1;
            else {
              return 1;
            }
          })
          .map(
            (contact) =>
              contact.interactorId && (
                <Interactors
                  interactorName={contact.contactName}
                  interactorId={contact.interactorId}
                  key={contact.interactorId}
                  active={
                    contact.interactorId === selectedInteractor ? true : false
                  }
                  imgUrl={contact.imgUrl}
                />
              )
          )}
      </div>
      <div className="sticky bottom-0 px-2 py-6 flex items-center justify-center text-green-800 space-x-2">
        <strong
          className="text-2xl rounded-2xl bg-gray-200 px-2  cursor-pointer "
          onClick={() => {
            dispatch({ type: "contact/opened", payload: true });
            dispatch({
              type: "interactor/selected",
              payload: {
                interactorId: null,
                interactorName: "",
              },
            });
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
