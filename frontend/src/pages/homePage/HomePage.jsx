import {useContext} from "react"
import SearchBar from '../../components/searchBar/SearchBar'
import './HomePage.scss'
import { AuthContext } from "../../context/AuthContext"

function HomePage() {
  
  const {currentUser} = useContext(AuthContext);
  return (
    <div className='homepage'>
       <div className="textContainer">
            <div className="wrapper">
                <h1 className="title">Find Real Estate & Get Your Dream Place </h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
                <SearchBar />
                <div className="boxes">
                    <div className="box">
                        <h1>16+</h1>
                        <h2>Years of Experience</h2>
                    </div>
                    <div className="box">
                        <h1>200</h1>
                        <h2>Award Gained</h2>
                    </div>
                    <div className="box">
                        <h1>1200+</h1>
                        <h2>Property Ready</h2>
                    </div>
                </div>
            </div>
       </div>
       <div className="imgContainer">
            <img src="/bg.png" alt=""></img>
       </div>
    </div>
  )
}

export default HomePage
