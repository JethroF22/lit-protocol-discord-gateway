import { Link, useSearchParams } from 'react-router-dom';
function UserPage() {
  const [searchParams] = useSearchParams();

  console.log('user discord token', searchParams.get('token'));
  return (
    <div>
      <Link to="/create/event">Create category</Link>
      <Link to="/create/event">Create event</Link>
    </div>
  );
}

export default UserPage;
