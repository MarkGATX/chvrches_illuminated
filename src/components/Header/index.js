import ChvrchesLogo from '../../images/CHVRCHES_logo_invert.png'
import './Header.css'

export default function Header () {
    return (
        <header>
            <img src={ChvrchesLogo} alt='CHVRCHES name'/>
            <hr className='leftbar'></hr>
            <hr className='rightbar'></hr>
        </header>
    )
}