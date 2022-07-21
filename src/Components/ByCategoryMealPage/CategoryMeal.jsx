import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";
import "./CategoryMeal.css"


const CategoryMeal = () => {

  const [mealData, setMealData] = useState([])

  const params = useParams()
  console.log(params)
  let name = params.name;

  useEffect(() => {
    getFoodByCategory()
  }, [])

  const getFoodByCategory = () => {
    axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + name)
      .then(res => {
        // console.log(res.data)
        if (res.data) {
          setMealData(res.data.meals)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  console.log(mealData)



  return (
    <>
      <Header />
      <div className="container-fluid content-section">
        <div className="row">
          {mealData.map((data, index) => {
            return (
              <div className="col-sm-6 col-md-3 my-3" >
                <div className="card border rounded-4">
                  <div className="category-body card-body p-0 ">
                    <img className="w-100 border rounded-4" src={data.strMealThumb} />
                    <div className="category-name text-center w-100 h-50 rounded-top rounded-4"><strong>{data.strMeal}</strong></div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default CategoryMeal;