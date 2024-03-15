// react
import { useContext } from "react";

//mui
import { Box, Grid } from "@mui/material";

// context
import { BasenameContext } from "../App.js";

// review card component
import ReviewCard from "../components/reviewCard/ReviewCard.js";

export default function FavoriteBooksPage() {
  // context
  const basename = useContext(BasenameContext);

  return (
    <Box>
      Soon ... I am invisioning an MUI card component similar to the front page navigation components where a review of each book I have read pops out on mouse over. Forgive the temporary reused book image. Hi, how are you? :D
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
