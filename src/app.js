import { server as _server } from 'hapi'
import routes from 'route/routes'
const init = async () => {
    const server = _server(
        {
            port: 8000,
            host: 'localhost'
        }
    )

    server.route(routes)
    await server.start()
    console.log(`Server run at ${server.info.uri}`)
}

init()