import { createContext, useContext, useEffect, useReducer } from "react";

const initialState = {
  selectedInteractor: null,
  loggedInUser: null,
  typedText: "",
  chats: [],
  users: [],
  messages: [],
  curChatMessages: [],
};

const ChatContext = createContext();

const useChat = function () {
  const context = useContext(ChatContext);
  if (context === undefined)
    throw new Error("ChatContext was used outside of the ChatProvider");
  return context;
};

function reducer(state, action) {
  switch (action.type) {
    case "chats/loaded":
      return { ...state, chats: action.payload };
    case "users/loaded":
      return { ...state, users: action.payload };
    case "messages/loaded":
      return { ...state, messages: action.payload };
    case "interactor/selected":
      return { ...state, selectedInteractor: action.payload };
    case "loggedInUser/loaded":
      return { ...state, loggedInUser: action.payload };
    case "typedText/typing":
      return { ...state, typedText: action.payload };
    case "curChatMessages/loaded":
      return { ...state, curChatMessages: action.payload };
    default:
      throw new Error("Invalid Action");
  }
}

function ChatProvider({ children }) {
  useEffect(() => {
    const fetchChatData = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:3000/api/v1/chats`, {
          method: "GET",
        });

        if (!res.ok) {
          throw new Error(`Failed to fetch chats: ${res.statusText}`);
        }

        const data = await res.json();
        dispatch({ type: "chats/loaded", payload: data.data.chats }); // Dispatch action to update chats
      } catch (err) {
        console.error("Error fetching chats:", err);
      }
    };

    const fetchUserData = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:3000/api/v1/users`, {
          method: "GET",
        });

        if (!res.ok) {
          throw new Error(`Failed to fetch users: ${res.statusText}`);
        }

        const data = await res.json();
        dispatch({ type: "users/loaded", payload: data.data.users }); // Dispatch action to update users
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };

    const fetchLoggedInUser = async () => {
      try {
        const res = await fetch(
          `http://127.0.0.1:3000/api/v1/users/${"66e6616406d5ee27146a7ec6"}`,
          {
            method: "GET",
          }
        );

        if (!res.ok) {
          throw new Error(`Failed to fetch logged in user: ${res.statusText}`);
        }

        const data = await res.json();
        dispatch({ type: "loggedInUser/loaded", payload: data.data.user });
      } catch (err) {
        console.error("Error fetching logged in User:", err);
      }
    };

    fetchChatData();
    fetchUserData();
    fetchLoggedInUser();
  }, []);

  const [
    {
      chats,
      users,
      selectedInteractor,
      messages,
      loggedInUser,
      typedText,
      curChatMessages,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <ChatContext.Provider
      value={{
        chats,
        dispatch,
        users,
        selectedInteractor,
        messages,
        loggedInUser,
        typedText,
        curChatMessages,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export { ChatProvider, useChat };
