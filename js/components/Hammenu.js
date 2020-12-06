export default {
    name: "ButtonComponent",

    template: `
       <div class="button-wrapper">
            <button @click="hamburgerMenu" id="hamenu"></button> 
       </div>
    `,

    methods: {
        // loadMediaComponent(event){
        //     //debugger;
        //     this.$emit("setmeditype", event.target.dataset.mediatype);
        // },

        hamburgerMenu() {
            burgerCon.classList.toggle("slideToggle");
            button.classList.toggle("expanded");
        }


    }
}