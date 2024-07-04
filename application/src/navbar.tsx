
import SpendSenseImage from './assets/logo-no-background.png';
export default function Navbar() {
    return (
        <div className="navbar">
            <div>
            <p className="Logo">
            <img src={SpendSenseImage} alt="image" />
            </p>
            </div>
            
            <div className="navbar-elements">
            <p className='expenses-navbar'>
                expenses
            </p>
            <p className='income-navbar'>
                income
            </p>
            </div>
            <div className="navbar-profile">
            <p>
                profile
            </p>
            </div>
        </div>
    )
}