import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store/hooks';
import { loadAllProjectAction } from '../../store/reducers/project/project-actions';
import { projectSelector } from '../../store/reducers/project/project-reducer';

const ListAllProjects = () => {
  const { projects } = useSelector(projectSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadAllProjectAction());
  }, []);

  return (
    <div>
      {projects.map((project) => {
        return <div key={project.id}>{project.name}</div>;
      })}
    </div>
  );
};

export default React.memo(ListAllProjects);
