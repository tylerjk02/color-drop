import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../chunks/index.js";
/* empty css                                                    */const css$1 = {
  code: "svg.svelte-90db47{width:65px}",
  map: null
};
const WaterDrop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { fill } = $$props;
  if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0)
    $$bindings.fill(fill);
  $$result.css.add(css$1);
  return `<svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500.000000 500.000000" preserveAspectRatio="xMidYMid meet" class="svelte-90db47"><g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"${add_attribute("fill", fill, 0)} stroke="none"><path d="M2411 4793 c-17 -21 -20 -35 -15 -73 19 -147 -140 -439 -531 -970
-378 -513 -560 -803 -655 -1044 -19 -46 -29 -60 -53 -69 -54 -18 -249 -117
-335 -169 -124 -75 -233 -159 -326 -251 -138 -138 -224 -272 -279 -432 -27
-79 -31 -107 -35 -225 -3 -113 -1 -150 17 -223 79 -331 356 -624 796 -843 220
-110 260 -117 291 -50 14 29 15 37 3 62 -8 15 -25 34 -39 40 -14 7 -99 49
-190 93 -91 44 -201 105 -245 135 -328 228 -501 513 -482 796 17 261 186 508
487 710 89 60 288 170 306 170 6 0 8 -30 6 -70 -2 -38 1 -114 7 -169 l12 -101
-65 -61 c-301 -281 -334 -642 -89 -950 215 -270 668 -475 1178 -534 259 -30
618 -17 860 31 255 50 515 149 687 260 93 60 111 102 63 149 -35 36 -67 31
-159 -24 -109 -66 -164 -92 -276 -134 -495 -185 -1128 -193 -1635 -20 -545
185 -826 540 -691 871 27 67 95 169 143 215 l30 28 18 -48 c10 -26 39 -91 66
-143 154 -309 442 -556 771 -664 150 -49 231 -60 423 -60 171 0 187 2 310 33
322 82 592 265 778 526 56 79 148 260 174 341 9 30 20 54 23 54 14 0 139 -138
173 -190 41 -65 53 -76 88 -85 31 -8 75 26 84 65 12 53 -141 254 -263 345
l-39 29 1 168 c1 195 -15 183 141 106 185 -92 301 -171 434 -294 124 -115 214
-251 263 -399 19 -59 23 -90 23 -200 -1 -114 -4 -140 -28 -210 -79 -237 -325
-488 -647 -659 -348 -185 -854 -309 -1315 -322 -99 -3 -192 -10 -207 -16 -37
-14 -54 -59 -38 -98 20 -49 38 -53 204 -46 402 19 734 78 1066 191 160 54 419
179 545 262 618 408 756 987 354 1487 -162 201 -434 389 -759 525 l-75 31 -38
122 c-116 372 -372 865 -720 1388 -165 247 -346 487 -448 591 -41 43 -53 49
-88 49 -31 0 -44 -6 -60 -27z m243 -384 c319 -426 651 -986 821 -1384 149
-349 197 -599 161 -841 -49 -331 -236 -625 -514 -807 -227 -149 -434 -205
-711 -194 -225 9 -404 67 -593 193 -331 220 -521 571 -521 964 0 157 24 245
122 445 109 222 216 385 571 870 331 452 471 677 525 843 10 29 21 52 26 52 4
0 56 -63 113 -141z"></path><path d="M3255 2878 l-28 -25 13 -157 c48 -576 -132 -949 -510 -1062 -47 -14
-93 -28 -103 -30 -9 -3 -24 -19 -33 -36 -13 -25 -13 -35 -3 -59 24 -58 81 -64
206 -20 286 99 471 309 557 631 39 143 49 258 43 478 -7 252 -16 284 -84 298
-23 4 -36 0 -58 -18z"></path></g></svg>`;
});
const Header_svelte_svelte_type_style_lang = "";
const css = {
  code: ".brand.svelte-50wdej{padding:5px;display:flex;align-items:center;gap:5px}h1.svelte-50wdej{font-size:32px}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="header"><div class="brand svelte-50wdej"><div class="brand-top">${validate_component(WaterDrop, "WaterDrop").$$render($$result, { fill: "#222222" }, {}, {})}</div>
    <div class="brand-btm"><h1 class="svelte-50wdej">ColorDrop</h1>
      <p>Color Palettes Made Easy</p></div></div>
</header>`;
});
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
