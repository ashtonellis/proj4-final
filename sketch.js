

function setup() {
  createCanvas(800,600);
  mgr = new SceneManager();
  mgr.wire();
  mgr.showScene(trees);
}

function draw() {
  mgr.draw();
}










// https://tree-nation.com/projects/inside-tree-nation/article/9739-how-many-trees-are-lost-to-deforestation-every-year
// https://www.condorferries.co.uk/marine-ocean-pollution-statistics-facts#:~:text=An%20estimated%208%20Million%20tons,15%25%20lands%20on%20our%20beaches.
// https://www.smithsonianmag.com/smart-news/the-us-recycled-just-5-percent-of-its-plastic-in-2021-180980052/