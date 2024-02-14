const sanValentin = function () {

    const mensajes = ["Las cartas de amor se empiezan sin saber lo que se va a decir y se terminan sin saber lo que se ha dicho - Rousseau (Este filosofo me cae re mal, pero es una de las frases que me gustan de él)","El curso del amor verdadero nunca fue fácil - William Shakespeare" ,"El amor se compone de una sola alma que habita en dos cuerpos - Aristoteles" ,"cada vez que te busco encuentro una nueva forma de ver la vida","Te quiero no por lo que eres, sino por lo que soy yo cuando estoy contigo.", "Mi plan no era enamorarme, pero me sonreíste y lo arruinaste.", "No buscaba nada, pero en ti lo encontré todo.", "Tú no sabes el desorden de emociones que me provoca tu sonrisa.", "Eres la página más bella que el destino escribió en mi vida.", "El amor es lo único que crece cuando se reparte.", "Tu regalo de San Valentín soy yo… de nada.", "No eres ChatGPT, pero en ti encuentro todo lo que busco.", "Te quiero en colores que aún no has visto.", "Mi café favorito siempre será el de tus ojos.", "Entre tantos errores que he cometido, tú eres el acierto más hermoso que he tenido","Eres el significado de la palabra belleza e inteligencia", "Lo vacío de mis días se llenan con tu hermosa sonrisa"];

    let i = 0
    for (cantue in mensajes){
        i++
    }
    console.log(i)

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    let op = getRandomInt(17);
    let mensaje = mensajes[op];

    console.log(mensaje)
    document.getElementById("mensajes").innerHTML = mensaje
}