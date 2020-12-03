export default {
    name: "WorkPieces", //"miniCars",

    props: ["proy"],  //props means properties

    // data needs to be a function inside a component
    data: function() {
        return {
            name: this.proy.name,
            description: this.proy.description,
            Company: "Andres Gallo Design",
            pieze: "pieze",
            lis: "lis"

        }
    },

    template: 
    
    `<li @click="logClicked" v-bind:class="lis">
    <a href="#">
      <img v-bind:class="pieze" :src="'images/' + proy.image" :alt='proy.name + "image"'>
    </a>
  </li>`,

    created: function () {
        console.log(`created ${this.proy.name}'s piece`);
    }
    ,


    methods: {
        logClicked: function() {

            //debugger;

             console.log(`Great selection, the ${this.proy.name} is amazing!`);

             let lightbox = document.querySelector(".lightbox"),
             closeButton = lightbox.querySelector('span');

                console.log("clicked on a list item");
                

         closeButton.addEventListener("click", ()=> {lightbox.classList.remove('show-lightbox')});

         lightbox.classList.add('show-lightbox');
         // lightbox should open but nothing inside yet
         lightbox.querySelector('img').src = `images/${this.proy.image}`;
         lightbox.querySelector('h2').textContent = this.proy.name ;
         lightbox.querySelector('h3').textContent = this.proy.company ;
         lightbox.querySelector('p').textContent = this.proy.description;
                
            
        }
    }
}