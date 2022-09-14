export async function getCategorias() {
    const res = await fetch('https://bling.com.br/Api/v2/categorias/json/&apikey=eda45968702e9e3ff10bb3dbd0fdd14286ecac428363231ed48271ad38fb7067b8578dbc');
    const datajson = await res.json();

    return datajson.retorno.categorias;
}
export async function getCategoriaByName(name) {
    const categorias = await getCategorias();
    const item = categorias.find(_categoria => _categoria.categoria.descricao === name).categoria;

    return item;
}