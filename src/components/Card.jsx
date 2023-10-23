const Card = (props) => {
  return (
    <div className="card">
      <div className="card_conatiner">
        <img src={`https://openweathermap.org/img/wn/${props?.weather?.weather?.[0]?.icon}@2x.png`} alt="" className="img_card" />
        <h3 className="country_name">{props?.weather?.name} <sup>{props?.weather?.sys?.country}</sup></h3>
        <span className="weather_gradus">{Math.round(props?.weather?.main?.temp ?props?.weather?.main?.temp: null)} <sup>℃</sup></span>
        <p className="weather_describtion">
         {props?.weather?.weather?.[0]?.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
