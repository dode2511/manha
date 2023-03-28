import { useState } from "react";
import axios from "axios";

export default function App() {
  const [descricao, setDescricao] = useState("");
  const [marca, setMarca] = useState("");
  const [quant, setQuant] = useState("");
  const [preco, setPreco] = useState("");
  const [mensa, setMensa] = useState("");

  async function enviaDados(e) {
    e.preventDefault();

    const objProduto = {
      descricao,
      marca,
      quant,
      preco
    };

    const produto = await axios.post(
      "http://localhost:3000/produtos",
      objProduto
    );

    if (produto.data.id > 0) {
      setMensa("Ok. Produto inserido com Sucesso");
    } else {
      setMensa("Erro... Produto não inserido");
    }

    // após 3 segundos limpa a mensagem
    setTimeout(() => setMensa(""), 3000);

    // limpa os campos do form
    setDescricao("");
    setMarca("");
    setQuant("");
    setPreco("");
  }

  return (
    <div className="container-fluid">
      <nav className="navbar bg-primary" data-bs-theme="dark">
        <h3 className="fst-italic mx-3">Inclusão de Produtos</h3>
      </nav>
      <form className="mx-3 mt-3" onSubmit={enviaDados}>
        <div className="form-group">
          <label htmlFor="descricao">Descrição do Produto:</label>
          <input
            type="text"
            className="form-control"
            id="descricao"
            required
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="autor">Marca:</label>
          <input
            type="text"
            className="form-control"
            id="marca"
            required
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
          />
        </div>
        <div className="row mt-2">
          <div className="col-sm-4">
            <div className="form-group">
              <label htmlFor="ano">Quant.:</label>
              <input
                type="number"
                className="form-control"
                id="quant"
                required
                value={quant}
                onChange={(e) => setQuant(e.target.value)}
              />
            </div>
          </div>
          <div className="col-sm-8">
            <div className="form-group">
              <label htmlFor="preco">Preço R$:</label>
              <input
                type="number"
                className="form-control"
                id="preco"
                step="0.01"
                required
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
              />
            </div>
          </div>
        </div>
        <input type="submit" className="btn btn-primary my-3" value="Enviar" />
        <input
          type="reset"
          className="btn btn-danger my-3 ms-3"
          value="Limpar"
        />
        <h4>{mensa}</h4>
      </form>
    </div>
  );
}
