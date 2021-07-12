/* eslint-disable */
/* eslint-disable prettier/prettier */
// deno-lint-ignore-file
import Vue from "https://deno.land/x/vue_js@/mod.js";

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
export default App