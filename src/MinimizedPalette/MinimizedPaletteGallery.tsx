import {Fragment, useEffect, useState} from "react";
import MinimizedPaletteData from "./MinimizedPaletteData.tsx";
import MinimizedPalette from "./MinimizedPalette.tsx";

function MinimizedPaletteGallery() {

    const [palettes, setPalettes] = useState<MinimizedPaletteData[]>()

    const handleAddPalette = (newPalettes:MinimizedPaletteData[]) => {
        setPalettes(() => {
            const combined = palettes??[];
            console.log("old", palettes, "combied", combined)
            newPalettes?.map((palette:MinimizedPaletteData)=>{
                combined?.push(palette)
            })

            return combined;
        });
    };

    useEffect(() => {
        const tempData = async () => ({
            palettes: [
                {
                    colors:['#FF0000FF', '#00FF00FF', '#0000FFFF', '#FF00FFFF', '#FFFFFFFF', '#00FFFFFF'],
                    author:"Jim Jimmies",
                    date: "1 Jan 2023"
                },
                {
                    colors:['#FAAA00FF', '#002300FF', '#FF0FFFFF', '#FFF5DFFF', '#012345FF'],
                    author:"Billy TheKid",
                    date: "5 Sept 2024"
                },
                {
                    colors:['#FF0054FF', '#00FFcdFF', '#0010FFFF', '#FA00F85F', '#F65433FF', '#0010FFFF', '#FA00F85F', '#098FF2FF'],
                    author:"Andrew NotStevens",
                    date: "21 Oct 2025"
                },
                {
                    colors:['#FF00004F'],
                    author:"Jim Jimmies",
                    date: "1 Jan 2023"
                },
                {
                    colors:['#F22A00FF', '#002300FF', '#FF055FFF', '#FFF5DFFF', '#01CC45FF'],
                    author:"Billy TheKid",
                    date: "5 Sept 2024"
                },
                {
                    colors:['#FF0054FF', '#00FFcdFF', '#0010FDFF', '#FA00F85F', '#F65433FF', '#0010FFFF', '#FA00F85F', '#098FF2FF'],
                    author:"Andrew NotStevens",
                    date: "21 Oct 2025"
                },
                {
                    colors:['#FF0000FF', '#00FF00FF', '#0000FFFF', '#FF00FFFF', '#FFFFFFFF', '#00FFFFFF'],
                    author:"Jim Jimmies",
                    date: "1 Jan 2023"
                },
                {
                    colors:['#FAAA00FF', '#002300FF', '#FF0FFFFF', '#FFF5DFFF', '#012345FF'],
                    author:"Billy TheKid",
                    date: "5 Sept 2024"
                },
                {
                    colors:['#FF0054FF', '#00FFcdFF', '#0010FFFF', '#FA00F85F', '#F65433FF', '#0010FFFF', '#FA00F85F', '#098FF2FF'],
                    author:"Andrew NotStevens",
                    date: "21 Oct 2025"
                },
                {
                    colors:['#FF0000FF', '#00FF00FF', '#0000FFFF', '#FF00FFFF', '#FFFFFFFF', '#00FFFFFF'],
                    author:"Jim Jimmies",
                    date: "1 Jan 2023"
                },
                {
                    colors:['#FAAA00FF', '#002300FF', '#FF0FFFFF', '#FFF5DFFF', '#012345FF'],
                    author:"Billy TheKid",
                    date: "5 Sept 2024"
                },
                {
                    colors:['#FF0054FF', '#00FFcdFF', '#0010FFFF', '#FA00F85F', '#F65433FF', '#0010FFFF', '#FA00F85F', '#098FF2FF'],
                    author:"Andrew NotStevens",
                    date: "21 Oct 2025"
                },
            ]
        })

        tempData().then((data) => {
            console.log(data)

            const tempArray: MinimizedPaletteData[] = [];
            data.palettes?.map((palette:any) => {
                tempArray.push(new MinimizedPaletteData(palette));
            })

            handleAddPalette(tempArray);
        })
    }, [])

    return (
        <Fragment>
            <div style={{
                display: "inline-flex",
                width: "100%",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-evenly"
            }}>
                {
                    palettes ? palettes.map((palette: MinimizedPaletteData) => {
                        return (
                            <MinimizedPalette props={{
                                data: {
                                    colors: palette?.colors,
                                    author: palette?.author,
                                    date: palette?.date
                                }
                            }}/>
                        )
                    }) : <div>No palettes</div>
                }
            </div>
        </Fragment>
    )

}

export default MinimizedPaletteGallery