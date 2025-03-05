import { addAnswer, addKeyword, EVENTS } from "@builderbot/bot";


const button1 = addKeyword('Motilada').addAnswer('Este es el flujo del boton 1')

const button2 = addKeyword('Combo').addAnswer('Seleccionaste boton 2')

const menu = addKeyword(['ola', 'hola', 'Hola', 'oe', 'buenas', '.']).addAnswer('💈 Bienvenido a Barbeshop 💈').addAnswer('¿Qué servicio deseas?',
{
  capture: true,
  buttons: [
    {body: 'Motilada: $10k'}, {body: 'Combo: $20k'} 
  ]
}, null, [button1, button2]
)



export  {menu};

