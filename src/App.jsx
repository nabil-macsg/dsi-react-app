import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Dashboard from './pages/Tools/Dashboard'
import Tools from './pages/Tools/Tools'
import AddDispatch from './pages/Tools/AddDispatch'
import AddPm from './pages/PM/AddPm'
import ReceiptForm from './pages/Tools/ReceiptForm'
import StripDown from './pages/PM/StripDown'
import Movements from './pages/Tools/Movements'
import RepositoryInsights from './pages/Tools/RepositoryInsights'
import AddTool from './pages/Tools/AddTool'
import AllPm from './pages/PM/AllPm'
import AllDispatch from './pages/Tools/AllDispatch'
import Receipts from './pages/Tools/Receipts'
import Retirements from './pages/Tools/Retirements'
import AddRetirement from './pages/Tools/AddRetirement'
import SpareParts from './pages/Tools/SpareParts'
import SecurityLogin from './pages/SecurityLogin'

import Landing from './pages/Landing'
import Login from './pages/Login'

export default function App() {

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Landing />
    },
    {
      path: '/dsi-login',
      element: <Login />
    },
    {
      path: '/security-login',
      element: <SecurityLogin />
    },
    {
      path: '/dashboard',
      element: <Dashboard />
    },
    {
      path: '/tools',
      element: <Tools />
    },
    {
      path: '/tools/add',
      element: <AddTool />
    },
    {
      path: '/movements',
      element: <Movements />
    },
    {
      path: '/repository-insights',
      element: <RepositoryInsights />
    },
    {
      path: '/dispatch/all',
      element: <AllDispatch />
    },
    {
      path: '/dispatch/add',
      element: <AddDispatch />
    },
    {
      path: '/pm',
      element: <AllPm />
    },
    {
      path: '/pm/add',
      element: <AddPm />
    },
    {
      path: '/pm/strip-down',
      element: <StripDown />
    },
    {
      path: '/pm/spareparts',
      element: <SpareParts />
    },
    {
      path: '/receipts',
      element: <Receipts />
    },
    {
      path: '/receipt/detail',
      element: <ReceiptForm />
    },
    {
      path: '/tools/retirements',
      element: <Retirements />
    },
    {
      path: '/tools/retirements/add',
      element: <AddRetirement />
    }
  ])

  return <RouterProvider router={appRouter} />
}