import Tution from "../../public/tution.png";
import Kratos from "../../public/kratos.png";


const Projects = () => {
  return (
  <div className='projects' id="projects">
      <h2 style={{textAlign:"center",color:'black',fontSize:"30px",margin:"20px"}} className="bebas-neue-regular">My projects</h2>
      <div className="bebas-neue-regular" >
        <img src={Kratos} width={400}height={300}/>
        <p>Kratos Chips Landing page</p>
      </div>
      <div className="project-2 bebas-neue-regular">
        <img src={Tution} height={300} width={400}/>
        <p>Tution website landing page</p>
      </div>
      
    </div>
  )
}

export default Projects