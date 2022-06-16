class Usuario {
    constructor(nombre, apellido, mascotas, titulo, autor){
        this.nombre = nombre;
        this.apellido = apellido;
        this.mascotas = [mascotas];
        this.libros = [{titulo:titulo,
                        autor:autor}];
    };
    getFullName () {
        const fullName = `Mi nombre completo es: ${this.nombre} ${this.apellido}`;
        console.log(fullName);
    };
    addMascota(petName){
        this.mascotas.push(petName)
    };
    countMascotas (){
        console.log(this.mascotas.length);
    }
    addBook (libro, autor){
        const nuevoLibro = {titulo:libro, autor:autor};
        this.libros.push(nuevoLibro);
    }
    getBookNames(){
        const arr = [];
        this.libros.forEach(libro=>{
            arr.push(libro.titulo)
        })
        console.log(arr)
    }
}

const usuario = new Usuario ("Daniel","Alcázar","Bowie", "It","Stephen King");

usuario.addMascota("Pepo")
usuario.addBook("American Gods", "Neil Gaiman")
usuario.countMascotas()
usuario.getFullName()
usuario.getBookNames()
console.log(usuario)