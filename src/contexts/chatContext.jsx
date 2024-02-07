import { createContext, useContext, useReducer } from "react";

const FAKE_DATA = [
  {
    id: 1,
    interactorId: "e0be74d0-c2a7-4f04-9789-c9607aa338a9",
    interactorName: "John Doe",
    isSender: false,
    timestamp: "2023-01-15T12:34:56.789Z",
    message: "Hello, how are you?",
  },
  {
    id: 2,
    interactorId: "e0be74d0-c2a8-4f04-9779-c9607aa338a9",
    interactorName: "Alice",
    isSender: false,
    timestamp: "2023-01-15T12:35:10.123Z",
    message: "Hi John! I'm doing well, thank you!",
  },
  {
    id: 3,
    interactorId: "e0be74d0-c2a7-4f04-9789-c9607aa338a9",
    interactorName: "John Doe",
    isSender: false,
    timestamp: "2023-01-15T12:36:24.567Z",
    message: "That's great to hear!",
  },
  {
    id: 4,
    interactorId: "e0be74d0-c2a8-4f04-9779-c9607aa338a9",
    interactorName: "Alice",
    isSender: false,
    timestamp: "2023-01-15T12:37:45.678Z",
    message: "How about you?",
  },
  {
    id: 5,
    interactorId: "e0be74d0-c2a8-4f04-9779-c9607aa338a9",
    interactorName: "Alice",
    isSender: true,
    timestamp: "2023-01-15T12:39:00.000Z",
    message: "I'm doing well too, thanks!",
  },
];

const CONTACTS = [
  {
    interactorId: "e0be74d0-c2a7-4f04-9789-c9607aa338a9",
    contactName: "John Doe",
    contactNumber: "1234567890",
    lastMessageTimeStamp: "2023-01-15T12:36:24.567Z",
  },
  {
    interactorId: "e0be74d0-c2a8-4f04-9779-c9607aa338a9",
    contactName: "Alice",
    contactNumber: "9876543210",
    lastMessageTimeStamp: "2023-01-15T12:39:00.000Z",
  },
];

const initialState = {
  selectedInteractor: null,
  selectedInteractorName: "",
  data: FAKE_DATA,
  contacts: CONTACTS,
  curChat: {},
  myText: "",
  openContact: false,
};

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
      if (state.selectedInteractor === action.payload) {
        return {
          ...state,
          selectedInteractor: null,
          selectedInteractorName: "",
        };
      }
      return {
        ...state,
        selectedInteractor: action.payload.interactorId,
        selectedInteractorName: action.payload.interactorName,
      };
    case "chat/loaded":
      return { ...state, curChat: action.payload };
    case "typed/text":
      return { ...state, myText: action.payload };
    case "data/updated":
      return {
        ...state,
        data: action.payload.data,
        contacts: action.payload.contacts,
      };
    case "contact/opened":
      return { ...state, openContact: action.payload };
    case "contact/added":
      return { ...state, contacts: action.payload };
    default:
      throw new Error("Invalid Action");
  }
}

function ChatProvider({ children }) {
  const [
    {
      selectedInteractor,
      selectedInteractorName,
      curChat,
      myText,
      data,
      openContact,
      contacts,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <ChatContext.Provider
      value={{
        data,
        dispatch,
        selectedInteractor,
        selectedInteractorName,
        curChat,
        myText,
        openContact,
        contacts,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export { ChatProvider, useChat };
