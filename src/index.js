import { PageFlip } from "page-flip";
import "animate.css";
import "./style.scss";

const pageFlip = new PageFlip(document.querySelector("#inlay"), { width: 600, height: 600, showCover: true});
pageFlip.loadFromHTML(document.querySelectorAll(".page"));
