import MinimizedPaletteData from "./MinimizedPaletteData.tsx";

class MinimizedPaletteBuffer {

    palettes: MinimizedPaletteData[] = []

    addPalettes(tempPalettes: MinimizedPaletteData[]) {
        this.palettes.concat(tempPalettes)
        console.log(this.palettes)
    }

}

export default MinimizedPaletteBuffer;