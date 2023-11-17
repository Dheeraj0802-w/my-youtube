import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Head from "./component/Head";
import Body from "./component/Body";
import MainContainer from "./component/MainContainer";
import WatchPage from "./component/WatchPage";
import { Provider } from "react-redux";
import store from "./utils/store";

import Login from "./Authentication/Login";
import Signup from "./Authentication/Signup";
import { UserAuthContextProvider } from "./context/UserAuthContext";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "/Body",
    element: <Body />,
    children: [
      {
        path: "/Body",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <div className="text-3xl ... static">
      
         <Head />
        <UserAuthContextProvider>
          <RouterProvider router={appRouter} />
        </UserAuthContextProvider>
        
      </div>
    </Provider>
  );
}

export default App;
