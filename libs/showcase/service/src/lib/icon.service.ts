import { Injectable } from '@angular/core';
import { map, filter, scan } from 'rxjs/operators';


@Injectable()
export class IconService {

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

        this.p = [
            { name: "add" },
            { name: "alert" },
            { name: "align_center" },
            { name: "align_justify" },
            { name: "align_left" },
            { name: "align_right" },
            { name: "amp" },
            { name: "anchor" },
            { name: "arrow_bottom_left" },
            { name: "arrow_bottom_right" },
            { name: "arrow_circle_down" },
            { name: "arrow_circle_left" },
            { name: "arrow_circle_right" },
            { name: "arrow_circle_up" },
            { name: "arrow_corner" },
            { name: "arrow_down" },
            { name: "arrow_horizontal" },
            { name: "arrow_left" },
            { name: "arrow_left_right" },
            { name: "arrow_right" },
            { name: "arrow_shrink" },
            { name: "arrow_top_bottom" },
            { name: "arrow_top_left" },
            { name: "arrow_top_right" },
            { name: "arrow_up" },
            { name: "arrow_vertical" },
            { name: "asterisk" },
            { name: "at" },
            { name: "bar_chart" },
            { name: "basket" },
            { name: "bold" },
            { name: "calendar" },
            { name: "cancel" },
            { name: "chart" },
            { name: "chart_histo_down" },
            { name: "chart_histo_up" },
            { name: "check" },
            { name: "check_box" },
            { name: "chevron_down" },
            { name: "chevron_left" },
            { name: "chevron_left_right" },
            { name: "chevron_right" },
            { name: "chevron_up" },
            { name: "chevron_up_down" },
            { name: "clothing" },
            { name: "cloud" },
            { name: "cloud_down" },
            { name: "cloud_up" },
            { name: "code" },
            { name: "columns" },
            { name: "comment" },
            { name: "comment_alt" },
            { name: "comments" },
            { name: "contract" },
            { name: "contrast_1" },
            { name: "contrast_2" },
            { name: "contrast_3" },
            { name: "control_backward" },
            { name: "control_eject" },
            { name: "control_fast_backward" },
            { name: "control_fast_forward" },
            { name: "control_forward" },
            { name: "control_pause" },
            { name: "control_play" },
            { name: "control_record" },
            { name: "control_skip_backward" },
            { name: "control_skip_forward" },
            { name: "control_stop" },
            { name: "copy" },
            { name: "copyright" },
            { name: "credit_card" },
            { name: "cursor" },
            { name: "download" },
            { name: "drugstore" },
            { name: "edit" },
            { name: "ellipsize" },
            { name: "enter" },
            { name: "eraser" },
            { name: "exit" },
            { name: "expand" },
            { name: "eye" },
            { name: "eye_close" },
            { name: "face" },
            { name: "face_sad" },
            { name: "face_sceptical" },
            { name: "face_smile" },
            { name: "file" },
            { name: "file_add" },
            { name: "file_audio" },
            { name: "file_code" },
            { name: "file_corner" },
            { name: "file_delete" },
            { name: "file_delete_alt" },
            { name: "file_drugstore" },
            { name: "file_edit" },
            { name: "file_excel" },
            { name: "file_image" },
            { name: "file_pdf" },
            { name: "file_powerpoint" },
            { name: "file_word" },
            { name: "folder" },
            { name: "folder_drugstore" },
            { name: "food" },
            { name: "form" },
            { name: "fullscreen" },
            { name: "funnel" },
            { name: "furnishing" },
            { name: "gallery" },
            { name: "grid" },
            { name: "hamburger" },
            { name: "hammer" },
            { name: "heart" },
            { name: "heart_rate" },
            { name: "heart_rate_alt" },
            { name: "help" },
            { name: "home" },
            { name: "image" },
            { name: "indent" },
            { name: "infos" },
            { name: "italic" },
            { name: "keyboard" },
            { name: "label" },
            { name: "label_alt" },
            { name: "legal_notices" },
            { name: "link" },
            { name: "list_ol" },
            { name: "list_ul" },
            { name: "lock" },
            { name: "mail" },
            { name: "mail_open" },
            { name: "map" },
            { name: "map_marker" },
            { name: "move" },
            { name: "nine_points" },
            { name: "note" },
            { name: "note_drugstore" },
            { name: "note_heart_rate" },
            { name: "note_text" },
            { name: "outdent" },
            { name: "paint" },
            { name: "paperclip" },
            { name: "phone" },
            { name: "picture" },
            { name: "pill" },
            { name: "print" },
            { name: "rack" },
            { name: "reduce" },
            { name: "refresh" },
            { name: "remove" },
            { name: "restart" },
            { name: "rotate_left" },
            { name: "rotate_right" },
            { name: "safe" },
            { name: "sandglass" },
            { name: "save" },
            { name: "screen" },
            { name: "screen_search" },
            { name: "screen_statement" },
            { name: "search" },
            { name: "settings" },
            { name: "share" },
            { name: "shield" },
            { name: "shield_add" },
            { name: "shield_error" },
            { name: "shield_ok" },
            { name: "shield_remove" },
            { name: "shutdown" },
            { name: "slider_horizontal" },
            { name: "slider_vertical" },
            { name: "smartphone" },
            { name: "star" },
            { name: "star_half" },
            { name: "start" },
            { name: "stethoscope" },
            { name: "suitcase" },
            { name: "suitcase_drugstore" },
            { name: "table" },
            { name: "tablet" },
            { name: "target" },
            { name: "terminal" },
            { name: "test_tube" },
            { name: "time" },
            { name: "toggle_off" },
            { name: "toggle_on" },
            { name: "token" },
            { name: "transport_bike" },
            { name: "transport_bus" },
            { name: "transport_car" },
            { name: "transport_pedestrian" },
            { name: "transport_tractor" },
            { name: "trash" },
            { name: "unlink" },
            { name: "unlock" },
            { name: "upload" },
            { name: "user" },
            { name: "user_add" },
            { name: "user_delete" },
            { name: "users" },
            { name: "volume_1" },
            { name: "volume_2" },
            { name: "volume_3" },
            { name: "volume_off" },
            { name: "warning" },
            { name: "weather_cloud" },
            { name: "weather_lightning" },
            { name: "weather_rain" },
            { name: "weather_sunny" },
            { name: "wifi" },
            { name: "world" },
            { name: "zoom_down" },
            { name: "zoom_up" },
            { name: "zoom_x" }
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