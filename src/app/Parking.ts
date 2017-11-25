import { Time } from "@angular/common/src/i18n/locale_data_api";

export class Parking{
    provider: string;
    date:Date;
    time:string;
    park: number;
    carlicense: string;
    drivername: string;
    phone: string;

    
};

export const MyPark: Parking = new Parking();