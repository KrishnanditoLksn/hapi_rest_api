const Hapi = require('hapi')
const {response} = require("hapi/lib/validation");
const init = async () => {
    const server = Hapi.server(
        {
            port: 8000,
            host: 'localhost'
        }
    )
    await server.start()
    console.log(`Server run at ${server.info.uri}`)
}

init()