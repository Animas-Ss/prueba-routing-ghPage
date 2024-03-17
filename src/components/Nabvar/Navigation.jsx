import { Link } from "react-router-dom"

export const Navigation = () => {
  return (
    <div>
        <ul className="bg-blue-800 flex gap-5 text-white ">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </ul>
    </div>
  )
}
