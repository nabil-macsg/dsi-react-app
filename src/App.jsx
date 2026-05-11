import Layout from './components/Layout'
import Dashboard from './pages/Tools/Dashboard'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Tools from './pages/Tools/Tools'
import AddDispatch from './pages/Tools/AddDispatch'
import AddPm from './pages/PM/AddPm'
import ReceiptForm from './pages/Tools/ReceiptForm'
import StripDown from './pages/PM/StripDown'
import Movements from './pages/Tools/Movements'
import RepositoryInsights from './pages/Tools/RepositoryInsights'
import AddTool from './pages/Tools/AddTool'

export default function App() {
  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Dashboard/>
    },
    {
      path:"/tools",
      element:<Tools/>
    },
     {
      path:"/tools/add",
      element:<AddTool/>
    },
    {
      path:"/movements",
      element:<Movements/>
    },
    {
      path:"/repository-insights",
      element:<RepositoryInsights/>
    },
    
    {
      path:"dispatch/add",
      element:<AddDispatch/>
    },
    {
      path:"pm/add",
      element:<AddPm/>
    },
    {
      path:"pm/stripdown",
      element:<StripDown/>
    },
    {
      path:"reciept/add",
      element:<ReceiptForm/>
    },
     {
      path:"/movements",
      element:<Movements/>
    }
  ])
  return (
<RouterProvider router={appRouter}>

</RouterProvider>
  )
}
