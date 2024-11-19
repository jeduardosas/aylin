import React from 'react'
import '../styles/vestimenta.css'

const CodigoVestimenta = () => {
  return (
    <div className='vestimenta'>
      <h1 className='vestimenta-title'>Codigo de Vestimenta</h1>
      <div className='vestimenta-cards'>
        <div className='vestimenta-card'>
          <div className='vestimenta-card-icons'> 

          </div>
          <div className='vestimenta-card-title'>
            <img src="./img/icons/vestimenta.svg" alt="vestimenta-icon" />
            <p>Formal</p>
          </div>

          <div className='vestimenta-card-colors'>
            <p>Permitir solo el color rosa para nuestra bella quinceañera.</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default CodigoVestimenta