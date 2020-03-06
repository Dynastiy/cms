<template>
  <div class="">
    <h4 class="text-center text-white mt-4">Add New Bet</h4>
    <div class="hr mt-4"></div>
    <div class="container mt-4">
        <div class="mt-5">
            <div class="text-center">
              <form action="" v-on:submit="addBet()">
                <div>
                  <input type="text" placeholder="Home team" required v-model="data.home">
                </div>
                <div class="mt-4">
                  <input type="text" placeholder="Away Team" required v-model="data.away">
                </div>
                  <div class="mt-4">
                    <input type="text" placeholder="Odd Type" required v-model="data.odds">
                  </div>
                  <div class="mt-4">
                    <input type="number" placeholder="Winning" required v-model="data.number">
                  </div>
                  <div class="mt-4 text-center">
                    <button class="button">Add Bet</button>
                  </div>
              </form>
            </div>
        </div>
    </div>
    <div class="hr mt-4"></div>
    <h4 class="text-center text-white mt-4">Previous Bets</h4>

    <div class="hr mt-4"></div>

    <div class="container mt-4">
        <div class="row mt-5">
            <div class="col-lg-9 col-sm-12 col-md-12">
                <h4 class="text-white">Match: Arsenal - Chelsea</h4>
                <p class="text-secondary"> Odd Type: Home Win </p>
            </div>
            <div class="col-lg-3 col-sm-12 col-md-12">
                <p class="text-secondary">Date: 02/10/2020</p>
                <p class="text-secondary">Time: 09-04</p>
                <h4 class="text-white">Winning: &#8358; 10, 000</h4>
                <button class="deleteButton">Delete</button>
            </div>
            
           
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
 data () {
    return {
      data: []
    }
  },
  methods: {
       addBet() {
             let uri = 'https://buy-bet.firebaseio.com/';
            axios.post(uri, this.data).then((response) => {
               console.log(response);
            });
       }
    }


  // Fetches data when the component is created.
  // created () {    
  //   axios.get(``).then(response => {
  //   // JSON responses are automatically parsed.
  //     this.data = response.data
  //   })
  // }
  
}
</script>

<style scoped>
  input {
    width: 80% !important;
  }
  .button {
    background-color: #506228 !important;
    color: #fff;
    border-radius: 1rem !important;
    border: none;
    padding: 0.5rem 2rem;
    font-size: 1.5rem;
    font-weight: bold;
  }
  .deleteButton {
    background-color: #ff0000 !important;
    color: #fff;
    border-radius: 1rem !important;
    border: none;
    padding: 0.5rem 2rem;
    font-size: 1.5rem;
    font-weight: bold;
  }
</style>
