/*
Ciao ragazzi,
Esercizio di oggi: Vue Slider
nome repo: vue-slider
Descrizione:
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
Bonus:
al click su una thumb, visualizzare in grande l'immagine corrispondente
applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
quando il cursore va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
Consigli del giorno:
- regola d'oro: riciclare ovunque possibile! Questo significa che per la parte di markup possiamo recuperare html e css dell'esercizio svolto qualche giorno fa: è già tutto pronto!
- il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l'esercizio si riduce a poche righe ;)
Buon lavoro e buon divertimento! (modificato) 
*/

// const creatApp = Vue.creatApp;
// stessa cosa di scrivere:
const { createApp } = Vue

createApp({
    data() {
        return {

            // mi salvo una variabile dove memorizzo quale sia la slide attiva
            activeSlideIndex: 0,


            slides: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ],

        }

    },

    created() {
        // Avvia l'autoplay
        this.autoPlay();
    },

    methods: {

        autoPlay() {
            setInterval(this.nextSlide, 2000);
        },

        nextSlide() {
            this.activeSlideIndex++;

            // controllo che l'indice non vada oltre l'ultima immagine
            if (this.activeSlideIndex >= this.slides.length) {
                this.activeSlideIndex = 0
            }
        },

        prevSlide() {
            this.activeSlideIndex--;

            // qui controllo che l'indice non vada oltre lo zero 
            if (this.activeSlideIndex < 0) {
                this.activeSlideIndex = this.slides.length - 1;
            }
        },

        changeSlide(index) {
            console.log(index)
            this.activeSlideIndex = index
        },
    }
}).mount('#app');

