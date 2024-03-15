// react
import { useContext } from "react";

// mui
import { Box, Grid, Link, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// context
import { BasenameContext } from "../App.js";

// card button components
import CardButton from "../components/cardButton/CardButton.js";

export default function HomePage() {
  // theme & context
  const theme = useTheme();
  const basename = useContext(BasenameContext);

  return (
    <Box>
      <Typography variant="body1" sx={{ margin: "5px", marginBottom: "15px" }}>
        Welcome to my humble React Portfolio. This site is intended as practice and is very much a work in progress. At the moment it is just a light React wrapper for fitting Material UI components together like legos, but it is very much a hobby and will one day be much more. Please click <Link underline="always" color={theme.palette.info.main} href="https://github.com/caf285/ReactPortfolio">here</Link> for my github repo for this project to see the core code.
      </Typography>
      <Typography variant="body1" sx={{ margin: "5px", marginBottom: "15px" }}>
          I am still trying to think of cool stuff to fill this space with, which is slowly starting to become a place to put my favorite things. If you would like to see some of my favorite things, please feel free to poke around.
      </Typography>

      {/* menu grid */}
      <Grid container spacing={5} sx={{padding: "15px"}}>
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <CardButton
              image={`${basename}/assets/images/books.jpg`}
              alt={"books"}
              title={"My Favorite Books"}
              href={`${basename}/#/favorite-books`}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <CardButton
              image={`${basename}/assets/images/games.jpg`}
              alt={"games"}
              title={"My Favorite Games"}
              href={`${basename}/#/favorite-games`}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <CardButton
              image={`${basename}/assets/images/movies.jpg`}
              alt={"movies"}
              title={"My Favorite Movies"}
              href={`${basename}/#/favorite-movies`}
            />
          </Box>
        </Grid>
        {/*<Grid item xs={12} sm={6} md={4}>
          <Box sx={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <CardButton
              image={`${basename}/assets/images/things.jpg`}
              alt={"things"}
              title={"My Favorite Things"}
              href={`${basename}/#/favorite-things`}
            />
          </Box>
        </Grid>*/}
      </Grid>
    </Box>
  )
};
