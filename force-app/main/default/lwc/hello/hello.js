import { LightningElement } from 'lwc';

export default class Hello extends LightningElement {
    ciao = 'Finalmente';
    greeting = 'World la mia prima modifica a un LWC';

    // funzione richiamata da html
    handleBtnClick() {
        window.open('https://www.picchiri.com','_blank');
    }
}
