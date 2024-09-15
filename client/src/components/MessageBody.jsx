import MessageContent from "./MessageContent";
import MessageInput from "./MessageInput";
import { useChat } from "../contexts/chatContext";
import { useEffect } from "react";

function MessageBody() {
  const { dispatch, chats, curChatMessages, selectedInteractor } = useChat();

  useEffect(() => {
    const fetchChatMessages = async () => {
      try {
        const res = await fetch(
          `http://127.0.0.1:3000/api/v1/messages/${"66e66264a92679c050931965"}`,
          {
            method: "GET",
          }
        );

        if (!res.ok) {
          throw new Error(`Failed to fetch messages: ${res.statusText}`);
        }

        const data = await res.json();
        dispatch({
          type: "curChatMessages/loaded",
          payload: data.data.messages,
        });
      } catch (err) {
        console.error("Error fetching messages:", err);
      }
    };
    // dispatch({
    //   type: "chat/loaded",
    //   payload: {},
    // });

    fetchChatMessages();
  }, [selectedInteractor, chats, dispatch, curChatMessages]);

  // function getMilliseconds(dateTimeString) {
  //   return new Date(dateTimeString).getTime();
  // }

  if (!selectedInteractor) {
    return (
      <div className="flex justify-center items-center  text-gray-800 flex-grow ">
        <strong className="w-max text-xl">
          Select someone from the sidebar to start chat
        </strong>
      </div>
    );
  } else {
    return (
      <>
        {curChatMessages.map((message, i, arr) => (
          //   const todayDate = new Date();
          //   const newDate = new Date(arr[i].timestamp);
          //   const oldDate = new Date(arr[i - 1]?.timestamp);

          //   <span>
          //   {todayDate.getDate() === newDate.getDate() &&
          //     todayDate.getDate() !== oldDate.getDate() &&
          //     "Today"}
          // </span>

          <MessageContent key={message._id} message={message} />
        ))}
      </>
    );
  }
}

export default MessageBody;
