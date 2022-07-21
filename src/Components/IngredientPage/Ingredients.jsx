import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../Header";
import "./Ingredients.css"

const Ingredients = () => {
  const [mealData, setMealData] = useState([])
  const [selectedMeal, setSelectedMeal] = useState([])
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    getIngredientsData()
  }, [])

  const getIngredientsData = () => {
    setLoading(true)
    axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
      .then(res => {
        if (res.data) {
          setMealData(res.data.meals)
          handleMeal(res.data.meals[0].strIngredient)
          setLoading(false)
        }
      })
      .catch(err => {
        console.log(err);
        setLoading(false)
      })
  }

  const handleMeal = (data) => {
    axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?i=" + data)
      .then(res => {
        setSelectedMeal(res.data.meals)
      })
      .catch(err => {
        console.log(err)
      })
  }

  console.log(mealData)
  console.log(selectedMeal)

  return (
    <>
      <Header />
      <div className="container-fluid content-section">
        <div className="row">
          {/* left-side */}
          <div className="col-xs-6 col-sm-3 ">
            <div className="ingredient-left">
              {mealData.map((d, n) => {
                return (
                  <div className="card my-3 text-center border border-info" onClick={() => handleMeal(d.strIngredient)}>
                    <div className="card-body">{d.strIngredient}</div>
                  </div>
                )
              })}
            </div>
          </div>
          {/* right-side */}
          <div className="col-xs-6 col-sm-9">
            <div className="ingredient-right">
              <div className="row">
                {loading ?
                  <div className="text-center text-white my-3">Loading...</div> :
                  selectedMeal.map((d, n) => {
                    return (
                      <div className="col-sm-6 col-md-4 ">
                        <div className="card my-2 border border-info rounded-4 border-2  ">
                          <div className="card-body ingredient-body p-0 w-100">
                            <img src={d.strMealThumb} className="w-100 border rounded-4 " />
                            <div className="ingredient-name w-100 h-100  border rounded-4 ">
                              <div className="p-5">{d.strMeal}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}



export default Ingredients;