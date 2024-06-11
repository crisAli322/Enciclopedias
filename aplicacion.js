var app = new Vue({
    el: '#app',
    data: {
        titulo: 'ENCICLOPEDIA DE PERSONAJES',
        busqueda: '',
        personajes: [
            { nombre: 'Mitsuri',
            imagen: 'https://www.geekmi.news/__export/1689529092563/sites/debate/img/2023/07/16/disexo_sin_txtulo_x29x.jpg_554688468.jpg',
            ancho: '500px',
            url: 'mitsuri.html'
            },
            { nombre: 'Leon Kennedy',
            imagen: 'https://i.pinimg.com/564x/dc/37/58/dc375832b16cc0d130dc6ba8d40d897b.jpg',
            ancho: '200px',
            url: 'leon.html'
            },
            { nombre: 'Jefe Maestro',
            imagen: 'https://img.europapress.es/fotoweb/fotonoticia_20211210151630_1200.jpg',
            ancho: '500px', url: 'jefe.html' },
            { nombre: 'Vegeta',
            imagen: 'https://i.blogs.es/acc7e2/vegeta-ultraego-dragon-ball/375_375.webp',
            ancho: '250px',
            url: 'vegeta.html'
            },
            { nombre: 'Yujiro',
            imagen: 'https://images5.alphacoders.com/132/1328553.png',
            ancho: '250px',
            url: 'yujiro.html'
            }
        ]
    },

    methods: {
        cambiarPagina(nombre) {
            const personaje = this.personajes.find(p => p.nombre === nombre);
            if (personaje) {
                window.location.href = personaje.url;
            }
        }
    },

    computed: {
        personajesFiltrados() {
            return this.personajes.filter(personaje =>
                personaje.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
            );
        }
    }
});
