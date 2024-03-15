// react
//import { useEffect, useState } from "react";

// mui
import { Box, Card, CardContent, CardMedia } from "@mui/material";

export default function ReviewCard(props) {
  // unload props
  const image = props.image;
  const alt = props.alt;
  const title = props.title;

  return (
    <Card sx={{
      width: "80%",
      display: "flex"
    }}>
      <Box sx={{
        display: "flex",
        flesDirection: "column"
      }}>
        <CardMedia
          component="img"
          image={image}
          alt={alt}
          sx={{
            aspectRatio: "3 / 4",
            transition: "transform 0.25s, filter 0.25s", 
            filter: "brightness(0.75)"
          }}
        />
        <CardContent sx={{ flex: "1 0 auto" }}>
          {title}
        </CardContent>
      </Box>
    </Card>
  )
};
