import { nanoid } from "nanoid";
import { push, filter } from "../notes";

const addNoteHandler = (request, h) => {
    //semua properti dari notes
    const {title, tags, body} = request.payload;
    const id = nanoid(16)
    const createdAt = new Date().toISOString()
    const updatedAt = createdAt

    const newNote = {
        title, tags, body, id, createdAt, updatedAt
    }

    //masukkan kedalam array notes
    push(newNote)

    const isSuccess = filter((notes) => notes.id === id).length > 0

    if (isSuccess) {
        const response = h.response({
            status: 'sukses',
            message: 'Catatan berhasil ditambahkan',
            data: {
                noteId: id
            }
        })
        response.code(201)
        return response
    }

    //respon gagal
    const response = h.response({
        status: 'fail',
        message: 'Catatan gagal ditambahkan',
    })

    response.code(500)
    return response


}

export default {addNoteHandler}