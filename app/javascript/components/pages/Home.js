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
    src: "https://images.unsplash.com/photo-1637063868743-71757b4770c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGVnbyUyMGJ1aWxkJTIwbW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    altText: "Slide 1",
    caption: "Slide 1",
    key: 1,
  },
  {
    src: "https://images.unsplash.com/photo-1581557991964-125469da3b8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dG95fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    altText: "Slide 2",
    caption: "Slide 2",
    key: 2,
  },
  {
    src: "https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWN0aW9uJTIwZmlndXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    altText: "Slide 3",
    caption: "Slide 3",
    key: 3,
  },
  {
    src: "https://images.unsplash.com/photo-1611931960487-4932667079f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9rZW1vbiUyMGNhcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    altText: "Slide 4",
    caption: "Slide 4",
    key: 4,
  },
  {
    src: "https://images.unsplash.com/photo-1593814681464-eef5af2b0628?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFnaWMlMjB0aGUlMjBnYXRoZXJpbmclMjBjYXJkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
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
      <h1>Welcome to CollectiBuddy!</h1>
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
