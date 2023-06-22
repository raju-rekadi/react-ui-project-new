import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { userActions } from '_store';

export { Home };

function Home() {
    const auth = useSelector(x => x.auth.value);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.getAll());
    }, []);
    return (
        <div>
            <h1>Hi {auth?.firstName}!</h1>
            <p>You're logged in with React 18 + Redux & JWT!!</p>
            <p><Link to="/users">Manage Users</Link></p>
        </div>
    );
}
