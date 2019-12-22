new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    healtbarResponseStyle: {
      width: '100%'
    },
    turns: []
  },
  methods: {
    startGame() {
      this.gameIsRunning = !this.gameIsRunning;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
    
    attack() {
      this.playerAttack();
      this.turns.unshift({
        isPlayer: true,
        
      });
      if(this.checkWin()) {
        return;
      }
      this.monsterAttack();
    },
    specialAttack() {
      this.monsterHealth -= this.calculateDamage(10, 20);
      this.turns.unshift(this.monsterAttack);
      if(this.checkWin()) {
        return;
      }
      this.monsterAttack();
      this.turns
    },
    heal() {
      if(this.playerHealth <= 90) {
        this.playerHealth += this.calculateDamage(10, 15);
      } else {
        this.playerHealth = 100;
      }
      this.monsterAttack();
    },
    giveUp() {
      this.startGame();
    },
    monsterAttack() {
      this.playerHealth -= this.calculateDamage(5, 13); 
      this.checkWin();
    },
    playerAttack() {
      this.monsterHealth -= this.calculateDamage(3, 10);
    },
    calculateDamage(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min)
    },
    checkWin() {
      if(this.monsterHealth <= 0) {
        if(confirm('You won! Play again?')) {
          this.startGame();
        } else {
          gameIsRunning = false;
        }
        return true;
      } else if (this.playerHealth <= 0) {
        if(confirm('You lost! Play again?')) {
          this.startGame();
        } else {
          gameIsRunning = false;
        }
        return true;
      }
      return false;
    },
    pushTurns(attacker) {
      return this.turns.unshift(attacker)
    } 
  },
  computed: {
    playerDamageInflicted() {
      return `You have been dealt ${this.attack}`
    },
    monsterDamageInflicted() {}
  }
});