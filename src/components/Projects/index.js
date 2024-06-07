import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on different projects in Deep Learning and Data Analysis.
        </Desc>
        <CardContainer>
          {toggle === 'all' && projects.map((project, index) => (
            <ProjectCard key={index} project={project} openModal={openModal} setOpenModal={setOpenModal} />
          ))}
          {projects.filter((item) => item.category === toggle).map((project, index) => (
            <ProjectCard key={index} project={project} openModal={openModal} setOpenModal={setOpenModal} />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects
