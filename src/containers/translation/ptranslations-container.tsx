import { useParams } from 'react-router-dom';

const PTranslationsContainer = () => {
  const { projectId } = useParams();
  return <div> translations container from project {projectId}</div>;
};

export default PTranslationsContainer;
