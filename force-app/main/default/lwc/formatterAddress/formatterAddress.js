import { LightningElement } from 'lwc';

export default class DemoAccordion extends LightningElement {
    multiple = true;
    title = 'Accordation';

    handleSectionToggle(event){
        const myOpenSections = event.detail.openSections;
    }
}