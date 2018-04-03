<template>
  <div class="home">
    <!-- router-link est équivalent à <a href="lol"></a> -->
    <router-link to="/video/decompte.mp4">
      <button>Lancer le film</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    margin: 0;
    padding: 0;
    width: 100vw;
    height:100vh;
    overflow:hidden;
    background-color: black;
  }

  button {
    text-transform: uppercase;
    color: #fff;
    background-color: rgba(0, 0, 0, 0);
    border: solid 2px #fff;
    border-radius: 5px;
    width: 200px;
    height: 75px;

    position: absolute;
    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);
    transition: all .5s ease-in;

    cursor: pointer;
  }

  button:hover {
    background-color: #fff;
    color: black;
    border-color: black;
  }
</style>
