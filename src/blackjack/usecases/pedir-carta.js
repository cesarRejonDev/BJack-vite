/**
 * Esta función nos permite pedir una carta del deck ya creado
 * @param {Array<String>} deck es un arreglo de string
 * @returns {String} retorna la carta del deck
 */


export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}
