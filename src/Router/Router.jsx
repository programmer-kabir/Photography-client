import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/Home";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import Main from "../Layout/Main";
import ClassPage from "../Pages/ClassPage/ClassPage";
import ClassPageDetails from "../Pages/ClassPage/ClassPageDetails";
import Dashboard from "../Layout/Dashboard";
import EnrollClass from "../Pages/Student/EnrollClass/EnrollClass";
import SelectedClass from "../Pages/Student/SelectedClass/SelectedClass";
import ManageUser from "../Pages/Admin/ManageUser/ManageUser";
import ManageClasses from "../Pages/Admin/ManageClasses/ManageClasses";
import AddItem from "../Pages/Instructor/AddItem/AddItem";
import MyClass from "../Pages/Instructor/MyClass/MyClass";
import PrivateRoute from "./PrivetRoute";
import TopInstractor from "../Pages/Home/TopInstractor/TopInstractor";
import Payment from "../Pages/Student/Payment/Payment";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'register',
            element:<Register></Register>
        },
        {
            path:'classes',
            element:<ClassPage></ClassPage>,
            // loader:() => fetch("http://localhost:5000/class")
        },
        {
            path:'instructor',
            element:<TopInstractor></TopInstractor>
            
        },
        {
          path:'classesDetails/:id',
          element:<ClassPageDetails></ClassPageDetails>,
          loader:({params}) => fetch(`http://localhost:5000/class/${params.id}`)
        },
        
      ]
    },
    {
      path:'/dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:'selectedClass',
          element:<SelectedClass></SelectedClass>
        },
        {
          path:'enrollClass',
          element:<EnrollClass></EnrollClass>
        },
        {
          path:'payment/:id',
          element:<Payment></Payment>
          
        },
        {
          path:'manageuser',
          element:<ManageUser></ManageUser>
        },
        {
          path:'manageClass',
          element:<ManageClasses></ManageClasses>
        },
        {
          path:'addclass',
          element:<AddItem></AddItem>
        },
        {
          path:'myclass',
          element:<MyClass></MyClass>
        }
      ]
    },
    
  ]);