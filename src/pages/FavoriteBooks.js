// react
import { useContext } from "react";

//mui
import { Box, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// context
import { BasenameContext } from "../App.js";

// review card component
import ReviewCard from "../components/reviewCard/ReviewCard.js";

export default function FavoriteBooksPage() {
  // theme & context
  const theme = useTheme();
  const basename = useContext(BasenameContext);

  return (
    <Box>
      soon ... I really just need to take pictures and finish my core navigation component. Hi, how are you? :D
      <Grid container sapcing={5} sx={{ padding: "15px" }}>
        <Grid item xs={12} sm={6}>
          <ReviewCard
            image={`${basename}/assets/images/books.jpg`}
            alt={"contact"}
            title={"Contact"}
            description={"description"}
          />
        </Grid>
      </Grid>
    </Box>
  )
};
