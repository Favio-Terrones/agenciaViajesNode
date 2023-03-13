//req - lo que enviamos  : res - lo que express nos responde
 // res.json({id:1});
  // res.render();

import {Viaje} from '../models/Viaje.js';
import { Testimonial } from '../models/Testimoniales.js';

const paginaInicio = async(req,res)=>{ 
  
    //Consultar 3 viajes del modelo Viaje
  const promiseDB = [];

  promiseDB.push(Viaje.findAll({limit:3}));
  promiseDB.push(Testimonial.findAll({limit:3}));        //Si ninguno depende de otro este enfoque es el adecuado , sino usar await dentro del try para cada promesa


  try {
    
    const resultado = await Promise.all(promiseDB);
    
    
    res.render("inicio",{
      pagina : "Inicio",
      clase: 'home',
      viajes: resultado[0],
      testimoniales: resultado[1]
    });
  } catch (error) {
    console.log(error);
  }


 
}



const paginaNosotros = (req,res)=>{
    res.render('nosotros',{
      pagina: "Nosotros"
    });
 }


const paginaViajes = async(req,res)=>{

    //CONSULTAR DB   
    const viajes = await Viaje.findAll();

    res.render('viajes',{
     pagina: "Próximos Viajes",
     viajes
    });
 }

const paginaTestimoniales = async (req,res)=>{
  
    try {
      const testimoniales = await Testimonial.findAll();
      res.render('testimoniales',{
        pagina: "Testimoniales",
        testimoniales
       });



    } catch (error) {
      console.log(error);
    }
  }


//Muestra un viaje por su slug 
const paginaDetalleViaje = async(req,res) =>{
    const {viaje}  = req.params;

    try {
      const resultado = await Viaje.findOne({where:{slug:viaje}});
      res.render('viaje',{
        pagina: 'Información Viaje',
        resultado
      })
    } catch (error) {
       console.log(error);
    }
}



export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}