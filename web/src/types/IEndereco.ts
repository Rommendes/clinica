export default interface IEndereco {
    cep: string,
    rua: string,
    numero: string | number,
    complemento?: string,
    estado: string
}