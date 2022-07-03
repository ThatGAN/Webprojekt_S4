import React, { useState } from "react";
import {
  Container,
  Grow,
  Grid,
  AppBar,
  TextField,
  Button,
  Paper,
} from "@material-ui/core";

import Header from "./Header";
import { useDispatch } from "react-redux";
import Rezepte from "./components/Rezepte/Rezepte";
import { useNavigate, useLocation } from "react-router-dom";
import Form from "./components/Form/Form";
import { getRecipes, getRecipesBySearch } from "./actions/recipes";
import useStyles from "./styles";
import Pagination from "./components/pagination";
import ChipInput from "material-ui-chip-input";
import HeaderMobile from "./HeaderMobile";
import { BrowserView, MobileView } from "react-device-detect";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const RezeptePage = () => {
  const classes = useStyles();
  const query = useQuery();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");

  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();

  const searchRecipe = () => {
    if (search.trim() || tags) {
      dispatch(getRecipesBySearch({ search, tags: tags.join(",") }));
      navigate(
        `/recipes/search?searchQuery=${search || "none"}&tags=${tags.join(",")}`
      );
    } else {
      navigate("/");
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchRecipe();
    }
  };

  const handleAddChip = (tag) => setTags([...tags, tag]);

  const handleDeleteChip = (chipToDelete) =>
    setTags(tags.filter((tag) => tag !== chipToDelete));

  return (
    <>
      <div>
        <BrowserView>
          <Header />
        </BrowserView>
        <MobileView>
          <HeaderMobile />
        </MobileView>
      </div>
      <Container>
        <Grow in>
          <Container maxWidth="lg">
            <Grid
              container
              justifyContent="space-between"
              alignItems="stretch"
              spacing={3}
              // columns={{ lg: 12 }}
              className={classes.gridContainer}
            >
              <Grid item xs={12} sm={6} md={9} lg={9}>
                <Rezepte setCurrentId={setCurrentId} />
              </Grid>
              <Grid item xs={12} sm={6} md={3} lg={3}>
                <AppBar
                  className={classes.appBarSearch}
                  position="static"
                  color="inherit"
                >
                  <TextField
                    inputProps={{ min: 0, style: { paddingLeft: "15px" } }}
                    onKeyDown={handleKeyPress}
                    name="search"
                    variant="outlined"
                    label="Rezepte Suchen"
                    fullWidth
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <ChipInput
                    style={{ margin: "10px 0" }}
                    value={tags}
                    onAdd={(chip) => handleAddChip(chip)}
                    onDelete={(chip) => handleDeleteChip(chip)}
                    label="Tags Suchen (mit Enter einzeln bestätigen)"
                    variant="outlined"
                  />
                  <Button
                    onClick={searchRecipe}
                    className={classes.searchButton}
                    variant="contained"
                    color="primary"
                  >
                    Search
                  </Button>
                </AppBar>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
                {!searchQuery && !tags.length && (
                  <Paper className={classes.pagination} elevation={6}>
                    <Pagination page={page} />
                  </Paper>
                )}
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </>
  );
};

export default RezeptePage;
