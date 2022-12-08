export interface Feriado {
    nombre: string;
    comentario: string;
    fecha: string;
    irrenunciable: boolean;
    tipo: string;
    leyes: Leyes[];
}

export interface Leyes {
    nombre: string;
    url: string;
}
