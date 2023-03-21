let tabla = parseInt(prompt(" ¿Que tabla quieres que calcule?"))
alert(`Empecemos con la tabla del ${tabla}`)

tablaMultiplicar(tabla)

function tablaMultiplicar(tabla) {

       for (let i = 0; i <= 10; i++) {
              resultado = tabla * i
               // Salta cuando i =3
              if (i=== 3) {
               alert("lo siento no se puede multiplicar los numeros por 3 ,me olvide como se hace")      
                     continue
              } 
              
              alert(`${tabla}*${i}= ${resultado}`)
              }
              }
   




       
       
