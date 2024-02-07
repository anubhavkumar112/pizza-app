import FoodCard from "../FoodCard/FoodCard"
import FoodData from '../../data/FoodData'
import { useSelector } from "react-redux"


const FoodItem = () => {
  const category=useSelector((state)=>state.category.category)
  const search=useSelector((state)=>state.search.search)
  return (
    <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
        {
          FoodData.filter((food)=>{
            if(category==="All"){
             
              return food.name.toLowerCase().includes(search.toLowerCase())
            }else{
              
              return (
              category===food.category && food.name.toLowerCase().includes(search.toLowerCase()))
            }
          }).map((food)=>{return (
            <FoodCard 
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            rating={food.rating}
            desc={food.desc}
            img={food.img}
            />
          )})
        }
        
    </div>
  )
}

export default FoodItem


  
    

  
