<script lang="ts">
  import { GetColorName } from "hex-color-to-color-name";
  import { wcagContrastChecker } from "@mdhnpm/wcag-contrast-checker";
  import Clipboard from "../../node_modules/svelte-clipboard/src/Clipboard.svelte";

  let colorList: Array<string> = [];
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
    let newHexColor = "#";
    for (let i = 0; i < 6; i++) {
      newHexColor += randomHexStandard();
    }
    colorList.push(newHexColor);
    colorList = colorList;
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
          </div>
          <p>{GetColorName(item)}</p>
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
          </div>
          <p>{GetColorName(item)}</p>
        </div>
      {/if}
    {/each}
  </div>
</main>

<style>
  button {
    /* background: none; */
    /* border: none; */
    padding: 10px;
  }
  .copy-btn {
    padding: 0 2px;
    margin: 5px;
    
  }
</style>
