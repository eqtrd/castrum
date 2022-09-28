__webpack_public_path__ = "http://dev.local:8080/assets/";

import "../scss/application.scss";
import { onLoading } from "./_modules/website";
import { loadPage } from "./_modules/home";
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';





document.addEventListener("DOMContentLoaded", () => {
  onLoading();
  loadPage();
});