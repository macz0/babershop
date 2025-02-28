import { createBot, createProvider, createFlow, addKeyword, utils } from '@builderbot/bot';
import { MemoryDB as Database } from '@builderbot/bot';
import { MetaProvider as Provider } from '@builderbot/provider-meta';
import { provider } from "./provider";
import { config } from './config';
import templates  from './templates';

const PORT = config.PORT


const main = async () => {
    const { handleCtx, httpServer } = await createBot({
        flow: templates,
        provider: provider,
        database: new Database()
    })

    httpServer(+PORT)
}

main()
