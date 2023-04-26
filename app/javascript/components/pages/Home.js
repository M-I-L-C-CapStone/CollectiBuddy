import React, { useState } from "react"
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap"

const items = [
  {
    src: "https://c4.wallpaperflare.com/wallpaper/802/274/556/action-figures-teenage-mutant-ninja-turtles-toys-wallpaper-preview.jpg",
    altText: "Slide 1",
    caption: "Slide 1",
    key: 1,
  },
  {
    src: "https://images.stockx.com/images/Hasbro-Star-Wars-The-Black-Series-Clone-Troopers-Entertainment-Earth-4-Pack-Action-Figure.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1629874272",
    altText: "Slide 2",
    caption: "Slide 2",
    key: 2,
  },
  {
    src: "https://live.staticflickr.com/2665/4161713573_ab5f20f5ee_b.jpg",
    altText: "Slide 3",
    caption: "Slide 3",
    key: 3,
  },
  {
    src: "https://w0.peakpx.com/wallpaper/500/934/HD-wallpaper-pokemon-cards-cool-pokemon-cards-random.jpg",
    altText: "Slide 4",
    caption: "Slide 4",
    key: 4,
  },
  {
    src: "https://e0.pxfuel.com/wallpapers/542/459/desktop-wallpaper-magic-the-gathering-magic-cards.jpg",
    altText: "Slide 5",
    caption: "Slide 5",
    key: 5,
  },
]

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = (newIndex) => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
      </CarouselItem>
    )
  })

  return (
    <>
      <h1 className="home-page-header">Welcome to CollectiBuddy!</h1>
      <h4 className="home-page-text">
        Looking for a way to keep track of all your favorite collectibles in one
        place? Look no further! As a member of CollectiBuddy you can save an
        online log of all of your precious collectibles.
      </h4>
      <div className="home-page">
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          className="carousel"
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
      </div>
    </>
  )
}

export default Home
