import React, { useState} from "react";
import ReactStars from "react-rating-stars-component";
import ReactDOM from "react-dom";
import OwnerApp from "../OwnerApp";

const OwnerViewProduct = (props) => {
  console.log(props);
  const [count, setCount] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [picture, setPicture] = useState(null);
  const homePage = () => {
    ReactDOM.render(
      <OwnerApp user={props.user} userId={props.userId} />,
      document.getElementById("root")
    );
  };
  const updateProduct = () => {
    let div01 = document.querySelector(".div-01");
    let div02 = document.querySelector(".div-02");
    div01.style.display = "none";
    setName(props.url.Name);
    setPrice(props.url.Price);
    setCategory(props.url.Category);
    div02.style.display = "block";
  };
  const updateItem = async (e) => {
    
  };
  const saveImg = (e) => {
    setPicture(e.target.files[0]);
    console.log("picture: ", picture);
  };
  const Cat = (e) => {
    setCategory(e.target.value);
  };
  const Price = (e) => {
    setPrice(e.target.value);
  };
  const Count = (e) => {
    setCount(e.target.value);
  };
  const Name = (e) => {
    setName(e.target.value);
  };
  return (
    <>
      <div className="nav1">
        <div className="ow">
          <h2>Hello, {props.user}</h2>
        </div>
        <button className="button-24 bb" onClick={homePage}>
          Owner Home Page
        </button>

        {(() => {
          if (props.user) {
            console.log("logged in");
            return <button className="logout button-24 bb1">Logout</button>;
          } else if (props.user === undefined) {
            console.log("logged out");
            return <button className="login bb1">LogIn/SignIn</button>;
          }
        })()}
      </div>

      <div class="ro center div-01">
        <div class="cent">
          {" "}
          <div>
            {" "}
            Customers Ratings So far
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
            <span id="rate">{props.url.Rating / props.url.RatingCount}</span>
          </div>
          <img src={props.url.ImageUrl} width="200px" height="200px" />
          <div>Price: {props.url.Price}</div>
          <div>Available Items: {props.url.Count}</div>
          <button onClick={updateProduct}>Update this product</button>
          <div></div>
        </div>
        <div>
          <p>Comments</p>
          {props.url.Comment.map((i, j) => {
            return (
              <>
                <div className="commentSec">
                  <div>{props.userName[j]}</div>
                  <ReactStars
                    count={5}
                    isHalf={true}
                    size={15}
                    edit={false}
                    activeColor="#ffd700"
                    value={i.rating}
                  />

                  <div>{i.rating}</div>

                  <div>{i.comment}</div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="container col-md-8 mx-auto border border-3 border-light bg-light margint paddingt div-02">
        <form onSubmit={updateItem} encType="multipart/form-data">
          <select
            className="form-select"
            aria-label="Select a catagory"
            name="category"
            value={category}
            required
            onChange={Cat}
          >
            <option selected>Choose Category</option>
            <option value="groc">Groceries</option>
            <option value="cloth">Clothings</option>
            <option value="med">Medicine</option>
            <option value="stat">Stationary</option>
          </select>
          <div className="mb-3">
            <label for="name" className="form-label">
              Name Of The Product
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={Name}
            />
          </div>
          <div className="mb-3">
            <label for="price" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              id="price"
              value={price}
              onChange={Price}
            />
          </div>
          <div className="mb-3">
            <label for="count" className="form-label">
              Count
            </label>
            <input
              type="number"
              className="form-control"
              id="count"
              value={count}
              onChange={Count}
            />
          </div>
          <div className="mb-3">
            <label for="formFile" className="form-label">
              Add Image
            </label>
            <input type="file" class="form-control" value={picture} onChange={saveImg}></input>
          </div>
          <div className="text-center">
            <button type="submit" className="button-24 align-center margint">
              Update Product
            </button>
          </div>
        </form>
        <div id="succ" className="text-center">
          <h4 className="text-success">Product Updated!</h4>
        </div>
      </div>
    </>
  );
};

export default OwnerViewProduct;
