import { NavLink } from "react-router-dom";
import { useAuth } from '../auth/useAuth';

import './Navbar.scss';

export default function Sidebar() {
    const { currentUser } = useAuth();
    return (
        <nav>
            {currentUser && currentUser.userType === 1 &&
                <>
                    <div className="navItem">
                        <NavLink to="/bookings">Bookings</NavLink>
                    </div>
                    <div className="navItem">
                        <NavLink to="/feedbacks">Reviews</NavLink>
                    </div>
                </>
            }
            {currentUser && currentUser.userType === 2 &&
                <>
                    <div className="navItem">
                        <NavLink to="/bookings">Bookings</NavLink>
                    </div>
                    <div className="navItem">
                        <NavLink to="/vehicles">Vehicles</NavLink>
                    </div>
                    <div className="navItem">
                        <NavLink to="/users">Users</NavLink>
                    </div>
                </>
            }
        </nav>
    )

}