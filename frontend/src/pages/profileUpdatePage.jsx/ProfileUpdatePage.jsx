import "./ProfileUpdatePage.scss"
import { useContext } from "react";
import {AuthContext} from "../../context/AuthContext"

function ProfileUpdatePage() {

  const {currentUser, updateUser} = useContext(AuthContext);
  return (
    <div className="profileUpdatePage">
        <div className="formContainer">
            <form>
                <h1>
                    Update Profile
                </h1>
                <div className="item">
                    <label htmlFor="username">Username</label>
                    <input id="username" name="username" type="text" defaultValue={currentUser.username}></input>
                </div>
                <div className="item">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="text" defaultValue={currentUser.email}></input>
                </div>
                <div className="item">
                    <label htmlFor="password">Password</label>
                    <input id="upassword" name="password" type="password"></input>
                </div>
                <button>
                    Update
                </button>
            </form>
        </div>
        <div className="sideContainer">
            <img src={currentUser.avatar || "/noavatar.png"} alt="" className="avatar" />
        </div>
      
    </div>
  )
}

export default ProfileUpdatePage
