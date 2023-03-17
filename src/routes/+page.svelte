<script lang="ts">
  import { GetColorName } from "hex-color-to-color-name";
  import { wcagContrastChecker } from "@mdhnpm/wcag-contrast-checker";
  import Clipboard from "../../node_modules/svelte-clipboard/src/Clipboard.svelte";
  import { each } from "svelte/internal";
  import WaterDrop from "$lib/WaterDrop.svelte";

  let colorList: string[] = [];
  let colorExampleHold: string[] = [];
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
  let testColor = (e: string) => {
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
  let colorUseExample = (e: string) => {
    colorExampleHold.push(e);
    colorList = [e];
    colorList = colorList;
    exampleOpenState = 1;
  };
  let hideUseExample = (e: string) => {
    exampleOpenState = 0;
    colorList = [e];
    colorExampleHold = [];
    colorList = colorList;
    colorExampleHold = colorExampleHold;
  };
</script>

<main>
  <div class="generator">
    <button class="generate-btn" on:click={generateNewColor}>Generate</button>
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
              <div class="preview-brand">
                <div class="preview-top">
                  <WaterDrop fill={"#222222"} />
                </div>
                <div class="preview-btm">
                  <h1>Hello World!</h1>
                  <p>This is my preview webpage!</p>
                </div>
              </div>
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
              <div class="preview-brand">
                <div class="preview-top">
                  <WaterDrop fill={"#FFFFFF"} />
                </div>
                <div class="preview-btm">
                  <h1>Hello World!</h1>
                  <p>This is my preview webpage!</p>
                </div>
              </div>
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
  .generator  {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 85%;
    padding: 5px;
  }
  
  button {
    padding: 5px;
    margin: 0 3px;
  }
  .generate-btn {
    width: 50%;
    margin: 0 auto;
  }

  .preview-content {
    width: 85%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  .preview-content section {
    margin: 0 10px;
    padding: 0 0 10px 0;
  }

  .preview-brand {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
</style>
