new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameStarted: false,
    healtbarResponseStyle: {
      width: '100%'
    },

  },
  methods: {
    startGame() {
      this.gameStarted = !this.gameStarted;
    },
    giveUpGame() {
      this.startGame();
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
    playerAttack() {
      let random = Math.floor((Math.random() * 10));
      console.log(random);
      if(this.monsterHealth > 0) {
       return this.monsterHealth -= random
      }
    },
    monsterAttack() {
      let random = Math.floor((Math.random() * 13));
      console.log(random);
      if(this.playerHealth > 0) {
        return this.playerHealth -= random 
    }
  }
}
  // computed: {

  // }
});