import { CreateProjectData } from '../../services/project';

interface CreateProjectContainerProps {
  createProjectAction: (projectData: CreateProjectData) => void;
}

const CreateProjectContainer = ({
  createProjectAction
}: CreateProjectContainerProps) => {
  return <div>Create container</div>;
};

export default CreateProjectContainer;
