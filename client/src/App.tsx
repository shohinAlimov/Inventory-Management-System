import { BrowserRouter, Route, Routes } from "react-router";
import UsersPage from "./pages/UsersPage";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<UsersPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
