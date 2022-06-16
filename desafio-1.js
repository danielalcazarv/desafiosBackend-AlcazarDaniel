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
    addMascota(string){
        this.mascotas.push(string)
    };
    countMascotas (){
        console.log(this.mascotas.length);
    }
    addBook (string1, string2){
        const nuevoLibro = {titulo:string1, autor:string2};
        this.libros.push(nuevoLibro);
    }
    getBookNames(){
        const arr = [];
        this.libros.forEach(x=>{
            acc.push(x.titulo)
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