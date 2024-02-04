import Interactors from "./Interactors";

import { useChat } from "../contexts/chatContext";

function Sidebar() {
  const { data, selectedInteractor } = useChat();
  const interactorsMap = new Map(data.map((c) => [c.interactorId, c]));
  const allInteractors = [...interactorsMap.values()];

  return (
    <div className="w-1/5 h-full border-r sticky top-0">
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
  );
}

export default Sidebar;
