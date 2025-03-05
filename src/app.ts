import { createBot, createProvider, createFlow, addKeyword, utils } from '@builderbot/bot';
import { MemoryDB as Database } from '@builderbot/bot';
import { MetaProvider as Provider } from '@builderbot/provider-meta';
import {menu}  from './templates/mainFlow';

const PORT = process.env.PORT ?? 3008;


const main = async () => {
    const Flow = createFlow([menu])
    const adapterDB = new Database()

    const { handleCtx, httpServer } = await createBot({
        flow: Flow,
        provider: createProvider(Provider, {
            jwtToken: process.env.jwtToken,
            numberId: process.env.numberId,
            verifyToken: process.env.verifyToken,
            version: 'v22.0',
            database: adapterDB
        })
    })
    httpServer(+PORT)


}

main()
