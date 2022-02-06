import { Button } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ProjectCard from '../../components/project/project-card';
import { useAppDispatch } from '../../store/hooks';
import { loadAllProjectAction } from '../../store/reducers/project/project-actions';
import { projectSelector } from '../../store/reducers/project/project-reducer';
import './listallcontainer.scss';

const ListAllProjects = () => {
  const { projects } = useSelector(projectSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadAllProjectAction());
  }, []);

  const create = () => {
    navigate('/project/create');
  };

  return (
    <div className="projects-main">
      <div className="options-section">
        <Button
          variant="contained"
          onClick={() => {
            create();
          }}
        >
          Create new
        </Button>
      </div>
      <div className="project-section">
        {projects.map((project) => {
          return <ProjectCard id={project.id} name={project.name} />;
        })}
      </div>
    </div>
  );
};

export default React.memo(ListAllProjects);
