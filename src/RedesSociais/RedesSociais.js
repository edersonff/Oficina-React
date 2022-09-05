import './RedesSociais.css';
import { FaFacebookF, FaWhatsapp, FaInstagram } from 'react-icons/fa'
import SocialMedia from '../Components/SocialMedia/SocialMedia';
function RedesSociais() {
  return (
    <div className="App">
      <div className="redes-sociais-container">
        <SocialMedia Icon={FaFacebookF} />
        <SocialMedia Icon={FaWhatsapp} />
        <SocialMedia Icon={FaInstagram} />
      </div>
    </div>
  );
}
function Iframe(props) {
  return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
}

export default RedesSociais;
