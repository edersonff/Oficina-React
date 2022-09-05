import './OndeFica.css';
import { BiMap } from 'react-icons/bi'
function OndeFica() {
  return (
    <div className="App">
      <div className="full">
        <img src="img/full-size/capa.png"/>
      </div>
      <h1 className='full-title'>Onde fica?</h1>
      <div className="map">
        <Iframe iframe='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.450016410544!2d-49.1014938!3d-26.5056476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94de94c03b2c8b85%3A0xa0fcd9b662dcdac9!2sNelson%20Auto%20Pe%C3%A7as!5e0!3m2!1spt-BR!2sbr!4v1662307091851!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0;" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>' />
      </div>
      <div className="content">
        <div className="address-container">
          <div className="address">
            <p className='iconTheme'>
              <BiMap />
            </p>
            <h2 className='title'>
              R. João Januário Ayroso, 2306
            </h2>
            <p className='more'>
              Jaraguá Esquerdo, Jaraguá do Sul - SC, 89253-295
            </p>
          </div>
          <div className="address-btn">
            <a href='https://www.google.com/maps/dir//Nelson+Auto+Pe%C3%A7as+R.+Jo%C3%A3o+Janu%C3%A1rio+Ayroso,+2306+-+Jaragu%C3%A1+Esquerdo+Jaragu%C3%A1+do+Sul+-+SC+89253-295/@-26.5056476,-49.1014938,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x94de94c03b2c8b85:0xa0fcd9b662dcdac9'>Como chegar?</a>
          </div>
        </div>
        </div>
    </div>
  );
}
function Iframe(props) {
  return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
}

export default OndeFica;
