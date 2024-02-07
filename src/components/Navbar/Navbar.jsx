import { useDispatch } from "react-redux"
import { setSearch } from "../../redux/slices/SearchSlice"

const Navbar = () => {
  const dispatch=useDispatch()
  return (
    <nav className="flex flex-col lg:flex-row justify-between py-3 mb-10 mx-6">
        <div>
            <h3 className="text-xl font-bold text-grey-600">{new Date().toUTCString().slice(0,16)}</h3>
            <h1 className="text-2xl font-bold">Restaurent</h1>
        </div>
        <div>
            <input onChange={(e)=>dispatch(setSearch(e.target.value))} type="search" name="search" id="search" placeholder="Search here" autoComplete="off"
            className="p-3 border border-grey-400 text-sm rounded-lg outline-none w-full lg:w-[25vw]"/>
        </div>
    </nav>
  )
}

export default Navbar