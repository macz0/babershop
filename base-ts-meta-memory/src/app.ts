import { createBot, createProvider, createFlow, addKeyword, utils } from '@builderbot/bot';
import { MemoryDB as Database } from '@builderbot/bot';
import { MetaProvider as Provider } from '@builderbot/provider-meta';
import { provider } from "./provider";
import { config } from './config';
import {Bienvenida, flowStandAlone}  from './templates/mainFlow';

const PORT = config.PORT


const main = async () => {
    const { handleCtx, httpServer } = await createBot({
        flow: createFlow([Bienvenida, flowStandAlone]),
        provider: provider,
        database: new Database()
    })

    httpServer(+PORT)
}

main()
