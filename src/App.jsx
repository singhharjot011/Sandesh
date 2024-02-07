import "./App.css";
import AppLayout from "./pages/AppLayout";
import { ChatProvider } from "./contexts/chatContext";

function App() {
  return (
    <>
      <ChatProvider>
        <AppLayout />
      </ChatProvider>
      <div></div>
    </>
  );
}

export default App;
