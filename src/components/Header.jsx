const Header = ({data = {}}) => {
  const {frase, imagenes} = data
  
  return (  
    <>
      <header className="header centrar">
        <div className="header-image">
          <img loading="lazy"  src={`/img/${imagenes.imgHeader}.webp`} alt={`img-${data.nombre}`} />
          
        </div>
      </header>
        <div className="frase">
          <p style={{
            textAlign:'center',
            fontSize:'30px'
          }}>Mis XV Años</p>
          <p className="frase-text">{frase}</p>
        </div>
    </>
  )
}

export default Header