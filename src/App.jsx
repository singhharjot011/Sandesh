import "./App.css";
import MessageContent from "./components/MessageContent";
import AppLayout from "./pages/AppLayout";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <AppLayout />
      <MessageContent />
    </>
  );
}

export default App;
