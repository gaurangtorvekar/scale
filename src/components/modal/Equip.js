import React, { useState, useEffect } from "react";
import { Button } from '@mui/material';
import preview from '../../images/nft-preview.gif'


const Equip = (props) => {

    const [isEquiped, setisEquiped] = useState(false);
    const [swords, setSwords] = useState([]);
    const [playerData, setPlayerData] = useState({
        id: '...',
        attack: '...',
        hp: '...',
        status: 'NA',
        image: preview
    })

    const getPlayerData = async() => {

        let hasSword = await props.contract.players(props.currentPlayer).item;
        if (hasSword) {
            setisEquiped(true);
        } else {
            let hold = [];
            const array = await props.contract.addressToSwords();
            for (let i = 0; i < array.length; i++) {
                let tmp = await props.contract.swords(i);
                
            }

        }



    }

    const equipSword = async() => {
        await props.contract.enterArena(props.currentPlayer)
    };

    useEffect(() => {
        getPlayerData();

    },[props.contract]);

    return (
        <div>
            <Button variant="contained" color="success"  sx={{ m: "0.5rem" }}>Equip Sword</Button>
            <Button variant="contained" color="error" disabled={true}>Unequip Sword</Button>
        </div>
    )

};

export default Equip;