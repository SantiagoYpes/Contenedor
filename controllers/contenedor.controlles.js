const contenedores = (req, res) => {
    function llenarcontenedor(pesoMaximo = 0, pesos = [], valores = []) {
        let n = pesos.length;
        let numIter = 0
        numIter += 1 + 3 * n + n * Math.log2(n);
        let fracciones = valores.map(v => 0);
        let precios = valores.map((v, i) => [i, v / pesos[i]])
        precios = precios.sort((a, b) => b[1] - a[1])
        precios = precios.map(v => v[0]);
        console.log(fracciones);
        console.log(precios);
    
        let pesoContenedor = 0;
        for (let j = 0; j < precios.length; j++) {
            numIter++;
            let i = precios[j];
            if (pesoContenedor + pesos[i] <= pesoMaximo) {
                fracciones[i] = 1;
                pesoContenedor += pesos[i];
            } else {
                fracciones[i] = (pesoMaximo - pesoContenedor) / pesos[i];
                pesoContenedor = pesoMaximo;
            }
     
    
            if (pesoContenedor === pesoMaximo) break;
        }
        return fracciones;
    }
    const codigos =["01","02","03","04","05"]
    const nombres=["Café","Oro","Madera","Carne","Frutas"]
    const pesos = [12, 10, 15, 10, 8]
    const valores = [10000, 20000, 15000, 12000, 27000]
    
    let resultado = llenarcontenedor(24, pesos, valores)
    console.log(pesos);
    console.log(valores);
    console.log(resultado);
    let contenedor= "Productos: "+ nombres+ "<br>"+ "Códigos: "+codigos+"<br>"+"Valor: "+ valores+"<br>"+"Peso: "+pesos+"<br>"+ "Cant en Contenedor: "+resultado
    res.send(contenedor)
}

module.exports= {contenedores}