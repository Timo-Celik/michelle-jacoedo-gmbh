import { PageFlip } from "page-flip";
import "normalize.css";
import "animate.css";
import "./style.sass";

const pageFlip = new PageFlip(document.querySelector("#booklet"), {
  width: 600,
  height: 600,
  showCover: true,
});
pageFlip.loadFromHTML(document.querySelectorAll(".page"));
