import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class FullscreenService {

    private doc = <FullScreenDocument>document;

    enter() {
        const el = this.doc.documentElement;
        if (el.requestFullscreen) el.requestFullscreen();
        else if (el.msRequestFullscreen) el.msRequestFullscreen();
        else if (el.mozRequestFullScreen) el.mozRequestFullScreen();
        else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
    }

    leave() {
        if (this.doc.exitFullscreen) this.doc.exitFullscreen();
        else if (this.doc.msExitFullscreen) this.doc.msExitFullscreen();
        else if (this.doc.mozCancelFullScreen) this.doc.mozCancelFullScreen();
        else if (this.doc.webkitExitFullscreen) this.doc.webkitExitFullscreen();
    }

    toggle(): Boolean {
        if (this.enabled) { this.leave(); return true; }
        else { this.enter(); return false; }
    }

    get enabled() {
        return !!(
            this.doc.fullscreenElement ||
            this.doc.mozFullScreenElement ||
            this.doc.webkitFullscreenElement ||
            this.doc.msFullscreenElement
        );
    }
}

interface FullScreenDocument extends HTMLDocument {
    documentElement: FullScreenDocumentElement;
    mozFullScreenElement?: Element;
    msFullscreenElement?: Element;
    webkitFullscreenElement?: Element;
    msExitFullscreen?: () => void;
    mozCancelFullScreen?: () => void;
    webkitExitFullscreen?: () => void;
}

interface FullScreenDocumentElement extends HTMLElement {
    msRequestFullscreen?: () => void;
    mozRequestFullScreen?: () => void;
    webkitRequestFullscreen?: () => void;
}