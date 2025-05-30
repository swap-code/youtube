import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import React from "react";
import store from "./utils/store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/Body/MainContainer/MainCOntainer";
import WatchPage from "./components/Body/MainContainer/WatchPage/WatchPage";
import Demo from "./components/Demo/Demo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      { path: "/", element: <MainContainer/> },
      {path: "/watch", element:<WatchPage />},
      {path:"/demo", element:<Demo/>}
    ],
  },
  {

  }
]);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}

export default App;
