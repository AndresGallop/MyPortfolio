import { SendMail } from "./mailer.js";

export default {
    name: "formComponent",

    template: `
    <form action="./includes/mail/send.php" method="POST" id="mail-form">
    <!-- <label for="firstname">First Name</label> -->
    <input type="text" id="firstname" name="firstname" placeholder="First name" required>
    <!-- <span class="error">* <? php echo $error;?></span> -->

    <!-- <label for="lastname">Last Name</label> -->
    <input type="text" id="lastname" name="lastname" placeholder="Last name" required>

    <!-- <label for="email">Email</label> -->
    <input type="email" id="email" name="email" placeholder="Email" required>

    <!-- <label for="message">Your Message</label> -->
    <textarea name="message" placeholder="Message" id="message" cols="30" rows="6"></textarea>

    <!-- <label for="Topic" id="topic">Topic</label> --> 
    <select name="Topics" id="drop">
        <option value="">--Select Topic--</option>
        <option value="Freelance">Freelance Project</option>
        <option value="Company">Company Contract</option>
    </select>

    <!-- <div class="g-recaptcha" data-sitekey="6LdV5fIZAAAAAHZt6MZouLtumrqx4E7qlt438-Ig"></div> -->

    <div  @click="processMail()" class="submit-wrapper">
        <span class="submit">Submit</span>
        <i class="fas fa-paper-plane"></i>
    </div>
</form>
    `,

    methods: {
        // loadMediaComponent(event){
        //     //debugger;
        //     this.$emit("setmeditype", event.target.dataset.mediatype);
        // },

         processMailFailure(result) {
            // show a failure message in the UI
            console.table(result); // table shows us an object in table form
            alert(result.message);
    
            // show some UI here to let the user know the mail attempt was successful
        },
    
        // function hamburgerMenu() {
        // 	burgerCon.classList.toggle("slideToggle");
        // 	button.classList.toggle("expanded");
        // }
    
         processMailSuccess(result) {
            // show a success message in the UI
            console.table(result); // table shows us an object in table form
            alert(result.message);
    
            // show some UI here to let the user know the mail attempt was successful
        },
    
         processMail(event) {
            // block the default submit behaviour
            event.preventDefault();
    
            // use the SendMail component to try to process mail
            SendMail(this.parentNode)
                .then(data => processMailSuccess(data))
                .catch(err => processMailFailure(err));
    
                // the error handler in the catch block could actually be a generic catch-and-display function that handles EVERY error you might encounter during runtime. Might be a better strategy to pass in a flag or just a message and have the function display it in the UI
        }


    }
}