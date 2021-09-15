import React, { useState } from "react"
import { Transition, TransitionGroup } from "react-transition-group"
import "./product.css"

const duration = 300

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out, left ${duration}ms ease-in-out`,
  opacity: 0,
  position: "relative",
  left: "-15px",
  height: "100%",
}

const transitionStyles = {
  entering: { opacity: 1, left: "0px" },
  entered: { opacity: 1, left: "0px" },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
}

const Fade = ({ in: inProp, children, className }) => (
  <Transition in={inProp} timeout={duration}>
    {state => (
      <div
        style={{
          ...defaultStyle,
          ...transitionStyles[state],
        }}
        className={className}
      >
        {children}
      </div>
    )}
  </Transition>
)

const Image = ({ kit, toggleKit }) => {
  return (
    <div className="app-image-container">
      <Fade in={kit.name == "Home"}>
        <img
          className="app-image"
          src="https://www.footyrenders.com/render/harry-kane-51.png"
        ></img>
      </Fade>
      <Fade in={kit.name == "Away"} className="image-absolute">
        <img
          className="app-image"
          src="https://www.footyrenders.com/render/Harry-Kane-23-204x540.png"
        ></img>
      </Fade>
    </div>
  )
}

const SizeSelect = ({ kit }) => {
  const sizes = ["S", "M", "L", "XL"]
  const [sizeSelected, selectSize] = React.useState({
    selected: "S",
  })
  const options = sizes.map((size, key) => {
    const isCurrent = sizeSelected.selected === size
    return (
      <div key={key} className="radio-btn-container">
        <div className="radio-btn">
          <label
            for={size}
            className={isCurrent ? "radio-selected" : "radio-unselected"}
          >
            <input
              className="radio"
              type="radio"
              id={size}
              name="radio-btn"
              value={size}
              onChange={() => {}}
            />
            {size}
          </label>
        </div>
      </div>
    )
  })
  return (
    <div>
      <h6>SIZE</h6>
      <div className="flex-container flex-row flex-start">{options}</div>
    </div>
  )
}

const AppHeader = ({ kit }) => {
  let price
  return (
    <div>
      <h1>Tottenham {kit.name} Kit</h1>
      <h2>year 2020</h2>
      <h4>
        This product is very nice nice! Made with 100% cotton and the sweat of
        labourers. Shipping may take 5 to 7 working days
      </h4>
      <h3>
        <h5>PRICE</h5>£ {kit.price}
      </h3>
    </div>
  )
}

const ProductCard = () => {
  const kits = [
    {
      name: "Home",
      price: 69.99,
      image: "https://www.footyrenders.com/render/harry-kane-51.png",
    },
    {
      name: "Away",
      price: 59.99,
      image: "https://www.footyrenders.com/render/Harry-Kane-23-204x540.png",
    },
  ]

  const [kitSelected, selectKit] = React.useState({
    selected: "Home",
  })

  function toggleKit(e) {
    selectKit({
      selected: kits.find(item => item.name != kitSelected.selected).name,
    })
  }

  return (
    <div className="flex-container">
      <img
        src="https://wallpaperaccess.com/full/1331170.jpg"
        className="background"
      ></img>
      <div className="container">
        <div className="flex-container">
          <Image
            kit={kits.find(item => item.name == kitSelected.selected)}
            toggleKit={toggleKit}
          ></Image>
          <div className="product-container-body">
            <AppHeader
              className="app-title"
              kit={kits.find(item => item.name == kitSelected.selected)}
            ></AppHeader>
            <SizeSelect></SizeSelect>
            <button className="add-to-cart">Add to cart</button>
          </div>
        </div>

        <button className="next" onClick={toggleKit}>
          <i class="icon ion-arrow-right-c"></i>
        </button>
        <button className="prev" onClick={toggleKit}>
          <i class="icon ion-arrow-left-c"></i>
        </button>
      </div>
    </div>
  )
}

export default ProductCard
