import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { authActions } from '_store';

export { Nav };

function Nav() {
    const auth = useSelector(x => x.auth.value);
    const dispatch = useDispatch();
    const logout = () => dispatch(authActions.logout({username:auth.username}));
    
    const userRole = auth? auth.role : null ;
    // only show nav when logged in
    if (!auth) return null;
    
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark px-3">
            <div className="navbar-nav">
                <NavLink to="/" className="nav-item nav-link">Home{userRole}</NavLink>
                <NavLink to="/users" className="nav-item nav-link">Dashboard</NavLink>
                {userRole === 'Auditor' && (
                    <NavLink to="/audit" className="nav-item nav-link">Audit</NavLink>
                )}
                <button onClick={logout} className="btn btn-link nav-item nav-link">Logout</button>
            </div>
        </nav>
    );
}