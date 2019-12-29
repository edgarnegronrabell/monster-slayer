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
      this.turns = []
    },
    
    attack() {
      let damage = this.calculateDamage(3, 10);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: `You have dealt ${damage} `
      });
      if(this.checkWin()) {
        return;
      }
      this.monsterAttack();
    },
    specialAttack() {
      let damage = this.calculateDamage(10, 20);
      this.monsterHealth -= damage
      this.turns.unshift({
        isPlayer: true,
        text: `Critical hit:  ${damage} `
      });
      if(this.checkWin()) {
        return;
      }
      this.monsterAttack();
      this.turns
    },
    heal() {
      if(this.playerHealth <= 90) {
        let healing = this.calculateDamage(10, 15);
        this.playerHealth += healing
        this.turns.unshift({
          isPlayer: true,
          text: `Player heals ${healing} hit points.`
        });
      } else {
        this.playerHealth = 100;
      }
      this.monsterAttack();
    },
    giveUp() {
      this.startGame();
      
    },
    monsterAttack() {
      let damage =  this.calculateDamage(5, 13); 
      this.playerHealth -= damage
      this.turns.unshift({
        isPlayer: false,
        text: `The monster has dealt ${damage} `
      });
      this.checkWin();
    },
    playerAttack() {
      let damage = this.calculateDamage(3, 10);
      this.monsterHealth -= damage
    
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
      this.turns.unshift({
          isPLayer: true,
          
      })
    } 
  },
  computed: {
    playerDamageInflicted() {
      return `You have been dealt ${this.attack}`
    },
    monsterDamageInflicted() {
      return `You have dealt ${this.attack}`
    }
  }
});