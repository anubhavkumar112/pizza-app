import Cart from "../components/Cart/Cart"
import CategoryMenu from "../components/CategoryMenu/CategoryMenu"
import FoodItem from "../components/FoodItem/FoodItem"
import Navbar from "../components/Navbar/Navbar"


const Home = () => {
  return (
    <>
    <Navbar/>
    <CategoryMenu/>
    <FoodItem/>
    <Cart/>
    </>
  )
}

export default Home