import { addKeyword, EVENTS } from "@builderbot/bot";

const Bienvenida = addKeyword(EVENTS.WELCOME).addAnswer(`💈 Bienvenido a Barbeshop 💈`)

/*
const flowStandAlone = addKeyword(['ola', 'hola', 'oe', 'buenas'])
.addAnswer('¿Qué servicio deseas?' + '\n1) Motilada ✂️: $13,000' + '\n2) Motilada + Barba 💺: $20,000', { capture: true }, async (ctx, { flowDynamic }) => {
  const responseName = ctx.body
  //.... db.insert({name:responseName})
  await flowDynamic(`Escogió: ${responseName}`)
})
*/

const flowStandAlone = addKeyword(['ola', 'hola', 'oe', 'buenas'])
  .addAnswer('What is your email?', {capture:true}, (ctx, { fallBack }) => {
    if (ctx.body != '1' || ctx.body != '2') {
      return fallBack(`Ups! no válido.`);
    }

    console.log(`Other properties:`, ctx, `ctx.body `, ctx.body)
  });


export  {Bienvenida, flowStandAlone};

