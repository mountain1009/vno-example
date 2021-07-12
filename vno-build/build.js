/* eslint-disable */
/* eslint-disable prettier/prettier */
// deno-lint-ignore-file
import Vue from "https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js";


    
// ===========================

// LIVE RELOADING

// Create WebSocket connection.
const socket = new WebSocket("ws://localhost:8080");

const reloadWindow = () => {
  window.location.reload();
};

// Connection opened
socket.addEventListener("open", function (event) {
  socket.send("[LiveReload client connected]");
});

// Listen for messages
socket.addEventListener("message", function (event) {
  socket.send("[LiveReload reloading...]");
  if (event.data === 'reload window') {
    reloadWindow();
  }
});

// ===========================

 
const HelloVno = Vue.component("hello-vno", {
  template:  /* html */ `
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      <br />
    </p>
    <h3>
      <a href="https://vno.land" target="_blank" rel="noopener">vno.land</a> &
      <a
        href="https://github.com/oslabs-beta/vno"
        target="_blank"
        rel="noopener">
        github
      </a>
    </h3>
    <ul>
      <br />
    </ul>
  </div>
`,
  name: 'hello-vno',
  props: {
    msg: String,
  },
});

const HelloVno1 = Vue.component("hello-vno", {
  template:  /* html */ `
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      <br />
    </p>
    <h3>
      <a href="https://vno.land" target="_blank" rel="noopener">vno.land</a> &
      <a
        href="https://github.com/oslabs-beta/vno"
        target="_blank"
        rel="noopener">
        github
      </a>
    </h3>
    <ul>
      <br />
    </ul>
  </div>
`,
  name: 'hello-vno',
  props: {
    msg: String,
  },
});

const App = new Vue({
  template:  /* html */ `
  <div id="app">
    <img
      src="https://svgshare.com/i/SNz.svg"
      alt="image"
      border="0"
      width="450"
      height="450"
    />
    <HelloVno msg="you are building: . with vno" />
    <HelloVno1 msg="you are building: . with vno" />
  </div>
`,
  name: 'app',
  components: {HelloVno,HelloVno1},
});

App.$mount("#app")