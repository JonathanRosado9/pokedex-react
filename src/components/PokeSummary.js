import React, {useEffect} from 'react';
import { Box } from "@mui/system";
import { Grid, Typography } from '@mui/material';
import PokeType from "./PokeType";
import PokeEvolution from './PokeEvolution';

const PokeSummary = ({pokemon}) => {
    useEffect(() => {
        window.scrollTo(0, 0)

    }, []);
    let paddedId = pokemon.id;

    if (paddedId < 10) {
        paddedId = "00" + paddedId;
    } else if (paddedId < 100) {
        paddedId = "0" + paddedId;
    }
    return (
        <Box className="pokecard-outer" sx={{display: "flex", flexDirection: "column", padding: "25px", color: "#fff"}}>
            <Grid container sx={{marginTop: "7px"}}>
                <Grid item xs={6}><Typography variant="h4" sx={{color: "#fff", textTransform: "capitalize"}}>{pokemon.name}</Typography></Grid>
                <Grid item xs={6}><Typography variant="h5" sx={{textAlign: "right", color: "#fff", textTransform: "capitalize"}}>#{paddedId}</Typography></Grid>
                <Grid item xs={6}><Typography variant="subtitle1" sx={{ color: "#fff", textTransform: "capitalize", fontStyle: "italic"}}>{pokemon.speciesinfo.genera[7].genus}</Typography></Grid>
            </Grid>
            <img alt={`${pokemon.name} Official Artwork`} src={pokemon.sprites.other["official-artwork"].front_default} style={{maxHeight: "400px", objectFit: "contain"}}></img>
            <Box>
                <Typography variant="h6" sx={{color: "#fff", textAlign: "center"}}>Types</Typography>
                <hr />
            </Box>
            <Box sx={{display: "flex", justifyContent: "center", marginY: "15px"}}>
                <PokeType type={pokemon.types[0].type.name} />
                {pokemon.types[1] ? <PokeType type={pokemon.types[1].type.name} /> : ""}
            </Box>

            <Box>
                <Typography variant="h6" sx={{color: "#fff", textAlign: "center"}}>Abilities</Typography>
                <hr />
            </Box>

            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginY: "15px"}}>
                {pokemon.abilities.map((ability => (
                    <Typography key={ability.ability.name} sx={{textTransform: "capitalize"}}>{ability.ability.name}</Typography>
                )))}
            </Box>

            <Box>
                <Typography variant="h6" sx={{color: "#fff", textAlign: "center"}}>Evolution Chain</Typography>
                <hr />
            </Box>

            <PokeEvolution evolutionChain={pokemon.speciesinfo.evolution_chain} />
        </Box>
    );
}

export default PokeSummary;
