'use client';
import { useMediaQuery } from "@mui/material";

export default function Works() {
    const mobileView = useMediaQuery('(max-width:800px)');

    return ( 
    <main>
        <h2>Works</h2>
        <h3>Game Music</h3>
        {
            mobileView ?
            <iframe style={{border: 0, width: "100%", height: "42px"}} src="https://bandcamp.com/EmbeddedPlayer/album=57617531/size=small/bgcol=333333/linkcol=e32c14/transparent=true/" seamless><a href="https://firahfabe.bandcamp.com/album/demons-of-the-venta-quemada-game-soundtrack">Demons of the Venta Quemada Game Soundtrack by FirahFabe</a></iframe>
            :
            <iframe style={{border: 0, width: "400px", height: "400px"}} src="https://bandcamp.com/EmbeddedPlayer/album=57617531/size=large/bgcol=333333/linkcol=e32c14/artwork=small/transparent=true/" seamless><a href="https://firahfabe.bandcamp.com/album/demons-of-the-venta-quemada-game-soundtrack">Demons of the Venta Quemada Game Soundtrack by FirahFabe</a></iframe>
        }

        {
            mobileView ?
            <iframe style={{border: 0, width: "100%", height: "42px"}} src="https://bandcamp.com/EmbeddedPlayer/album=1641999032/size=small/bgcol=333333/linkcol=9a64ff/transparent=true/" seamless><a href="https://firahfabe.bandcamp.com/album/the-mysterious-gate-game-soundtrack">The Mysterious Gate Game Soundtrack by FirahFabe</a></iframe>
            :
            <iframe style={{border: 0, width: "400px", height: "400px"}} src="https://bandcamp.com/EmbeddedPlayer/album=1641999032/size=large/bgcol=333333/linkcol=9a64ff/artwork=small/transparent=true/" seamless><a href="https://firahfabe.bandcamp.com/album/the-mysterious-gate-game-soundtrack">The Mysterious Gate Game Soundtrack by FirahFabe</a></iframe>
        }

        <h3>Original Works</h3>
        {
            mobileView ?
            <iframe style={{border: 0, width: "100%", height: "42px"}} src="https://bandcamp.com/EmbeddedPlayer/album=2207066508/size=small/bgcol=333333/linkcol=4ec5ec/transparent=true/" seamless><a href="https://firahfabe.bandcamp.com/album/chill-times">Chill Times by FirahFabe</a></iframe>
            :
            <iframe style={{border: 0, width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=2207066508/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://firahfabe.bandcamp.com/album/chill-times">Chill Times by FirahFabe</a></iframe>
        }
        
        <h3>Game Music Covers</h3>
        {
            mobileView ?
            <iframe width="100%" height="200" src="https://www.youtube.com/embed/33xvX9Pwy60?si=p9erkYiAzqS__wdE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            :
            <iframe width="560" height="315" src="https://www.youtube.com/embed/33xvX9Pwy60?si=p9erkYiAzqS__wdE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        }
    </main>
    )
}

