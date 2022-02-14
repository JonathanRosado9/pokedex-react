import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { Box } from "@mui/system";
import PokeSummary from './PokeSummary';
import PokeSummaryRight from './PokeSummaryRight';
import PokeDetailHeader from './PokeDetailHeader';
const PokemonDetail = () => {
    let params = useParams();
    const [pokeInfo, setPokeInfo] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            let poke_api = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
            poke_api = await poke_api.json();

            let speciesinfo = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${params.id}`);
            speciesinfo = await speciesinfo.json();
            poke_api.speciesinfo = speciesinfo;

            let evolutionInfo =  await fetch(poke_api.speciesinfo.evolution_chain.url);
            evolutionInfo = await evolutionInfo.json();

            poke_api.speciesinfo.evolution_chain = evolutionInfo;
            setPokeInfo(poke_api);
      }
      fetchData();
      }, [params.id]);

    return (
        <Box sx={{minHeight: "100vh", backgroundColor: "#af2b2b", marginTop: "15px"}}> 
          <Grid sx={{padding: "15px"}} container spacing={2}>
              {!pokeInfo ? (
                  <></>
              ) : 
                <>
                    <Grid xs={12} item>
                        <PokeDetailHeader id={params.id}/>
                    </Grid>
                    <Grid xs={12} md={4} item>
                        <PokeSummary pokemon={pokeInfo} />
                    </Grid>
                    <Grid xs={12} md={8} item>
                        <PokeSummaryRight pokemon={pokeInfo} />
                    </Grid>
                </>
              }
          </Grid>
      </Box>
    );
}

export default PokemonDetail;
