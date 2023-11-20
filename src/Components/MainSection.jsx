import React from 'react'
import './MainSection.css'
import background from "../Images/backgorund image.jpg"
import {FaStarOfDavid,FaEye} from "react-icons/fa"
import {BsHandThumbsUp,BsFillSuitHeartFill} from "react-icons/bs"
import { MdOutlineDiamond } from "react-icons/md";
import { TiTickOutline } from "react-icons/ti";
import JsonData from '../Data.json';
function MainSection() {
  const ValueArr = JsonData[0];
  return (
    <div className='mainSection'>
      <div className="bridgeImage">
        <img id='bridge' width="100%" height="250px" src={background} alt="" />
      </div>
      <div className="infoSection">
        <div className="profileImage">
            <img src={ValueArr.Image} alt="img" />
        </div>
        <div className="infos">
            <p className='name'>{ValueArr.Name}<MdOutlineDiamond /><TiTickOutline/></p>
            <div className='followInfo'>
                <div className='FollowNumber'>
                    <p className='first'>{ValueArr.Followers}</p>
                    <p>Followers</p>
                </div>
                <div className='tags'>
                    <p className='first'>{ValueArr.Following}</p>
                    <p>Following</p>
                </div>
            </div>
            <div>
                <p>{ValueArr.Title}</p>
                <a href="/" className="social">{ValueArr.Socials}</a>
            </div>
            <div className='icons'>
                <FaStarOfDavid className='blue'></FaStarOfDavid>
                <p>{ValueArr.Bookmark}</p>
                <BsHandThumbsUp className='yellow'></BsHandThumbsUp>
                <p>{ValueArr.Like}</p>
                <FaEye className='grey'></FaEye>
                <p>{ValueArr.Seen}</p>
                <BsFillSuitHeartFill className='red'></BsFillSuitHeartFill>
                <p>{ValueArr.Heart}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MainSection
