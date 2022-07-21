import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import './Landing.css'

const Landing = () => {

  const [foodList, setFoodList] = useState([])

  const navigate = useNavigate()

  // for login validation
  useEffect(() => {
    const token = window.localStorage.getItem("token")
    console.log(token)
    if (token == null) {
      alert("Please login again")
      navigate("/")
    }
  }, [])

  // getting foodList thru API
  useEffect(() => {
    getFoodList()
  }, [])

  const getFoodList = () => {
    axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(res => {
        if (res.data) {
          setFoodList(res.data.categories)
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  const handleCategoryDetails = (category) => {
    navigate('/category/' + category)
  }


  console.log(foodList);


  return (
    <>
      <Header />
      <div className="container-fluid content-section py-3">
        <div>
          <input className="form-control text-center" placeholder="Ask me something..??" />
          <div className="">
            <div className="row">
              {
                foodList.map((data, index) => {
                  return (
                    <div className="col-sm-6 col-md-3 my-3" >
                      <div className="card border rounded-4">
                        <div className="card-body p-0 " onClick={() => handleCategoryDetails(data.strCategory)}>
                          <img className="w-100 border rounded-4" src={data.strCategoryThumb} />
                          <div className="category text-center w-75 h-25"><strong>{data.strCategory}</strong></div>
                          <div className="description w-100">{data.strCategoryDescription}</div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default Landing;