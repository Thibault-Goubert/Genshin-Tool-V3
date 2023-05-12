export class OpenLinkRequest{
    link!: string;
    browser!: string;

    constructor(link: string, browser: string) {
        this.link = link ?? "";
        this.browser = browser ?? "";        
    }
}