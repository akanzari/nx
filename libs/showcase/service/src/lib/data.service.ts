import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

    persons: any;
    p: any;
    personsProgress: any;
    lazyPersons: any;
    navigateurs: any;
    navigateursEN: any;
    constructor() {
        this.navigateurs = [
            {
                Navigateur: "Chrome", Version: "	>61", Compatibilte: "100%"

            },
            {
                Navigateur: "Firefox", Version: "	>60", Compatibilte: "Non testé"

            },
            {
                Navigateur: "Internet Explorer", Version: "11", Compatibilte: "95%"

            },
            {
                Navigateur: "Internet Explorer mobile", Version: "11", Compatibilte: "Non testé"

            },
            {
                Navigateur: "IOS", Version: "", Compatibilte: "Non testé"

            },
            {
                Navigateur: "Safari", Version: "", Compatibilte: "Non testé"

            }

        ];

        this.navigateursEN = [
            {
                Navigateur: "Chrome", Version: "	>61", Compatibilte: "100%"

            },
            {
                Navigateur: "Firefox", Version: "	>60", Compatibilte: "Not tested"

            },
            {
                Navigateur: "Internet Explorer", Version: "11", Compatibilte: "95%"

            },
            {
                Navigateur: "Internet Explorer mobile", Version: "11", Compatibilte: "Not tested"

            },
            {
                Navigateur: "IOS", Version: "", Compatibilte: "Not tested"

            },
            {
                Navigateur: "Safari", Version: "", Compatibilte: "Not tested"

            }

        ];

        this.personsProgress = [
            {
                age: "18", nationality: [{ name: 'Tunisienne' }, { name: 'Algerienne' }], pays: "Tunisie", lien: "cliquez ici", photo: "assets/sof-images/user.jpg", name: "Jackson", firstName: "John", job: "teacher", language: [{ "value": "40", "color": "#ccb581" }, { "value": "20", "color": "#494c56" }, { "value": "40", "color": "#e9595b" }], birthDate: new Date("01/12/1974"), married: false, adresse: {
                    codePostale: '75001',
                    ville: 'Paris'
                }
            },
            {
                age: "20", nationality: [{ name: 'Tunisienne' }, { name: 'Algerienne' }], pays: "Tunisie", lien: "cliquez ici", photo: "assets/sof-images/user.jpg", name: "Jilber", firstName: "Sabrine", job: "touristic guide", language: [{ "value": "20", "color": "#ccb581" }, { "value": "20", "color": "#494c56" }, { "value": "40", "color": "#e9595b" }], birthDate: new Date("01/01/1988"), married: true, adresse: {
                    codePostale: '92270',
                    ville: 'Bois Colombes'
                }
            },
            {
                age: "33", nationality: [{ name: 'Tunisienne' }, { name: 'Algerienne' }], pays: "Marroc", lien: "cliquez ici", photo: "assets/sof-images/user.jpg", name: "Tahtawi", firstName: "Said", job: "engineer", language: [{ "value": "40", "color": "#ccb581" }, { "value": "100", "color": "#494c56" }, { "value": "40", "color": "#e9595b" }], birthDate: new Date("07/05/1992"), married: false, adresse: {
                    codePostale: '92320',
                    ville: 'Châtillon'
                }
            },
            {
                age: "22", nationality: [{ name: 'Tunisienne' }, { name: 'Algerienne' }], pays: "Tunisie", lien: "cliquez ici", photo: "assets/sof-images/user.jpg", name: "Yindan", firstName: "Jin", job: "singer", language: [{ "value": "100", "color": "#ccb581" }, { "value": "20", "color": "#494c56" }, { "value": "40", "color": "#e9595b" }], birthDate: new Date("12/21/1940"), married: true, adresse: {
                    codePostale: '22130',
                    ville: 'Bourseul'
                }
            },
            {
                age: "25", nationality: [{ name: 'Tunisienne' }, { name: 'Algerienne' }], pays: "Tunisie", lien: "cliquez ici", photo: "assets/sof-images/user.jpg", name: "Garsia", firstName: "Joulio", job: "singer", language: [{ "value": "40", "color": "#ccb581" }, { "value": "80", "color": "#494c56" }, { "value": "40", "color": "#e9595b" }], birthDate: new Date("09/02/1970"), married: true, adresse: {
                    codePostale: '22140',
                    ville: 'Saint-Laurent'
                }
            },
            {
                age: "44", nationality: [{ name: 'Tunisienne' }, { name: 'Algerienne' }], pays: "Algérie", lien: "cliquez ici", photo: "assets/sof-images/user.jpg", name: "Nicole", firstName: "Stéphane", job: "computer engineer", language: [{ "value": "40", "color": "#ccb581" }, { "value": "20", "color": "#494c56" }, { "value": "40", "color": "#e9595b" }], birthDate: new Date("05/01/1972"), married: true, adresse: {
                    codePostale: '86310.',
                    ville: 'Saint-Germain'
                }
            },
            {
                age: "18", nationality: [{ name: 'Tunisienne' }, { name: 'Algerienne' }], pays: "Tunisie", lien: "cliquez ici", photo: "assets/sof-images/user.jpg", name: "Marsaoui", firstName: "Mohamed", job: "architect", language: [{ "value": "40", "color": "#ccb581" }, { "value": "20", "color": "#494c56" }, { "value": "40", "color": "#e9595b" }], birthDate: new Date("08/02/1965"), married: true, adresse: {
                    codePostale: '69007',
                    ville: 'Lyon'
                }
            },
            {
                age: "21", nationality: [{ name: 'Tunisienne' }, { name: 'Algerienne' }], pays: "Tunisie", lien: "cliquez ici", photo: "assets/sof-images/user.jpg", name: "Lee", firstName: "Chin", job: "teacher", language: [{ "value": "40", "color": "#ccb581" }, { "value": "20", "color": "#494c56" }, { "value": "40", "color": "#e9595b" }], birthDate: new Date("09/27/1988"), married: true, adresse: {
                    codePostale: '35660',
                    ville: 'Langon'
                }
            }
        ];
        this.persons = [
            {
                photo: "assets/sof-images/user.jpg", name: "Jackson", tel: "70 000 000", firstName: "John", paysString: 'Tunisie', age: "thirty", radio: 'false', nationalityString: ['Tunisie', 'Algérienne'], nationality: [{ name: 'Francaise' }, { name: 'Tunisienne' }], job: "teacher", pays: { nameP: 'Tunisie' }, lien: "cliquez ici", language: "English", birthDate: new Date("01/12/1974"), married: false,
                adresse: {
                    codePostale: '75001',
                    ville: 'Paris'
                }
            },
            {
                photo: "assets/sof-images/user.jpg", name: "Jilber", tel: "60 000 000", firstName: "Sabrine", paysString: 'Tunisie', age: "35", radio: 'true', nationalityString: ['Tunisie', 'Algérienne'], nationality: [{ name: 'Tunisienne' }, { name: 'Algerienne' }], job: "touristic guide", pays: { nameP: "Algérie" }, lien: "cliquez ici", language: "Frensh", birthDate: new Date("01/01/1988"), married: true, adresse: {
                    codePostale: '92270',
                    ville: 'Bois Colombes'
                }, disabled: true
            },
            {
                photo: "assets/sof-images/user.jpg", name: "Tahtawi", tel: "50 000 000", firstName: "Said", paysString: 'Tunisie', age: "32", radio: 'false', nationalityString: ['Tunisie', 'Algérienne'], nationality: [{ name: 'Francaise' }, { name: 'Italienne' }], job: "engineer", pays: { nameP: "Marroc" }, lien: "cliquez ici", language: "Arabic", birthDate: new Date("07/05/1992"), married: false, adresse: {
                    codePostale: '92320',
                    ville: 'Châtillon'
                }
            },
            {
                photo: "assets/sof-images/user.jpg", name: "Yindan", tel: "40 000 000", firstName: "Jin", paysString: 'Tunisie', age: "29", radio: 'false', nationalityString: ['Tunisie', 'Algérienne'], nationality: [{ name: 'Francaise' }, { name: 'Algerienne' }], job: "singer", pays: { nameP: "Marroc" }, lien: "cliquez ici", language: "Japanese", birthDate: new Date("12/21/1940"), married: true, adresse: {
                    codePostale: '22130',
                    ville: 'Bourseul'
                }

            },
            {
                photo: "assets/sof-images/user.jpg", name: "Garsia", tel: "30 000 000", firstName: "Joulio", paysString: 'Tunisie', age: "30", radio: 'true', nationalityString: ['Tunisie', 'Algérienne'], nationality: [{ name: 'Francaise' }, { name: 'Italienne' }, { name: 'Tunisienne' }, { name: 'Algerienne' }], job: "singer", pays: { nameP: "Marroc" }, lien: "cliquez ici", language: "Spanish", birthDate: new Date("09/02/1970"), married: true, adresse: {
                    codePostale: '22140',
                    ville: 'Saint-Laurent'
                }
            },
            {
                photo: "assets/sof-images/user.jpg", name: "Nicole", tel: "20 000 000", firstName: "Stéphane", paysString: 'Tunisie', age: "54", radio: 'true', nationalityString: ['Tunisie', 'Algérienne'], nationality: [{ name: 'Tunisienne' }, { name: 'Algerienne' }], job: "computer engineer", pays: { nameP: "Tunisie" }, lien: "cliquez ici", language: "Frensh", birthDate: new Date("05/01/1972"), married: true, adresse: {
                    codePostale: '86310.',
                    ville: 'Saint-Germain'
                }
            },
            {
                photo: "assets/sof-images/user.jpg", name: "Marsaoui", tel: "10 000 000", firstName: "Mohamed", paysString: 'Tunisie', age: "30", radio: 'true', nationalityString: ['Tunisie', 'Algérienne'], nationality: [{ name: 'Francaise' }, { name: 'Tunisienne' }], job: "architect", pays: { nameP: "Tunisie" }, lien: "cliquez ici", language: "Arabic", birthDate: new Date("08/02/1965"), married: true, adresse: {
                    codePostale: '69007',
                    ville: 'Lyon'
                }
            },
            {
                photo: "assets/sof-images/user.jpg", name: "Lee", tel: "00 000 000", firstName: "Chin", paysString: 'Tunisie', age: "18", radio: ' ', nationalityString: ['Tunisie', 'Algérienne'], nationality: [{ name: 'Francaise' }, { name: 'Italienne' }], job: "teacher", pays: { nameP: "Algérie" }, lien: "cliquez ici", language: "chinese", birthDate: new Date("09/27/1988"), married: true, adresse: {
                    codePostale: '35660',
                    ville: 'Langon'
                }
            }
        ];

        this.lazyPersons = [
            {
                name: "じゃあまた", firstName: "おはよう", job: "teacher", language: "Japonese", birthDate: new Date("01/12/1974"), married: false, adresse: {
                    codePostale: '75001',
                    ville: 'Paris'
                }
            },
            {
                name: "すきです", firstName: "好きです", job: "touristic guide", language: "Frensh", birthDate: new Date("01/01/1988"), married: true, adresse: {
                    codePostale: '92270',
                    ville: 'Bois Colombes'
                }
            },
            {
                name: "どうぞ", firstName: "名前は何", job: "engineer", language: "Arabic", birthDate: new Date("07/05/1992"), married: false, adresse: {
                    codePostale: '92320',
                    ville: 'Châtillon'
                }
            },
            {
                name: "は何です", firstName: "うござい", job: "singer", language: "Japanese", birthDate: new Date("12/21/1940"), married: true, adresse: {
                    codePostale: '22130',
                    ville: 'Bourseul'
                }
            },
            {
                name: "うございます", firstName: "ください", job: "singer", language: "Spanish", birthDate: new Date("09/02/1970"), married: true, adresse: {
                    codePostale: '22140',
                    ville: 'Saint-Laurent'
                }
            },
            {
                name: "あまた", firstName: "じゃあま", job: "computer engineer", language: "Frensh", birthDate: new Date("05/01/1972"), married: true, adresse: {
                    codePostale: '86310.',
                    ville: 'Saint-Germain'
                }
            },
            {
                name: "います", firstName: "はようござ", job: "architect", language: "Arabic", birthDate: new Date("08/02/1965"), married: true, adresse: {
                    codePostale: '69007',
                    ville: 'Lyon'
                }
            },
            {
                name: "ざいます", firstName: "おはようござい", job: "teacher", language: "chinese", birthDate: new Date("09/27/1988"), married: true, adresse: {
                    codePostale: '35660',
                    ville: 'Langon'
                }
            }
        ];
        this.p = [
            { name: 'Eric', age: '25' },
            { name: 'Alex', age: '30' },
            { name: 'Khaled', age: '30' },
            { name: 'Amal', age: '30' },
            { name: 'Alonso', age: '30' },
            { name: 'Eric Alonso', age: '25' },
            { name: 'Celine Fratelli', age: '25' },
            { name: 'Xavi', age: '25' },
            { name: ' Thomas', age: '25' },
            { name: ' Martin', age: '25' },
            { name: ' Dubois', age: '25' },
            { name: ' Alex Thomas', age: '25' },
            { name: ' Frederic Thomas', age: '25' },
            { name: ' Thomas Alex', age: '25' },
            { name: 'Enzo', age: '30' },
            { name: 'Adrien', age: '30' },
            { name: 'Antoine', age: '30' },
            { name: 'Gabriel', age: '30' },
            { name: 'Valentin', age: '30' },
            { name: 'Alex Louis', age: '30' },
            { name: 'Alex Enzo', age: '30' },
            { name: 'Louis', age: '30' },
            { name: 'Alex Tom', age: '30' },
            { name: 'Julien', age: '30' },
            { name: 'Maxime', age: '30' },
            { name: 'Tom', age: '30' },
            { name: ' Pierre', age: '30' },
            { name: 'Frederic', age: '30' },
            { name: 'Celine', age: '30' },
            { name: 'Alex Pierre', age: '30' },
            { name: 'AMINE', age: '30' },
            { name: 'AMENI', age: '30' },
            { name: 'Alex Aaron', age: '30' },
            { name: 'Alex Celine', age: '30' },
            { name: 'Alex Valentin', age: '30' }



        ];
    }



    getNavigateurs() {
        return this.navigateurs;
    }

    getNavigateursEN() {
        return this.navigateursEN;
    }

    getAllDtata() {

        return this.persons;
    }
    getAllDtataProgress() {

        return this.personsProgress;
    }
    gettotalelement() {
        return this.persons.length;
    }

    getPageData(page: number, raws: number) {

        const data = [];
        for (let i: number = page * raws; (i < page * raws + raws && i < this.gettotalelement()); i++) {
            data.push(this.lazyPersons[i]);
        }
        return data;
    }

    getlazypersons() {
        return this.lazyPersons;
    }
    getAllP() {
        return this.p.length;
    }
    getTotal() {
        return this.p;
    }
    getDataPerpage(page: number, pagesize: number, critere, valeur: string) {

        const datax = [];
        const datas = [];
        if (critere == null && valeur == null) {

            return this.p.slice((page - 1) * pagesize, page * pagesize);


        } else {
            for (let i: number = 0; (i < this.p.length); i++) {
                if (this.p[i][critere].includes(valeur))
                    datax.push(this.p[i]);
            }

            return datax.slice((page - 1) * pagesize, page * pagesize);



        }




    }
}