import { LightningElement, track } from 'lwc';

export default class HelloBinding extends LightningElement {
    @track greeting = '349';

    handleChange(event) {
        if(!isNaN(event.target.value)){
            this.greeting = event.target.value;           
        }else{
            this.greeting = 'Si è verificato un errore'; 
        }       
    }
}
