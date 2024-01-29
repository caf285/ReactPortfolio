// mui
import { styled } from "@mui/system";
import { Grid } from "@mui/material";

const Item = styled("div")({
  textAlign: "center",
});

export default function HomePage() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Item>Item 1</Item>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Item>Item 2</Item>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Item>Item 3</Item>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Item>Item 4</Item>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Item>Item 5</Item>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Item>Item 6</Item>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Item>Item 7</Item>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Item>Item 8</Item>
      </Grid>
    </Grid>
  )
}
