let tabla = parseInt(prompt(" Ingrese el numero de la tabla"))
alert(`Empecemos con la tabla del ${tabla}`)

for (let i = 0; i <= 10; i++) {
       resultado = tabla * i

       if (i=== 3) {
        continue
       }
       alert(`${tabla}*${i}= ${resultado}`)
}
