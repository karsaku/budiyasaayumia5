import { data } from "../assets/data/data.js";
import { renderElement } from "../utils/helper.js";

export const bride = () => {
    const brideCouple = document.querySelector(".bride_couple ul");
    const brideListItem = data =>
        `<li data-aos="zoom-in" data-aos-duration="1000">
              <figure>
                   <img src=${data.image} alt="${data.name} animation">
                   <figcaption>${data.name}</figcaption>
              </figure>
              <p><span>${data.child} dari Pasangan</span> <br> Bapak ${
                  data.father
              } <br> & <br> Ibu ${data.mother}</p>
              <b style="display: ${data.id === 2 ? "none" : "block"}">&</b>
        </li>`;

    const brideData = [data.bride.L, data.bride.P];

    renderElement(brideData, brideCouple, brideListItem);
};
