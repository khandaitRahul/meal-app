import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const token = window.localStorage.getItem("token")
  const navigate = useNavigate()

  const handleArea = () => {
    navigate("/area")
  }

  const handleIngredients = () => {
    navigate("/ingredients")
  }

  const handleHome = () => {
    navigate("/home")
  }

  const handleLogout = () => {
    window.localStorage.clear()
    navigate("/")
  }

  // const handlecategory = () => {
  //   navigate("/category")
  // }

  return (
    <div className="Header p-1 px-3">

      <div className="brand pt-1 fs-3" onClick={handleHome}><strong>Quick Food</strong></div>
      <div className="mt-1">
        <button className="btn btn-info m-1" onClick={handleIngredients}>Ingredients</button>
        <button className="btn btn-info m-1" onClick={handleArea}>Area</button>
        {/* <button className="btn btn-danger m-1" onClick={handlecategory}>Category</button> */}
      </div>

      <div className="profile-container">
        {token !== null && <img src="https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg"
          className="profile-img"
          alt="icon"
          onClick={handleLogout}
        />}
      </div>
    </div>
  )
}

export default Header;