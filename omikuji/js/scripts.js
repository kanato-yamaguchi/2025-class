// This file is intentionally left blank.
document.getElementById('draw').addEventListener('click',function(){
    const omikujiResults = ['大吉','吉','中吉','小吉','末吉','凶','小凶','大凶'];
    const color =["red","yellow","blue","gray","lime","navy","olive","silver"];
    var tmp = Math.floor(Math.random()*omikujiResults.length)
    const result = omikujiResults[tmp];
    var x = document.getElementById('result');
    x.style.color =color[tmp];
    document.getElementById('result').textContent =
    `あなたの運勢は...${result}!`;
});