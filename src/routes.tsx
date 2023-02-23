import { createBrowserRouter } from "react-router-dom";
import { Tweet } from "./components/Tweet";
import { Status } from "./pages/Status";
import { Timeline } from "./pages/Timeline";

export const router = createBrowserRouter([
  // each object is a page
  {
    path: "/",
    element: <Timeline/>
  },
  {
    path: "/tweet",
    element: <Status/>
  }
 ]
)