import './Footer.css'
import Back from '../../public/shared/icon-back-button.svg'
import Next from '../../public/shared/icon-next-button.svg'

function Footer({ Name, artistName, OnBackClick, OnNextClick }) {
    return (

        <div className='footersection'>
            <div className='footerLine'>

            </div>
            <div className='footer'>
                <div>
                    <label>{Name}</label>
                    <p>{artistName}</p>
                </div>
                <div className='footerButton'>
                    <button onClick={OnBackClick}>
                        <img src={Back} />
                    </button>
                    <button onClick={OnNextClick}>
                        <img src={Next} />
                    </button>
                </div>

            </div>
        </div>
    )
}
export default Footer