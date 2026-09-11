import "../index.css"

const Hero = () => {
  return (
    <div className="hero bebas-neue-regular">
      <div>
        <h2 style={{ fontSize: "60px", letterSpacing: "4px" }}>I'm Vasanthakumar</h2>
        <p className="changing-text" style={{ fontSize: "30px", letterSpacing: "4px" }} ></p>
        <p style={{width:"70%",marginTop:"10%",letterSpacing:"2px",fontSize:"20px"}}>I'm a passionate software developer focused on building modern, scalable, and user-friendly applications.
          I work across web development, blockchain, and AI to turn ideas into practical digital solutions.
          I love learning new technologies, solving challenging problems, and continuously improving my craft.
        </p>
      </div>
      <div><img height={300} width={300} src="/image.webp" style={{ borderRadius: "30px" }} /></div>
    </div>
  )
}

export default Hero