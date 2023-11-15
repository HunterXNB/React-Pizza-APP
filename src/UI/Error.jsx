import { useNavigate, useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';

function NotFound() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.message || error.error.message}</p>
      <LinkButton to="">&larr; Go back</LinkButton>
    </div>
  );
}

export default NotFound;
