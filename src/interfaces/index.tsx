export interface LabelProps {
    id: string,
    title: string, 
    placeholder: string,
}

export interface Anchor {
    anchorHref: string,
    anchorName: string,
    picSrc: string,
    picAlt: string
}

export interface Livro {
    readonly id: number,
    readonly titulo: string,
    readonly autor: string,
    readonly genero: string,
    readonly preco: number
    readonly sinopse: string,
    readonly capa: string,
}