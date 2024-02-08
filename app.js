let character = {
  data: [
    {

      name: 'Luke Skywalker',
      pic: 'https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg',
      homeworld: 'tatooine'
    },
    {
  
      name: "C-3PO",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
      homeworld: "tatooine"
    },
    {
  
      name: "R2-D2",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
      homeworld: "naboo"
    },
    {
  
      name: "Darth Vader",
      pic: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
      homeworld: "tatooine"
    },
    {
  
      name: "Leia Organa",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
      homeworld: "alderaan"
    },
    {
  
      name: "Owen Lars",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
      homeworld: "tatooine"
    },
    {
  
      name: "Beru Whitesun lars",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
      homeworld: "tatooine"
    },
    {
  
      name: "R5-D4",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
      homeworld: "tatooine"
    },
    {
  
      name: "Biggs Darklighter",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
      homeworld: "tatooine"
    },
    {
  
      name: "Obi-Wan Kenobi",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
      homeworld: "stewjon"
    },
    {
  
      name: "Anakin Skywalker",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
      homeworld: "tatooine"
    },
    {
  
      name: "Wilhuff Tarkin",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
      homeworld: "eriadu"
    },
    {
  
      name: "Chewbacca",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
      homeworld: "kashyyyk"
    },
    {
  
      name: "Han Solo",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
      homeworld: "corellia"
    },
    {
  
      name: "Greedo",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
      homeworld: "Rodia"
    },
    {
      "id": 16,
      name: "Jabba Desilijic Tiure",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
      homeworld: "tatooine"
    },
  
    {
  
      name: "Jek Tono Porkins",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
      homeworld: "bestine"
    },
    {
  
      name: "Yoda",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png"
  
    },
    { 
  
      name: "Palpatine",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
      homeworld: "naboo"
    }
     
  ]
}

for (let i of character.data) {
  let card = document.createElement("div");
  card.classList.add("card", i.homeworld, "hide");

  let dropdown = document.createElement('button')
  dropdown.classList.add('dropdown')
  dropdown.innerText = "Karekterleri gizle"
  card.appendChild(dropdown);



  let name = document.createElement("h5");
  name.classList.add("name");
  name.innerText = i.homeworld;
 
 
  //image
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");


  let price = document.createElement("h6");
  price.innerText =  i.name;
  imgContainer.appendChild(name);

  
  let image = document.createElement("img");
  image.setAttribute("src", i.pic);
  imgContainer.appendChild(image);


  let homeWord = document.createElement('h5')
  homeWord.innerText= i.name
  imgContainer.appendChild(homeWord);

  card.appendChild(imgContainer);
  document.getElementById("card-container").appendChild(card);
}




function filterProduct(value){
  let buttons = document.querySelectorAll('.button-value')

  buttons.forEach((button)=>{
    if(value.toUpperCase() == button.innerText.toUpperCase()){
      button.classList.add('active')
    }else{
      button.classList.remove('active')
    }
  })

  let elements = document.querySelectorAll(".card");

  elements.forEach((element) => {
    if (value == "all") {

      element.classList.remove("hide");
    } else {
      if (element.classList.contains(value)) {

        element.classList.remove("hide");

      } else {
        element.classList.add("hide");

      }
    }
  });
}

const buttons = document.querySelectorAll('.dropdown');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const next = button.parentElement;
    next.classList.toggle('show')
    button.classList.toggle('color')

    switch (button.innerHTML) {
      case button.innerHTML = 'Karekterleri Gizle':
        button.innerHTML = 'Karekterleri Göster';
        break;
      case button.innerHTML = 'Karekterleri Göster':
        button.innerHTML = 'Karekterleri Gizle';
        break;
    }
  })
})


document.getElementById("search").addEventListener("click", () => {

  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".name");
  let cards = document.querySelectorAll(".card");
  elements.forEach((element, index) => {
      
      if (element.innerText.includes(searchInput)) { 
          cards[index].classList.remove("hide");
    } else {
      cards[index].classList.add("hide");

    }
  });
});

window.onload = () => {
  filterProduct("all");
};