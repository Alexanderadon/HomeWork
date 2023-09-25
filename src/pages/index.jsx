import { Paths } from "../widgets/Paths/index";
import { createBrowserRouter } from "react-router-dom";
import { LectureOne } from "../pages/LectureOne/index";
import { LectureTwo } from "./LectureTwo";
import { App } from "../app/App";

export const router = createBrowserRouter([
  {
    path: Paths.home,
    element: <App />,
  },
  {
    path: Paths.lectureOne,
    element: <LectureOne />,
  },
  {
    path: Paths.lectureTwo,
    element: <LectureTwo />,
  },
]);
