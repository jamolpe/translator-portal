import CreateProject from '../../components/project/create';
import { CreateProjectData } from '../../services/project';
import { useAppDispatch } from '../../store/hooks';
import { createProjectAction } from '../../store/reducers/project/project-actions';

const CreateProjectContainer = () => {
  const dispatch = useAppDispatch();

  return (
    <CreateProject
      createProjectAction={(projectData: CreateProjectData) => {
        dispatch(createProjectAction(projectData));
      }}
    />
  );
};

export default CreateProjectContainer;
