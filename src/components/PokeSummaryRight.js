import React from 'react';
import { Box } from "@mui/system";
import { Typography } from '@mui/material';
import PokeStats from './PokeStats';
const PokeSummaryRight = ({pokemon}) => {
    let moves_levelup = [];
    let description = "";
    for (let flavor_text of pokemon.speciesinfo.flavor_text_entries) {
        if (flavor_text.language.name === "en") {
            description = flavor_text.flavor_text.replace("\f", " ");
            break;
        }
    }

    for(let move of pokemon.moves) {
        for (let details of move.version_group_details) {
            let formatted_name = move.move.name.replace("-", " ");
            let move_tmp = {name: formatted_name, url: move.move.url};
            if (details.move_learn_method.name === "level-up") 
            {
                move_tmp.level = details.level_learned_at;
                moves_levelup[move_tmp.level] = move_tmp;
            }
            break;
        }
    }

    return (
        <Box className="pokecard-outer" sx={{display: "flex", flexDirection: "column", padding: "25px", color: "#fff"}}>
            <Typography sx={{marginBottom: "15px", textAlign: "center"}} variant="h5">Description</Typography>
            <Typography sx={{marginBottom: "15px"}}>{description}</Typography>
            <PokeStats stats={pokemon.stats} />
            
            {moves_levelup.length > 0 ? (
                <>
                <Typography sx={{textAlign: "center"}} variant="h5">Moves</Typography>
                    <Typography variant="h5" >Level Up</Typography>
                    {moves_levelup.map(move => (
                        <Typography key={`move-${move.name}`}sx={{textTransform: "capitalize"}}>Lv. {move.level} - {move.name}</Typography>
                    ))}
                </>
            ) : (<></>)}
        </Box>
    );
}

export default PokeSummaryRight;
