
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputAdornment,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import Accordion from '@mui/material/Accordion';
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../contexts/productsContext";
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { fontWeight } from "@mui/system";

const SideBar = () => {

  const { fetchByParams } = useProducts();

  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  return (
    <Grid item md={3} >
      <Paper sx={{width: "250px"}}>
        <TextField
          fullWidth
          id="input-with-icon-textfield"
          label="Search..."
          variant="outlined"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon  />
              </InputAdornment>
            ),
          }}
        />

        <Grid>
          <FormControl>
            <Accordion sx={{width: "250px"}}>
            <AccordionSummary  expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
            <FormLabel sx={{color: "#503223", fontWeight: "bolder"}}>CHOCOLATE TYPE</FormLabel>
            </AccordionSummary>
            <AccordionDetails>
            <RadioGroup onChange={(e) => fetchByParams("type", e.target.value)}>
              <FormControlLabel value="all" control={<Radio />} label="ALL" />
              <FormControlLabel
                value="mix"
                control={<Radio />}
                label="MIX"
              />
              <FormControlLabel
                value="milk"
                control={<Radio />}
                label="MILK"
              />
              <FormControlLabel
                value="dark"
                control={<Radio />}
                label="DARK"
              />
              <FormControlLabel
                value="white"
                control={<Radio />}
                label="WHITE"
              />
              <FormControlLabel
                value="halal"
                control={<Radio />}
                label="HALAL"
              />
              <FormControlLabel
                value="vegan"
                control={<Radio />}
                label="VEGAN"
              />
              <FormControlLabel
                value="box"
                control={<Radio />}
                label="BOX"
              />
            </RadioGroup>
            </AccordionDetails>
            </Accordion>
          </FormControl>
          <FormControl>
          <Accordion sx={{width: "250px"}}>
          <AccordionSummary  expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
            <FormLabel sx={{color: "#503223", fontWeight: "bolder"}}>Price</FormLabel>
            </AccordionSummary>
            <AccordionDetails>

            <RadioGroup
              onChange={(e) => fetchByParams("price_lte", e.target.value)}
            >
              <FormControlLabel value="all" control={<Radio />} label="ALL" />
              <FormControlLabel
                value="25"
                control={<Radio />}
                label="LESS THAN 25$"
              />
              <FormControlLabel
                value="50"
                control={<Radio />}
                label="LESS THAN 50$"
              />
              <FormControlLabel
                value="75"
                control={<Radio />}
                label="LESS THAN 75$"
              />
              <FormControlLabel
                value="100"
                control={<Radio />}
                label="LESS THAN 100$"
              />
            </RadioGroup>
            </AccordionDetails>
            </Accordion>
          </FormControl>
        </Grid>

      </Paper>
    </Grid>
  );
};

export default SideBar;
