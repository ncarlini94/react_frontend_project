import { Outlet, useLocation } from "react-router-dom"

const MovieDetailPage = () => {
  const location = useLocation()
  return (
    <div>
      {location.pathname.includes('video') ? <Outlet /> : <div>MovieDetailPage</div>}
      
    </div>
  )
}

export default MovieDetailPage