import { createContext, useContext, useReducer } from "react";

const FAKE_DATA = [
  {
    id: 1,
    interactorId: "user123",
    interactorName: "John Doe",
    isSender: false,
    timestamp: "2023-01-15T12:34:56.789Z",
    message: "Hello, how are you?",
  },
  {
    id: 2,
    interactorId: "user456",
    interactorName: "Alice",
    isSender: false,
    timestamp: "2023-01-15T12:35:10.123Z",
    message: "Hi John! I'm doing well, thank you!",
  },
  {
    id: 3,
    interactorId: "user123",
    interactorName: "John Doe",
    isSender: false,
    timestamp: "2023-01-15T12:36:24.567Z",
    message: "That's great to hear!",
  },
  {
    id: 4,
    interactorId: "user456",
    interactorName: "Alice",
    isSender: false,
    timestamp: "2023-01-15T12:37:45.678Z",
    message: "How about you?",
  },
  {
    id: 5,
    interactorId: "user456",
    interactorName: "Alice",
    isSender: true,
    timestamp: "2023-01-15T12:39:00.000Z",
    message: "I'm doing well too, thanks!",
  },
];

const initialState = { selectedInteractor: null, curChat: {} };

const ChatContext = createContext();

const useChat = function () {
  const context = useContext(ChatContext);
  if (context === undefined)
    throw new Error("PostContext was used outside of the PostProvider");
  return context;
};

function reducer(state, action) {
  switch (action.type) {
    case "interactor/selected":
      return { ...state, selectedInteractor: action.payload };
    case "chat/loaded":
      return { ...state, curChat: action.payload };

    default:
      throw new Error("Invalid Action");
  }
}

function ChatProvider({ children }) {
  const [{ selectedInteractor, curChat }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <ChatContext.Provider
      value={{ data: FAKE_DATA, dispatch, selectedInteractor, curChat }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export { ChatProvider, useChat };
