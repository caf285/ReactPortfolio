// react
import { useEffect, useState } from "react";

// mui
import { Box, Card, CardActionArea, CardContent, CardMedia, Tooltip } from "@mui/material"

export default function CardButton(props) {
  // unload props
  const image = props.image
  const alt = props.alt
  const title = props.title

  // handle hovered
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card sx={{ width: "80%" }}>
      <CardActionArea
        onMouseEnter={() => {setIsHovered(true)}}
        onMouseLeave={() => {setIsHovered(false)}}
        onClick={() => {console.log({alt})}}
      >
        <Box sx={{ overflow: "hidden" }}>
        <CardMedia
          component="img"
          image={image}
          alt={alt}
          sx={{ transition: "transform 0.15s", transformOrigin: "left", transform: isHovered ? "scale(1.1)" : "scale(1)" }}
        />
        </Box>
        <CardContent>
          {title}
        </CardContent>
      </CardActionArea>
    </Card>
  )
};
