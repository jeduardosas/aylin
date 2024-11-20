const datosComunes = {
  frase:'Hace quince años nació un hermosa niña, enviada por Dios para ser criada y formada como el más grande tesoro. Hay momentos en la vida que imaginamos, soñamos y esperamos. Uno de esos momentos ha llegado',
  imagenes:{
    imgHeader:'header',
    imgBanner1:'banner',
    imgBanner2:'',
    imgBanner3:'',
    imgFondo1:'flor1',
    imgFondo2:'flor2'
  },
  fechaDia:'13',
  fechaMes:'Diciembre',
  fechaYear:'2024',
  religiosa:{
    hora:'18',
    minutos:'00',
    lugar:'Parroquia de San Gerardo Maria Mayela',
    direccion:'Mariano Abasolo, 56',
    direccionCol:'Centro',
    direccionCd:'Iguala de la Independencia',
    ubicacion:'https://maps.app.goo.gl/3am8ZneMwuPi71wc8',

  },
  recepcion:{
    hora:'19',
    minutos:'30',
    lugar:'Salon Mahogani',
    direccion:'Industria de la Tranformación, 18',
    direccionCol:'Ciudad Industrial',
    direccionCd:'Iguala de la Independencia.',
    ubicacion:'https://maps.app.goo.gl/KshspZofyYZdafC86'
  },
  regalos:{
    frase:'Lo más importante para mí, es tu presencia a mis XV años, si deseas tener un presente conmigo puede ser en efectivo.',
    url:'https://mesaderegalos.liverpool.com.mx/milistaderegalos/51573682',
    numMesa:'51573682'
  },
  timeLine:{
    settings:{
      bgColor:'var(--color_card)',
      color:'var(--color_text)',
      lineColor:'var(--color_card)'
    },
    protocol:[
      {
        id:1,
        time:'18:00 Hrs', 
        name:'Ceremonia Religiosa',
        icon:'CHURCH',
        color:'var(--color_tex)',
        textColor:'rgb(218 167 88)'
      },

      {
        id:2,
        time:'19:30 Hrs',
        name:'Recepción',
        icon:'recepcion',
        color:'var(--color_timeline)',
        textColor:'rgb(218 167 88)'
      },

      {
        id:3,
        time:'21:00 Hrs',
        name:'protocolo',
        icon:'brindis',
        color:'var(--color_timeline)',
        textColor:'rgb(218 167 88)'
      },
      {
        id:4,
        time:'22:00 Hrs',
        name:'cena',
        icon:'comida',
        color:'var(--color_timeline)',
        textColor:'rgb(218 167 88)'
      },
      {
        id:5,
        time:'23:00 Hrs',
        name:'Apertura de la pista',
        icon:'musica',
        color:'var(--color_timeline)',
        textColor:'rgb(218 167 88)'
      },
    ]
  },
  hoteles:[
    {
      nombre:'Hotel Gran Plaza',
      direccion:'Miguel Hidalgo, 7',
      direccion_colonia:'centro, Iguala de la Independencia, Gro',
      telefono:'7333326990',
      ubicacion:'https://maps.app.goo.gl/NkFEjPR5RvDaP3477'
    },
    {
      nombre:'Hotel Reforma #14',
      direccion:'Reforma, 14',
      direccion_colonia:'centro, Iguala de la Independencia, Gro',
      telefono:'7331517327',
      ubicacion:'https://maps.app.goo.gl/m4UMcsUnELYm3NaH8'
    },
    {
      nombre:'Hotel Real 1900',
      direccion:'Miguel Hidalgo,6',
      direccion_colonia:'Centro, Iguala de la Independencia, Gro.',
      telefono:'7331101106',
      ubicacion:'https://maps.app.goo.gl/bcRQiHRzWotJcCNe9'
    },

  ]

}

const tipoevento={
  boda:{
    nombreNovia:'',
    nombreNovio:'',
    padresNovia:{
      papa:'',
      mama:''
    },
    padresNovio:{
      papa:'',
      mama:'',
    },
    padrinos:{
      padrino:'',
      madrina:'',
    },
    confirmacion:{
      novio:'',
      novia:''
    },
  },
  
  bautizo:{
    nombre:'',
    padres:{
      papa:'',
      mama:''
    },
    padrinos:{
      padrino:'',
      madrina:''
    }
  },
  
  XV:{
    nombre:'Aylin',
    padres:{
      papa:'Arturo Gómez Gómez',
      mama:'Yesenia Galarza Castro'
    },
    padrinos:{
      padrino:'Victor Manuel Vite Vite',
      madrina:'Everlyn Astudillo Gómez'
    },
    confirmacion:'7331094631'
  }
}

const getData = (type)=>{
  return {...datosComunes, ...tipoevento[type] }
}

export default getData;