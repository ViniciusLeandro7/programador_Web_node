
import { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, deletaLivroPorId } from '../Services/livroServices.js';

export const getLivros = (req, res) => {
    try {
        const livros = getTodosLivros();
          res.send(livros);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getLivro = (req, res) =>{
    try{
        const id = req.params.id

        if(id && Number(id)){
            const livro = getLivroPorId(id)
            res.send(livro)

        } else{
            res.status(422)

        }
      
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const postLivro = async (req, res) => {
    try {
        const livroNovo = req.body;
        if(req.body.nome){
           insereLivro(livroNovo);
           res.status(201).json(livroNovo);

        } else {
            res.status(422)
            res.send("O campo nome é obrogatório")
        }
        
    }catch (error) {
        res.status(500).send(error.message);
    }
}

export const patchLivro = async (req, res) => {
  try {
    const id = req.params.id;
    const body = res.body

    if(id && Number(id)){
        modificaLivro(body, id);
        res.send("Livro modificado com sucesso");

    } else {
        res.status(422)
        res.send("Id invalido")
    }

  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
export const deletaLivro = (req, res) => {
  try {
    const id = req.params.id;

    if(id && Number(id)) {
        deletaLivroPorId(id);
        res.send("Livro deletado com sucesso");

    }else {
        res.status(422)
        res.send("Id invalido")
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};