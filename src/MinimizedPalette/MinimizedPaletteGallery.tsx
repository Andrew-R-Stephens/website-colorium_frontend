import {Fragment, useEffect, useRef, useState} from "react";
import "./MinimizedPaletteGallery.sass"
import MinimizedPaletteData from "./MinimizedPaletteData.tsx";
import MinimizedPalette from "./MinimizedPalette.tsx";
import allPalettes from "./minimizedPaletteSamples.json"
import {Simulate} from "react-dom/test-utils";
import load = Simulate.load;
import MinimizedPaletteBuffer from "./MinimizedPaletteBuffer.tsx";

function MinimizedPaletteGallery() {

    const previousPage = useRef<number>(0)
    const [currentPage, setCurrentPage] = useState<number>(0)
    const [palettes, setPalettes] = useState<MinimizedPaletteData[]>([])

    const handleCurrentPage = (pageIncrement:number) => {
        setCurrentPage((currentPage:number) => {
            previousPage.current = currentPage
            return (currentPage + pageIncrement)
        })
    };

    useEffect(() => {
        const palettesParent = document.getElementById('minimized-palette-gallery')
        const palettesWrapper = document.getElementById('minimized-palette-gallery-scroll-wrapper')

        palettesWrapper?.addEventListener('wheel', (event) => {
            if (event.deltaY < 0)
            {
                // DO NOTHING
            }
            else if (event.deltaY > 0)
            {
                if (Math.ceil((palettesParent?.scrollHeight ?? 0) - (palettesParent?.scrollTop ?? 0)) <= (palettesParent?.clientHeight ?? 0) * 1.5)
                {
                    handleCurrentPage(1)
                }

            }
        }, false)

        setCurrentPage(3)

    }, [])

    useEffect(() => {
        loadPalettes()
    }, [currentPage])

    function loadPalettes() {
        console.log("loading palettes")

        const localPalettes = allPalettes.palettes
        const tempData = async () => (allPalettes)

        tempData().then((data) => {

            const tempArray: MinimizedPaletteData[] = [...palettes];

            for(let i = currentPage-previousPage.current; i > 0; i--) {
                localPalettes?.map((palette:any) => {
                    tempArray.push(new MinimizedPaletteData(palette));
                })
            }

            setPalettes(tempArray)
        })
    }

    return (
        <Fragment>
            <div className={'minimized-palette-gallery'} id={'minimized-palette-gallery'}>
                <div className={'minimized-palette-gallery-scroll-wrapper'} id={'minimized-palette-gallery-scroll-wrapper'}>
                    <div className={'minimized-palette-gallery-scroll-inner'} id={'minimized-palette-gallery-scroll-inner'}>
                        {
                            palettes ? palettes.map((palette: MinimizedPaletteData) => {
                                return (
                                    <MinimizedPalette
                                        colors={palette?.colors}
                                        author= {palette?.author}
                                        date= {palette?.date}
                                    />
                                )
                            }) : <div>No palettes</div>
                        }
                    </div>
                </div>
            </div>
            <div className={'minimized-palette-gallery-overlay'}/>
        </Fragment>
    )

}

export default MinimizedPaletteGallery