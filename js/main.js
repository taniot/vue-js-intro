const { createApp } = Vue
    //option api
  const vm = createApp({
    data() {
      return {
        //qui inseriamo i dati che voglio utilizzare
        message: 'Titolo della pagina',
        subtitle: 'Sottotitolo della pagina',
        initialNumber: 2,
        mieClassi: 'red',
        friends: ['Carlo', 'Marco', 'Luca']
      }
    },
    methods: {
        generateRandom(min, max){
            return Math.floor(Math.random() * (max - min + 1) ) + min; 
        },
        // greetings: function(){
        //     return 'ciao';
        // }
        greetings(){
            //return 'ciao';
            console.log('Ho cliccato sul bottone');
            this.friends.push(this.generateRandom(1, 100));
            console.log(this.friends);
        }
    }
  }).mount('#app');

//plain js

// const message = 'Hello Vue!';

// function greetings(){
//     return 'ciao';
// }


