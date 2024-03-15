// react
import { useEffect, useState } from "react";

// mui
import { Box, Card, CardActionArea, CardContent, CardMedia, Tooltip } from "@mui/material";
import { ArrowCircleRightOutlined as ArrowIcon } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

export default function ReviewCard(props) {
  // unload props
  const image = props.image;
  const alt = props.alt;
  const title = props.title;
  const href = props.href;

  // load default theme
  const theme = useTheme();

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
