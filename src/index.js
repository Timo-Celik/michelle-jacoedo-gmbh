import "normalize.css";
import { PageFlip } from "page-flip";
import "animate.css";
import "./style.sass";

const pageFlip = new PageFlip(document.querySelector("#booklet"), {
  size: "stretch",
  width: 600,
  height: 600,
  minWidth: 150,
  maxWidth: 600,
  minHeight: 150,
  maxHeight: 600,
  showCover: true,
  usePortrait: false,
});
pageFlip.loadFromHTML(document.querySelectorAll(".page"));
