import ReactLogo from '../assets/React-icon.png'

export const Footer = () => {
    let date = new Date()
    let year = date.getFullYear()

    return (
        <footer>
            <h1>Powered By React</h1>
            <small>Seth Zarkovich - Web Dev - {year}&copy;</small>
            <br />
            <img className='react-logo' src={ReactLogo} alt="React-Logo" />
        </footer>
    )
}