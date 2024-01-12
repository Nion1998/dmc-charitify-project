import logo from "./logo.svg";
import "./App.css";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import MainLayout from "./view/main-layout/MainLayout";
import HomePage from "./view/homepage/HomePage";
import EventsPage from "./view/event/EventsPage";
import EventsDetail from "./view/event/EventsDetail";
import AboutPage from "./view/aboutpage/AboutPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "",
          element: <HomePage></HomePage>,
        },
        {
          path: "events",
          element: <EventsPage></EventsPage>,
        },
        {
          path: "events-detail",
          element: <EventsDetail></EventsDetail>,
        },
        {
          path: "about",
          element: <AboutPage></AboutPage>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <div>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
