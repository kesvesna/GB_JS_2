
let text = [
        'As shown above, the aesthetic impact annihilates the lyrical mythopoetic chronotope. '+
        'The dialogue context firmly enlightens the lyrical trochee.'+
        'Developing this theme, the dialogical context perfectly discords the urban dimension.'+
        'It is appropriate to make a reservation:'+
        'dactyl gives an existential rhythmic pattern - this is already the fifth stage'+
        'of understanding according to M. Bakhtin. The meter is theoretically possible'+
        'Linearization of thinking is aware of the articulation mechanism.'
];



var a = "[{ 'As shown above, the 'aesthetic' impact annihi'lates 'the' lyrical mythop'oetic chronotope.' " +
                " 'The dialogue context firmly 'enlightens' the lyric'al trochee.' " +
                " 'Developing 'this' theme, the dialogical conte'xt perfectly disco'rds the 'urban' dimension.' }]";
//var b = a.replace(/\'/g, "\"");
var b = a.replace(/^'|(\s)'|'(\s)|'$/g, '$1"$2');





const init = () => {

        let goodsList = document.querySelector('.goods-list');
        goodsList.innerHTML = '<br>' + a + '<p><br></p>';

        let basket = document.querySelector('.basket');
        basket.innerHTML = '<br>' + b;

}

window.onload = init