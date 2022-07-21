import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../Header";
import "./AreaMeal.css";


const AreaMeal = () => {

  const [areaMeal, setAreaMeal] = useState([])
  const [selectedArea, setSelectedArea] = useState("")
  const [mealList, setMealList] = useState([])
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    getAreaMeal()
  }, [])

  const getAreaMeal = () => {
    axios.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
      .then(res => {
        if (res.data) {
          setAreaMeal(res.data.meals)
          setSelectedArea(res.data.meals[0].strArea)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleArea = (e) => {
    // console.log(e.target.value)
    setSelectedArea(e.target.value)
  }


  useEffect(() => {
    if (selectedArea) {
      getFoodByArea()
    }
  }, [selectedArea])

  const getFoodByArea = () => {
    setLoading(true)
    axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?a=" + selectedArea)
      .then(res => {
        if (res.data) {
          setMealList(res.data.meals)
          setLoading(false)
        }
      })
      .catch(err => {
        console.log(err)
        setLoading(false)
      })
  }

  console.log(mealList)


  return (
    <>
      <Header />
      <div className="container-fluid py-3 content-section ">

        {/* select-section */}
        <select className="form-control w-75 m-auto" onChange={(e) => handleArea(e)} value={selectedArea}>
          <option>select</option>
          {areaMeal.map((d, n) => {
            return (
              <option value={d.strArea}>{d.strArea}</option>
            )
          })}
        </select>

        {/* contnet-section */}
        <div className="">
          <div className="row mt-3">
            {loading ?
              <div className="text-center text-white my-3">Loading...</div>
              : mealList.map((data, index) => {
                return (
                  <div className="col-sm-6 col-md-3 my-2" >
                    <div className="card border rounded-4">
                      <div className="card-body meal-body p-0 ">
                        <img className="w-100 border rounded-4" src={data.strMealThumb} />
                        <div className="text-center meal-name w-100 h-50 border rounded-top rounded-4"><strong>{data.strMeal}</strong></div>
                      </div>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </>
  )
}

export default AreaMeal;