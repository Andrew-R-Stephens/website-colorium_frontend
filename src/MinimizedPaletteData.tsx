class MinimizedPaletteData {

    author: string = "Guest"
    date: string = "1 Jan 2023"
    colors: string[] = []

    constructor(paletteData:any) {
        ({author: this.author, date: this.date, colors: this.colors} = paletteData)
    }

}

export default MinimizedPaletteData;