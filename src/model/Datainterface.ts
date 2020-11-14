export default interface WeatherData {
    cod: string,
    message: number,
    cnt: number,
    list: [{
        dt: number,
        dt_txt: string,
        main: {}
    }],
    city: {}

}