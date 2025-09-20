import { createRoot } from "react-dom/client";
import { AlbumList } from "./components/AlbumList";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
      <AlbumList />
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
