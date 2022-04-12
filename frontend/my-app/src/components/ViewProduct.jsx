import React, { useState, useEffect } from "react";
import "./Medicine.css";
import App from "../App";
import "./ViewProduct.css";
import ReactStars from "react-rating-stars-component";
import ProductBoxes from "./ProductBoxes";
import PostAddIcon from "@material-ui/icons/PostAdd";
import axios from "axios";
import ReactDOM from "react-dom";
import Header from "./Header";
const ViewProduct = (props) => {
  const [rating, setRating] = useState(0);
  const ratingChanged = (newRating) => {
    console.log(newRating);
    setRating(newRating);
  };
  const [comment, setComment] = useState("");
  const getComment = (e) => {
    setComment(e.target.value);
    console.log(e.target.value);
  };
  console.log(props);
  const [data, setData] = useState([]);

  const postComm = async () => {
    if (props.userId) {
      await axios
        .post("http://localhost:7000/postComm", {
          userId: props.userId,
          user: props.user,
          comment: comment,
          rating: rating,
          productId: props.url._id,
        })
        .then((res) => {
          console.log(res.data);
        });
    } else if (props.userId === undefined) {
      alert("Login to post review");
    }
  };

  return (
    <>
    <Header user={props.user} userId={props.userId}/>
      <App user={props.user} userId={props.userId} />
      <div class="ro center" style={{paddingTop:"6rem"}}>
        <div class="cent">
          {" "}
          <div class="ratingSoFar">
            {" "}
            <div class="cusRating">Customers Ratings So far : </div>
            <span>
              <ReactStars
                id="rate0"
                count={5}
                isHalf={true}
                size={24}
                edit={false}
                activeColor="#ffd700"
                value={props.url.Rating / props.url.RatingCount}
              />
            </span>
            {/* <span id="rate">{props.url.Rating / props.url.RatingCount}</span> */}
          </div>
          <img src={props.url.ImageUrl} width="200px" height="300px" />
          <div>Price: {props.url.Price}</div>
          <div>Available Items: {props.url.Count}</div>
          <div>
            <label>Comments: </label>
            <input
              placeholder="comment"
              name="comm"
              value={comment}
              onChange={(e) => getComment(e)}
            ></input>

            <PostAddIcon
              className="post"
              style={{ fontSize: 40 }}
              onClick={postComm}
            />
          </div>
          <div className="ratingSoFar">
          Rate
          <div className="rateUs">
            <ReactStars
              count={5}
              isHalf={true}
              onChange={ratingChanged}
              size={30}
              activeColor="#ffd700"
            />
          </div>
          </div>
        </div>
        <div className="commentsec">
          <p>Comments</p>
          <div className="comment">
          {props.url.Comment.map((i, j) => {
            return (
              <>
                 <div className="flexb">
                <div className="user">{i.user}</div>
                <div className="ratingsec">
                <ReactStars
                
                count={5}
                isHalf={true}
                size={24}
                edit={false}
                activeColor="#ffd700"
                value={i.rating}
              />
                </div>
                </div>
                <div className="commentDisc">{i.comment}</div>
              </>
            );
          })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewProduct;
