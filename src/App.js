import { RouterProvider } from "react-router-dom";
import router from "./router/Routes";


export default function App() {
  return (
    <div className="bg-gray-900 text-white">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}
