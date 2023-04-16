export interface Definition {
    cols: Col[];
}

export interface RessourceDomainDefinition {
    blocks: Block[];
}

export interface Block {
    class: string;
    title: Title;
    frame: Frame;
    cols:  Col[];
}

export interface Col {
    class: string;
    rows:  Row[];
}

export interface Row {
    ressources: Ressource[];
}

export interface Ressource {
    name:     string;
    rarities: string[];
}

export interface Frame {
    class: string;
    id:    string;
}

export interface Title {
    class: string;
    id:    string;
    text:  string;
}
