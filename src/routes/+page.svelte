<script>
  import { GetColorName } from "hex-color-to-color-name";
  import { wcagContrastChecker } from "@mdhnpm/wcag-contrast-checker";
  import Clipboard from "../../node_modules/svelte-clipboard/src/Clipboard.svelte";
  import { each } from "svelte/internal";

  let colorList = [];
  let colorExampleHold = [];
  let exampleOpenState = 0;
  let hexStandard = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
  ];
  let randomHexStandard = () => {
    return hexStandard[Math.floor(Math.random() * hexStandard.length)];
  };
  let testColor = (e) => {
    let blackTextCheck = wcagContrastChecker("#000000", e);
    return blackTextCheck.regularText.aa;
  };
  let generateNewColor = () => {
    if (exampleOpenState == 1) {
      exampleOpenState = 0;
    }
    let newHexColor = "#";
    for (let i = 0; i < 6; i++) {
      newHexColor += randomHexStandard();
    }
    colorList.push(newHexColor);
    colorList = colorList;
  };
  let colorUseExample = (e) => {
    colorExampleHold.push(e);
    colorList = [e];
    colorList = colorList;
    exampleOpenState = 1;
  };
  let hideUseExample = (e) => {
    exampleOpenState = 0;
    colorList = [e];
    colorExampleHold = [];
    colorList = colorList;
    colorExampleHold = colorExampleHold;
  };
</script>

<main>
  <div class="generator">
    <button on:click={generateNewColor}>Generate</button>
    {#each colorList as item}
      {#if testColor(item) == true}
        <div class="item" style="background-color:{item}; color:#222222">
          <div style="display:flex;">
            <h1>{item}</h1>
            <Clipboard
              text={item}
              let:copy
              on:copy={() => {
                console.log("Has Copied");
              }}
            >
              <button class="copy-btn" on:click={copy}>Copy</button>
            </Clipboard>
            {#if exampleOpenState == 0}
              <button on:click={(e) => colorUseExample(item)} class="example">
                Example Use
              </button>
            {:else}
              <button on:click={(e) => hideUseExample(item)} class="example">
                Hide Example
              </button>
            {/if}
          </div>
          <p>{GetColorName(item)}</p>

          {#if exampleOpenState == 1}
            <div class="hidden-preview">
              <hr style="margin: 5px 0;" />
              <h1>Hello World!</h1>
              <p>This is my preview webpage!</p>
              <br />
              <div class="preview-content">
                <section>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia maxime, quas dolore itaque enim magni molestias illo
                  in, temporibus, doloremque accusamus pariatur assumenda
                  reprehenderit fugit! Quod non atque maxime! Voluptatem.
                </section>
                <section>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia maxime, quas dolore itaque enim magni molestias illo
                  in, temporibus, doloremque accusamus pariatur assumenda
                  reprehenderit fugit! Quod non atque maxime! Voluptatem.
                </section>
                <section>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia maxime, quas dolore itaque enim magni molestias illo
                  in, temporibus, doloremque accusamus pariatur assumenda
                  reprehenderit fugit! Quod non atque maxime! Voluptatem.
                </section>
              </div>
            </div>
          {/if}
        </div>
      {:else}
        <div class="item" style="background-color:{item}; color:#FFFFFF">
          <div style="display:flex;">
            <h1>{item}</h1>
            <Clipboard
              text={item}
              let:copy
              on:copy={() => {
                console.log("Has Copied");
              }}
            >
              <button class="copy-btn" on:click={copy}>Copy</button>
            </Clipboard>
            {#if exampleOpenState == 0}
              <button on:click={(e) => colorUseExample(item)} class="example">
                Example Use
              </button>
            {:else}
              <button on:click={(e) => hideUseExample(item)} class="example">
                Hide Example
              </button>
            {/if}
          </div>
          <p>{GetColorName(item)}</p>

          {#if exampleOpenState == 1}
            <div class="hidden-preview">
              <hr style="margin: 5px 0;" />
              <h1>Hello World!</h1>
              <p>This is my preview webpage!</p>
              <br />
              <div class="preview-content">
                <section>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia maxime, quas dolore itaque enim magni molestias illo
                  in, temporibus, doloremque accusamus pariatur assumenda
                  reprehenderit fugit! Quod non atque maxime! Voluptatem.
                </section>
                <section>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia maxime, quas dolore itaque enim magni molestias illo
                  in, temporibus, doloremque accusamus pariatur assumenda
                  reprehenderit fugit! Quod non atque maxime! Voluptatem.
                </section>
                <section>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia maxime, quas dolore itaque enim magni molestias illo
                  in, temporibus, doloremque accusamus pariatur assumenda
                  reprehenderit fugit! Quod non atque maxime! Voluptatem.
                </section>
              </div>
            </div>
          {/if}
        </div>
      {/if}
    {/each}
  </div>
</main>

<style>
  .item {
    padding: 5px;
  }
  button {
    /* background: none; */
    /* border: none; */
    padding: 10px;
  }
  button {
    padding: 0 2px;
    margin: 5px;
  }

  .preview-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
</style>
