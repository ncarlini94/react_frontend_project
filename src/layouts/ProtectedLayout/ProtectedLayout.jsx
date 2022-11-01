import { Outlet } from "react-router-dom"
import NavBar from "../../components/NavBar/NavBar"

const ProtectedLayout = () => {
  return (
    <div>
        <NavBar />
        <Outlet />
    </div>
  )
}

export default ProtectedLayout