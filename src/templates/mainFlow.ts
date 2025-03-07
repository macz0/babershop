import { addAnswer, addKeyword, EVENTS } from "@builderbot/bot";

// Botones
const button1 = addKeyword('Agregar cita').addAnswer('¿Qué día desea la cita?', {
  capture: true,
  buttons: [
    {body: 'Hoy'}, {body: 'Mañana'}, {body: 'Pasado mañana'},
  ]
})

const button2 = addKeyword('PQR').addAnswer('Escriba por favor su petición: ',  {
  capture: true,
  }, async (ctx, {flowDynamic, endFlow}) => {
    return endFlow(`Tu petición es: \n${ctx.body} \n\nNúmero de radicado: *1234*`)
}) 

// Flujos
const menu = addKeyword(['ola', 'hola', 'Hola', 'oe', 'buenas', '.']).addAnswer(['💈 Bienvenido a Barbeshop 💈', '¿Qué deseas hacer?'], {
  capture: true,
  buttons: [
    {body: 'Agregar cita'}, {body: 'PQR'} 
  ]
}, null, [button1, button2])

export  {menu};

