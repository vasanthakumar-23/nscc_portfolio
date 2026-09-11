


const Projects = () => {
  return (
    <div className='projects' id="projects">
      <h2 style={{ textAlign: "center", color: 'black', fontSize: "30px", margin: "20px" }} className="bebas-neue-regular">My projects</h2>
      <div className="bebas-neue-regular" >
        <a href="https://v0-kratoschips.vercel.app"><img className="image" src="/kratos.png" width={400} height={300} /></a>
        <p>Kratos Chips Landing page</p>
      </div>
      <div className="project-2 bebas-neue-regular">
        <a href="https://trymathintern.pages.dev"> <img className="image" src="/tution.png" height={300} width={400} />
          </a>
          <p>Tution website landing page</p>
      </div>

    </div>
  )
}

export default Projects