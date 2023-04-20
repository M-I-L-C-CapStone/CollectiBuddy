import React from 'react'
import {Card, CardBody, CardTitle, CardSubtitle, CardText} from "reactstrap"
import iraImage from "../assets/IMG_7346.jpg"
import leoImage from "../assets/LeoCuero1.JPG"
import mikeImage from "../assets/image.png"
import cjImage from "../assets/pfp.png"
import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"

const AboutUs = () => {
  return (
    <>
      <h1>Meet the CollectiBuddy Team</h1>
      <div className='aboutcard'>
      <Card
      style={{
        width: '22rem'
      }}
      >
      <img
        alt="Bio Pic"
        src={mikeImage}
        />
      <CardBody>
        <CardTitle tag="h5">
          Mike Rogers
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
          >
            Bio
        </CardSubtitle>
        <CardText>
        Hi, I'm Mike, the Tech Lead for CollectiBuddy. I have 12 years experience within the Real Estate industry and past education in Information Technology. My passion for troubleshooting evolves each day as I continue to solve errors on the fly! I want to push the bounds of web development and help others grow into their true potential.
        </CardText>
        <div className='logolinkm'>
        <CardSubtitle>
        <a href="https://www.linkedin.com/in/michael-rogers04/" target="_blank" rel="noreferrer">
        <img src={linkedin} alt="Linkedin logo"></img>
      </a>
      <a href="https://github.com/mikerogers04/" target="_blank" rel="noreferrer">
        <img src={github} alt="GitHub logo"></img>
      </a>
        </CardSubtitle>
      </div>
      </CardBody>
      </Card>
      <Card
      style={{
        width: '22rem'
      }}
      >
      <img
        alt="Bio Pic"
        src={iraImage}
        />
      <CardBody>
        <CardTitle tag="h5">
          Ira Holmes
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
          >
            Bio
        </CardSubtitle>
        <CardText>
          My name is Ira Holmes, I am the design lead for CollectiBuddy and I am a 7 year Navy Veteran with a passion for bringing ideas to life. I may not be able to draw but CSS helps give me all of the creative tools I need.

        </CardText>
        <div className='logolinki'>
        <CardSubtitle>
        <a href="https://www.linkedin.com/in/ira-holmes/" target="_blank" rel="noreferrer">
        <img src={linkedin} alt="Linkedin logo"></img>
      </a>
      <a href="https://github.com/iraholmes" target="_blank" rel="noreferrer">
        <img src={github} alt="GitHub logo"></img>
      </a>
        </CardSubtitle>
        </div>
      </CardBody>
      </Card>
      <Card
      style={{
        width: '22rem'
      }}
      >
      <img
        alt="Bio Pic"
        src={leoImage}
        />
      <CardBody>
        <CardTitle tag="h5">
        Leopoldo F. Cuero 
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
          >
            Bio
        </CardSubtitle>
        <CardText>
        My name is Leopoldo F. Cuero, the project Manager for CollectiBuddy. I am from Cali, Colombia therefore, I'm an awesome salsa dancer.  I served for  2 decades in the U.S. Government in multiple roles, I consider myself an unwritten code with a code in mine : The more I LEARN the more I realize I need to LEARN more.
        </CardText>
        <div className='logolinkl'>
        <CardSubtitle>
        <a href="https://www.linkedin.com/in/leopoldo-cuero-0650a8202/" target="_blank" rel="noreferrer">
        <img src={linkedin} alt="Linkedin logo"></img>
      </a>
      <a href="https://github.com/Melaza6" target="_blank" rel="noreferrer">
        <img src={github} alt="GitHub logo"></img>
      </a>
        </CardSubtitle>
        </div>
      </CardBody>
      </Card>
      <Card
      style={{
        width: '22rem'
      }}
      >
      <img
        alt="Bio Pic"
        src={cjImage}
        />
      <CardBody>
        <CardTitle tag="h5">
          CJ Norris
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
          >
            Bio
        </CardSubtitle>
        <CardText>
        Hey! I'm CJ, the Product Manager for CollectiBuddy. I am a 12 year veteran of the Kentucky Army National Guard turned Full Stack Web Developer. I have a passion for problem solving and creative thinking. This project was an awesome opportunity to work with a fantastic group to develop a fun app.
        </CardText>
        <div className='logolinkl'>
        <CardSubtitle>
        <a href="https://www.linkedin.com/in/cj-norris/" target="_blank" rel="noreferrer">
        <img src={linkedin} alt="Linkedin logo"></img>
      </a>
      <a href="https://github.com/cmnorrisii" target="_blank" rel="noreferrer">
        <img src={github} alt="GitHub logo"></img>
      </a>
        </CardSubtitle>
        </div>
      </CardBody>
      </Card>
      </div>
  
  </>
  )
}

export default AboutUs