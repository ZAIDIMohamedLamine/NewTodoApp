import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import TodosPages from "./pages/Todos";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route element={<RequireAuth />}>
          <Route path="/todos" element={<TodosPages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
