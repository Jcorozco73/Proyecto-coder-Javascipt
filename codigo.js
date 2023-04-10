let personitas = [
       { id: 1, nombre: "Juan Carlos", apellido: "Martin", edad: 49, mascotas: true},
       { id: 2, nombre: "Debora", apellido: "Raynaud", edad: 31, mascotas: true},
       { id: 3, nombre: "Juan Cruz", apellido: "Martin", edad: 11, mascotas: false},
       { id: 4, nombre: "Santiago", apellido: "Martin", edad: 9, mascotas: false}
   ]
   
   let menu = "0 - Para salir \n1 - Para listar familia \n2 - Para filtar por mayores de 30 años \n3 - Para encontar personas de la familia"
   let opcion
   
   
       let familia = personitas.map(personitas => {
       return `NOMBRE: ${personitas.nombre} EDAD: ${personitas.edad} ID: ${personitas.id}`
   })
   
   function listarFamilia (personitas) {
       return personitas.map (personitas =>  {
            return `ID: ${personitas.id} NOMBRE: ${personitas.nombre} APELLIDO: ${personitas.apellido} EDAD: ${personitas.edad}`
       }).join("\n")
   }
   
   do {
   
   opcion = Number(prompt(menu))
   
   switch (opcion) {
       case 1:
           alert("Lista de Familia:\n" + listarFamilia(personitas))
           
           break;
           
           case 2:
               let edad =  Number(prompt("Ingrese una edad"))
               let familiasFiltradas = personitas.filter(persona => persona.edad >= edad)
              
               if(familiasFiltradas) {
                   alert(`El nombre de la persona encontrada:\n ${listarFamilia(familiasFiltradas)}`) 
                 
               }else {
                   alert("No existen personas de esa edad")
               }
           
           break;
   
           case 3:
               let id = Number(prompt("Ingrese un ID"))
               let personaBuscada = personitas.find(personitas => personitas.id === id)
               alert(personaBuscada.nombre)
           
           break;
   
       default:
           if(opcion != 0 ){
               alert("Opcion ingresada incorrecta")
           }
           break;
   }
   
       
   } while (opcion !=0);
   


