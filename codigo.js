let familias = [
       { id: 1, nombre: "Juan Carlos", apellido: "Martin", edad: 49, mascotas: true},
       { id: 2, nombre: "Debora", apellido: "Raynaud", edad: 31, mascotas: true},
       { id: 3, nombre: "Juan Cruz", apellido: "Martin", edad: 11, mascotas: false},
       { id: 4, nombre: "Santiago", apellido: "Martin", edad: 9, mascotas: false}
   ]
   
   let menu = "0 - Para salir \n1 - Para listar familia \n2 - Para filtar por mayores de 30 años \n3 - Para encontar personas de la familia"
   let opcion
   
       let Mayoresde30 = prompt("Ingrese Personas mayores de 30 años").toLowerCase()
       let personasMayoresDe30 = familias.filter(persona => persona.edad > 30)
       console.log(personasMayoresDe30)
   
       let salida = personasMayoresDe30.map(familias => {
       return `NOMBRE: ${familias.nombre} EDAD: ${familias.edad}`
   })
   
   function listarFamilia (familias) {
       return familias.map (familias =>  {
            return `ID: ${familias.id} NOMBRE: ${familias.nombre} APELLIDO: ${familias.apellido} EDAD: ${familias.edad}`
       }).join("\n")
   }
   
   do {
   
   opcion = Number(prompt(menu))
   
   switch (opcion) {
       case 1:
           alert("Lista de Familia:\n" + listarFamilia(familias))
           
           break
           
           case 2:
               let edad = prompt("Ingrese una edad").toLowerCase()
               let personasMayoresDe30 = familias.filter(persona => persona.edad > 30)
              
               if(personasMayoresDe30 > edad) {
                   alert("El nombre de la persona encontrada:" + listarFamilia(familias))
               } else {
                   alert("Persona de la familia menor a 30 años")
               }
          
           break
   
           case 3:
               let personaBuscada = familias.find(familia => familia.id === 2)
               alert(personaBuscada)
           
           break
   
       default:
           if(opcion != 0){
               alert("Opcion ingresada incorrecta")
           }
           break
   }
   
       
   } while (opcion !=0)
   




       
       
