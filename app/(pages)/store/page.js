'use client';
import React, { useState, useEffect } from 'react';
import data from "../../data.json";
import { FormGroup, FormControlLabel, Checkbox, useMediaQuery } from '@mui/material';
import styles from "../../(styles)/layout.module.css";

export default function Store() {
    const [filters, setFilters] = useState({
        filterButtons: {
            vst: true,
            music: true,
            sfx: true
        },
    }); 
    const [storeProducts, setStoreProducts] = useState([]);
    const { products } = data.store;

    useEffect(() => {
        if(window.innerWidth < 800){
            const allProducts = products.map((product, i) => {
                return {
                        "elem": <iframe frameBorder="0" src={product.embedSource} width="208" height="167"><a key={i} href={product.hrefLink}>{product.name}</a></iframe>,
                        "category": product.category,
                        "isActive": product.isActive
                    }
            })
            
            setStoreProducts([
                ...allProducts
            ])
        } else {
            const allProducts = products.map((product, i) => {
                return {
                        "elem": <iframe frameBorder="0" src={product.embedSource} width="510" height="150"><a key={i} href={product.hrefLink}>{product.name}</a></iframe>,
                        "category": product.category,
                        "isActive": product.isActive
                    }
            })
            
            setStoreProducts([
                ...allProducts
            ])
        }

    },[])

    const handleChange = (event) => {
        setFilters({
            ...filters,
            filterButtons:{
                ...filters.filterButtons,
                [event.target.name]: event.target.checked
            }
        })

        setStoreProducts([
            ...storeProducts.map((product) => {
                if((product.category === event.target.name && (product.isActive !== event.target.checked))){
                    return {
                        ...product,
                        isActive: event.target.checked
                    }
                }
                return product;
            })
        ])
    }

    const showItems = () => {
        const filteredItems = storeProducts.filter(element => {
            return element.isActive;
        })
        return filteredItems.map((element, i) => <div key={i} className={styles.itchproduct}>{element.elem}</div>);
    }

    return ( 
        <main className={styles.storeContainer}>
            <h2>Store</h2>
            
            <FormGroup row={true}>
            <h4>Filter:</h4>
                <FormControlLabel control={<Checkbox checked={filters.filterButtons.vst} onChange={handleChange} name="vst"/> } label="VST"/>
                <FormControlLabel control={<Checkbox checked={filters.filterButtons.music} onChange={handleChange} name="music"/>} label="Music"/>
                <FormControlLabel control={<Checkbox checked={filters.filterButtons.sfx} onChange={handleChange} name="sfx"/>} label="SFX"/>
            </FormGroup>

            <div className={styles.storeProductContainer} id="store-container">
                {showItems()}
            </div>
        </main>
    )
}