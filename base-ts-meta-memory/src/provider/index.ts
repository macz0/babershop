import { MetaProvider as Provider} from "@builderbot/provider-meta";
import { createProvider } from "@builderbot/bot";

export const provider = createProvider(Provider, {
    jwtToken: process.env.jwtToken,
    numberId: process.env.numberId,
    verifyToken: process.env.verifyToken,
    version: 'v22.0'
})