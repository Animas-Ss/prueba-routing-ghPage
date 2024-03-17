import { Link } from "react-router-dom"

export const Navigation = () => {
  return (
    <div>
        <ul className="bg-blue-800 flex gap-5 text-white ">
            <Link to='/prueba-routing-ghPage/'>Home</Link>
            <Link to='/prueba-routing-ghPage/about'>About</Link>
            <Link to='/prueba-routing-ghPage/contact'>Contact</Link>
        </ul>
    </div>
  )
}
