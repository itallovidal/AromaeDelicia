import './produto.css'

interface ProdutoProps {
  produto: {
    srcFoto: string;
    preco: string;
    nome: string;
  };
}

function Produto({produto} : ProdutoProps) {

  return (
    <div className={"container_produto showing"}>
        <p>{produto.nome}</p>

        <picture>
          <img src={produto.srcFoto} alt="" />
        </picture>

        <span className={'preco'}>${produto.preco}</span>
    </div>
  );
}

export default Produto;
