export class Temperaturas {
    _id: string;
    fecha: string;
    hora: string;
    temperatura: number;
    temperaturamedia: number;
    temperaturalta: number;

    constructor(_id = '', fecha = '', hora= '', temperatura = 0, temperaturamedia = 0, temperaturalta = 0){
        this._id = _id;
        this.fecha = fecha;
        this.hora = hora;
        this.temperatura = temperatura;
        this.temperaturamedia = temperaturamedia;
        this.temperaturalta = temperaturalta;
    }
}
