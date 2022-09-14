export async function getProdutos() {
    const res = await fetch('https://bling.com.br/Api/v2/produtos/json/&apikey=eda45968702e9e3ff10bb3dbd0fdd14286ecac428363231ed48271ad38fb7067b8578dbc');
    const datajson = await res.json();

    return datajson.retorno.produtos;
}

export async function getProdutosComImagem() {
    const res = await fetch('https://bling.com.br/Api/v2/produtos/json/&apikey=eda45968702e9e3ff10bb3dbd0fdd14286ecac428363231ed48271ad38fb7067b8578dbc&imagem=S');
    const datajson = await res.json();

    return datajson.retorno.produtos;
}

export async function getProdutoComImagemByName(name) {
    const produtos = await getProdutosComImagem();
    const item = produtos.find(_produto => _produto.produto.descricao === name).produto;

    return item;
}

export async function getProdutosFromCategoria(categoria_id) {
    const produtos = await getProdutosComImagem();
    const itens = produtos.filter((produto) => produto.produto.categoria.id == categoria_id);

    return itens;
}