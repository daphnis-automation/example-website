import { ComponentItem } from './component-item';
import { BodyType } from './body-type';

export class BodyComponent {
    seqNo: number;
    type: BodyType;
    alias: string;
    config: any;
    languageCode: string;
    componentItems: ComponentItem[];
    htmlValue: string;
    
    //Ui Props.
    get firstComponentItem(): ComponentItem {
        debugger;
        if (this.componentItems )
            return this.componentItems[0];
        return null;
    }
}