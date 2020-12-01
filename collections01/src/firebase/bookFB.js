import {connectionFS} from './FBconnection'

export class LivroFB{
    state = {
        collection: connectionFS.collection('ColecionaveisFirestore/itens/livros')
    }

    getCollection(){
        return this.state.collection
    }

    addBook(book){
        this.state.collection.add(book)
    }

    editBook(book){
        const {id} = book
        delete book.id

        this.state.collection.doc(id).update(book)
    }

    removeBook(book){
        this.state.collection.doc(book.id).delete()
    }
}