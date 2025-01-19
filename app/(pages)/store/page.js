'use client';
import React, { useState } from 'react';

import data from "../../data.json";
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';

export default function Store() {
    const [filters, setFilters] = useState({
        filterButtons: {
            vst: true,
            music: true,
            sfx: true
        },
        elements: [
            {
                "elem": <iframe frameborder="0" src="https://itch.io/embed/1071218?linkback=true&amp;border_width=0&amp;dark=true" width="550" height="165"><a href="https://firahfabe.itch.io/saranay-vst">Saranay VST by FirahFabe</a></iframe>,
                "category": "vst",
                "isActive": true
            },
            {
                "elem": <iframe frameborder="0" src="https://itch.io/embed/753770?linkback=true&amp;dark=true" width="552" height="167"><a 
                href="https://firahfabe.itch.io/chivalry-fantasy-rpgadventure">Chivalry (Fantasy RPG/Adventure) by FirahFabe</a></iframe>,
                "category": "music",
                "isActive": true
            },
            {
                "elem": <iframe frameborder="0" src="https://itch.io/embed/753764?linkback=true&amp;dark=true" width="552" height="167"><a href="https://firahfabe.itch.io/intense-situation">Intense Situation by FirahFabe</a></iframe>,
                "category": "music",
                "isActive": true
            },
        ]
    }); 

    const handleChange = (event) => {
        setFilters({
            ...filters,
            filterButtons:{
                ...filters.filterButtons,
                [event.target.name]: event.target.checked
            },
            elements: [...filters.elements.map((elem) => {
                if((elem.category === event.target.name) && (elem.isActive !== event.target.checked)){
                    return {
                        ...elem,
                        isActive: event.target.checked
                    }
                }
                return elem;
            })]
            
        })
    }

    const showItems = () => {
        const filteredItems = filters.elements.filter(element => {
            return element.isActive
        })
        return filteredItems.map((element, i) => <div id={i}>{element.elem}</div>);
    }

    return ( 
    <main>
        <h2>Store</h2>
        <h4>Filter</h4>
        <FormGroup>
            <FormControlLabel control={<Checkbox checked={filters.filterButtons.vst} onChange={handleChange} name="vst"/> } label="VST"/>
            <FormControlLabel control={<Checkbox checked={filters.filterButtons.music} onChange={handleChange} name="music"/>} label="Music"/>
            <FormControlLabel control={<Checkbox checked={filters.filterButtons.sfx} onChange={handleChange} name="sfx"/>} label="SFX"/>
        </FormGroup>

        <div id="store-container">
            {showItems()}
        </div>
    </main>
    )
}