	new Vue ({
		el: '#app',
		data: {
            isGameRunning: false,
            myHealth: 100,
            monsterHealth: 100,
            // playerHealths: [myHealthOutput1, myHealthOutput2]
        },
        methods: {
            startGame(){
                this.isGameRunning = true,
                this.myHealth = 100,
                this.monsterHealth = 100
            },
            attack(){
                var min = 3;
                var max = 5;
                var damage = Math.max(Math.floor((Math.random() * max))+1, min);
                this.myHealth-= damage;

                if (this.myHealth <= 0) {
                    alert ('Monster won!');
                    this.isGameRunning = false;
                }

                min = 4;
                max = 6;
                damage = Math.max(Math.floor((Math.random() * max))+1, min);;
                this.monsterHealth-= damage;

                if (this.monsterHealth <= 0) {
                    alert ('I won! In your face sucker!!');
                    this.isGameRunning = false;
                }
            },
            specialAttack(){

            },
            heal(){

            },
            giveUp(){

            }
        //     myHealthChange(){
        //         this.myHealth-= Math.floor((Math.random() * 5))
        //         this.monsterHealth-= Math.floor((Math.random() * 5))
        //     }
        // },
        // computed: {
        //     myHealthOutput1(){
        //         return this.myHealth-= Math.floor((Math.random() * 5))
        //     },
        //     myHealthOutput2(){
        //         return this.monsterHealth-= Math.floor((Math.random() * 5))
        //     }
        // }
        }
    });
    