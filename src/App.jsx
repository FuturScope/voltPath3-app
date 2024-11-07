import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Settings from "./components/Settings";
import Overview from "./components/Overview";
import DashBoardLayout from "./layouts/dashBoardLayout";
import Favourites from "./components/Favourites";
import Bookmarks from "./components/Bookmarks";
import Trips from "./components/Trips";
import Maps from "./components/Maps";
import Reservation from "./components/Reservation";
import LogoutPopup from "./components/LogoutPopup";
import BookedSlots from "./components/BookedSlots";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },

    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/maps",
      element: <Maps />,
    },
    {
      path: "/reservation",
      element: <Reservation />,
    },
    {
      path: "/dashboard",
      element: <DashBoardLayout />,
      children: [
        {
          index: true,
          element:<Overview/>
        },
        {
          path:"favourites",
          element: <Favourites/>,
        },
        {
          path: "booked-slots",
          element:<BookedSlots/>,
          
        },
        {
          path:"bookmarks",
          element: <Bookmarks/>,
        },
        {
          path:"maps",
          element: <Maps/>,
        },
        // {
        //   path:"inbox",
        //   element: <Inbox/>,
        // },
        {
          path:"trips",
          element: <Trips/>,
        },
        {
          path:"settings",
          element: <Settings/>,
        },
        {
          path:"logout",
          element: <LogoutPopup/>,
        },
      ]
    }
  ]);

  return <RouterProvider router= {router} />
}

export default App;












