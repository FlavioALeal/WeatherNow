<template>
    <div id="app">
      <header>
        <div class="header">
          <img src="./assets/logo.svg" alt="WeatherNow">
        </div>
      </header>
      <main>
        <div class="content">
          <card-list/>
        </div>
      </main>
    </div>
</template>

<script>
import CardList from './components/CardList'

export default {
  name: 'App',
  components: {
    CardList
  }
}
</script>

<style>
  body, html{
    min-height: 300px !important;
    min-width: 350px !important;
  }

@media screen and (min-width: 941px) {
  body, html{
    overflow: hidden;
  }
  .content{
      height: 100vh;
      min-height: 300px;
      background-color: "#f1f1f1";
      margin: 0px auto;
      padding-top: 36px;
      text-align: center;
      display: flex;
      position: relative;
  }

  .cards-row{
      text-align: center;
      display: flex;
      flex-direction: row;
      text-align: center;
      width: 100%;
      align-items: center;
      justify-content: center;
      height: 100%;
  }
  .card1{order: 1}
  .card2{order: 2}
  .card3{order: 3}
}

@media (max-height: 400px){
  html, body{
    overflow:scroll !important;
  }
}

@media (max-width: 940px){
  body, html{
    min-height: 900px;
  }

  .content{
    height: 100vh;
    min-height: 800px;
    background-color: #f1f1f1;
    margin: 0px auto;
    padding-top: 36px;
    text-align: center;
    display: flex;
    position: relative;
  }
  .cards-row{
    text-align: center;
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .card{
    margin-bottom: 30px;
  }
  .card1{order: 2}
  .card2{order: 1}
  .card3{order: 3}
}

</style>
