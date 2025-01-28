import { onLoading } from "./_modules/website";
import { loadPage } from "./_modules/home";
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../scss/application.scss';


document.addEventListener("DOMContentLoaded", () => {
  onLoading();
  loadPage();
});