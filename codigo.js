let tabla = parseInt(prompt(" ¿Que tabla quieres que calcule?"))
alert(`Empecemos con la tabla del ${tabla}`)

for (let i = 0; i <= 10; i++) {
       resultado = tabla * i
        // Salta cuando i =3
       if (i=== 3) {
        continue
       }

       alert(`${tabla}*${i}= ${resultado}`)
}
