
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

import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../contexts/productsContext";

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
    <Grid item md={3}>
      <Paper elevation={5} sx={{ p: 2 }}>
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
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        <Grid>
          <FormControl>
            <FormLabel>Type</FormLabel>
            <RadioGroup onChange={(e) => fetchByParams("type", e.target.value)}>
              <FormControlLabel value="all" control={<Radio />} label="all" />
              <FormControlLabel
                value="telephone"
                control={<Radio />}
                label="telephone"
              />
              <FormControlLabel
                value="laptop"
                control={<Radio />}
                label="laptop"
              />
              <FormControlLabel
                value="watch"
                control={<Radio />}
                label="watch"
              />
            </RadioGroup>
          </FormControl>
          <input
            step={100}
            min={1}
            max={10000}
            onChange={(e) => console.log(e.target.value)}
            type="range"
            name=""
            id=""
          />
          <FormControl>
            <FormLabel>Price</FormLabel>
            <RadioGroup
              onChange={(e) => fetchByParams("price_lte", e.target.value)}
            >
              <FormControlLabel value="all" control={<Radio />} label="all" />
              <FormControlLabel
                value="100"
                control={<Radio />}
                label="less than 100$"
              />
              <FormControlLabel
                value="600"
                control={<Radio />}
                label="less than 600$"
              />
              <FormControlLabel
                value="1300"
                control={<Radio />}
                label="less than 1300$"
              />
            </RadioGroup>
          </FormControl>
        </Grid>

      </Paper>
    </Grid>
  );
};

export default SideBar;
