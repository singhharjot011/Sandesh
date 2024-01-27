import { createContext, useContext, useState } from "react";

const FAKE_DATA = [
  {
    id: 1,
    senderId: "user123",
    senderName: "John Doe",
    timestamp: "2023-01-15T12:34:56.789Z",
    message: "Hello, how are you?",
  },
  {
    id: 2,
    senderId: "user456",
    senderName: "Alice",
    timestamp: "2023-01-15T12:35:10.123Z",
    message: "Hi John! I'm doing well, thank you!",
  },
  {
    id: 3,
    senderId: "user123",
    senderName: "John Doe",
    timestamp: "2023-01-15T12:36:24.567Z",
    message: "That's great to hear!",
  },
  {
    id: 4,
    senderId: "user456",
    senderName: "Alice",
    timestamp: "2023-01-15T12:37:45.678Z",
    message: "How about you?",
  },
  {
    id: 5,
    receiverId: "yourSenderId",
    receiverName: "Your Name",
    timestamp: "2023-01-15T12:39:00.000Z",
    message: "I'm doing well too, thanks!",
  },
];

const ChatContext = createContext();

const useChat = function () {
  const context = useContext(ChatContext);
  if (context === undefined)
    throw new Error("PostContext was used outside of the PostProvider");
  return context;
};

function ChatProvider({ children }) {
  const [selectedSender, setSelectedSender] = useState(null);

  return (
    <ChatContext.Provider value={{ data: FAKE_DATA }}>
      {children}
    </ChatContext.Provider>
  );
}

export { ChatProvider, useChat };
