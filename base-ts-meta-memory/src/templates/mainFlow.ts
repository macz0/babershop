import { addKeyword, EVENTS } from "@builderbot/bot";

const mainFlow = addKeyword(EVENTS.WELCOME).addAnswer(`hello welcome to this shit 💩`)

export  {mainFlow};

