
import SpendSenseImage from '../assets/logo-no-background.png';
export default function Navbar(props:any) {
    return (
        <div className="navbar">
            <div>
            <p className="Logo">
            <img src={SpendSenseImage} alt="image" />
            </p>
            </div>
            
            <div className="navbar-elements">
            <p className='expenses-navbar' onClick={()=>{props.onClicked('expense')}}>
                expenses
            </p>
            <p className='income-navbar' onClick={()=>{props.onClicked('income')}}>
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