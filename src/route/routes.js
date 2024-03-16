import {addNoteHandler} from "../handle/handler";

const routes = [
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler
    }
]

module.exports =  routes