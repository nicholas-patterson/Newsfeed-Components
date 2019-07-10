const panelData = [
  {
    title: 'Lambda School Students: "Were the best!"',
    date: "Nov 5th, 2017",
    content:
      "Lucas ipsum dolor sit amet ben twilek padmé darth darth darth moff hutt organa twi lek. Ben amidala secura skywalker lando moff wicket tatooine luke. Solo wampa wampa calrissian yoda moff. Darth grievous Mon ewok sidious sidious lando kenobi grievous gamorrean solo. Yoda wedge utapau darth calamari. Hutt calamari darth jabba. Darth dooku amidala organa moff. Boba darth binks solo hutt skywalker dantooine skywalker. Qui-gonn jar twilek jinn leia jango skywalker mon."
  },
  {
    title: "Javascript and You, ES6",
    date: "Nov 7th, 2017",
    content:
      "Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost Hermione spellbezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-ticklehalf-moon-glasses, Knight-Bus. Padfoot snargaluff seeker: Hagridbroomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robesI must not tell lies. Mudbloods yew pumpkin juice phials Ravenclaw’ Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulu mimbletonia Pigwidgeon knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed. Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks."
  },
  {
    title: "React vs Angular vs Vue",
    date: "Nov 7th, 2017",
    content:
      "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit.Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit.Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit.Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit Charizard Lorem ipsum dolor sit amet, consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit Wartortle Lorem ipsum dolor sit amet, consectetur adipiscing elit Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    title: "Professional Software Development in 2018",
    date: "Nov 7th, 2017",
    content:
      "Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodorhodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor hodor.Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodorHODOR hodor, hodor hodor?! Hodor hodor, hodor. Hodor hodor hodor hodorhodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor?"
  }
];

{
  /* <h2>Lambda School Students: "We're the best!"</h2>
        <p class="date">Nov 5th, 2017</p>

        <p>
          Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff
          hutt organa twi'lek. Ben amidala secura skywalker lando moff wicket
          tatooine luke. Solo wampa wampa calrissian yoda moff. Darth grievous
          tatooine luke. Solo wampa wampa calrissian yoda moff. Darth grievous
          Mon ewok sidious sidious lando kenobi grievous gamorrean solo. Yoda
          wedge utapau darth calamari. Hutt calamari darth jabba. Darth dooku
          amidala organa moff. Boba darth binks solo hutt skywalker dantooine
          skywalker. Qui-gonn jar twi'lek jinn leia jango skywalker mon.
        </p>

        <p>
          Grievous fett calamari anakin skywalker hutt. Alderaan darth kenobi
          darth r2-d2 windu mothma. Sidious darth calamari moff. Wampa mothma
          sith wedge solo mara. Darth gonk maul sith moff chewbacca palpatine
          mace amidala. C-3po solo skywalker anakin yoda leia. Maul wampa bespin
          watto jade ewok darth jabba. Lando dantooine moff k-3po dantooine
          luke. Fisto mandalore darth wedge c-3p0 ahsoka. Secura moff palpatine
          fett. Anakin sith darth darth. Moff solo leia ben ponda jade. Binks
          jango aayla skywalker skywalker cade. Mustafar darth ventress anakin
          watto. Yavin jawa sebulba owen jinn tatooine sith organa.
        </p>

        <p>
          Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket
          hutt coruscant sidious naboo ackbar tatooine. Hutt lars padmé darth.
          Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba
          wicket han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala.
          Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia moff
          calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth
          palpatine obi-wan mon.
        </p>
        <button>Read</button>
        <span class="expandButton"></span> */
}

const articles = document.querySelector(".articles");

panelData.forEach(data => {
  articles.appendChild(createArticle(data.title, data.date, data.content));
});

function createArticle(title, date, content, expandButton) {
  //define new elements
  const article = document.createElement("div");
  const articleTitle = document.createElement("h2");
  const articleDate = document.createElement("p");
  const articleContent = document.createElement("p");
  const articleExpandButton = document.createElement("span");
  console.log(article);

  // set up structure of elements
  article.appendChild(articleTitle);
  article.appendChild(articleDate);
  article.appendChild(articleContent);
  article.appendChild(articleExpandButton);

  //set class names
  article.classList.add("article");
  articleDate.classList.add("date");
  articleExpandButton.classList.add("expandButton");

  // text content

  articleExpandButton.textContent = "Expand";
  articleContent.textContent = content;
  articleDate.textContent = date;
  articleTitle.textContent = title;

  //button events

  articleExpandButton.addEventListener("click", event => {
    console.log("button clicked", event.target);
    articleContent.classList.add("article-open");
  });

  return article;
}
