import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.pages";
import New from "./pages/new/New.pages";
import List from "./pages/list/List.pages";
import Login from "./pages/login/Login.pages";
import Single from "./pages/single/Single.pages";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route path="list" element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path=":new" element={<New />} />
            </Route>
            <Route path="products">
              <Route path="list" element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path=":new" element={<New />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
