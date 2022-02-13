import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './projectcard.scss';

interface ProjectCardProps {
  name: string;
  id?: string;
}

const ProjectCard = ({ name, id }: ProjectCardProps) => {
  const navigate = useNavigate();

  const clickGo = () => {
    navigate(`/project/${id}`);
  };
  return (
    <Card key={id} sx={{ minWidth: 275 }} className="card-container">
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2">number of translations: 11</Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            clickGo();
          }}
        >
          Go
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
