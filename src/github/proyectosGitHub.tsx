import './proyectos.css'
import { useEffect, useState, useRef} from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Container, Row, Col } from 'react-bootstrap';

interface repositorios {
    id: number;
    name: string;
    html_url: string;
  }


function GitHub() {
    const divRef = useRef(null);

    const responsive={
        superLargeDesktop: {
            // El nombre puede ser cualquier cosa, depende de ti.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
          },
          desktop: {
            breakpoint: { max: 2000, min: 1024 },
            items: 3
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
          }
      };
    const [formatRepositorios, setForProjects] = useState<repositorios[]>([]);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("vis");
              } else {
                entry.target.classList.remove("vis");
              }
            });
          });

          const elementOcult = document.querySelectorAll(".ocult");
          elementOcult.forEach((el) => observer.observe(el));

        fetch("https://api.github.com/users/AllAguero/repos")
      .then((response) => response.json())
      .then((data) => {
        // Formatear los datos de los proyectos
        const formattedData: repositorios[] = data.map((project: repositorios) => ({
          id: project.id,
          name: project.name,
          html_url: project.html_url
        }));
        setForProjects(formattedData);
      });


    }, []);
    return (
        <div className='Github-Container' id='Github'>
        <section className='ProjectsGit' id='Projects' ref={divRef}>
            <Container id='container' className='ocult'>
                <Row>
                    <Col >
                        <div className='Project-bx'>
                        <h2>Mine projects</h2>
                            <Carousel responsive={responsive} infinite={true} className='Slider'>
                            {formatRepositorios.map((project) => (
                              <div className='item'>
                              <a href={project.html_url} target="_blank">
                                <img src="https://res.cloudinary.com/deynsndm5/image/upload/v1684615672/Imagenes/1156857940_Free_vector_new_app_development_on_desktop__xl-beta-v2-2-2_auto_x2-removebg-preview_mhfhcq.png" alt="" id='img' draggable="false" title=""/>
                              </a>
                              <br />
                              <div key={project.id} className="project-container">
                                <a href={project.html_url} id='Name' target="_blank">{project.name}</a>
                              </div>
                              </div>
                              ))}
                            </Carousel>
                        </div>
                    </Col>
                </Row>
                
            </Container>
           
        </section>
        </div>    
       );
}

export default GitHub;