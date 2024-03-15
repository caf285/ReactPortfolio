// react
import { useEffect, useState } from "react";

// mui
import { Box, Card, CardActionArea, CardContent, CardMedia, Tooltip } from "@mui/material";
import { ArrowCircleRightOutlined as ArrowIcon } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

export default function CardButton(props) {
  // unload props
  const image = props.image;
  const alt = props.alt;
  const title = props.title;
  const href = props.href;

  // load default theme
  const theme = useTheme();

  // handle hovered
  const [isHovered, setIsHovered] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  return (
    <Card sx={{
      width: "80%",
    }}>
      <CardActionArea
        onMouseEnter={() => {setIsHovered(true)}}
        onMouseLeave={() => {setIsHovered(false)}}
        onTouchStart={() => {setIsHovered(true); setIsTouched(true)}}
        onTouchEnd={() => {setIsHovered(false); setIsTouched(false)}}
        onClick={() => {window.location.href = href}}
        sx={{
          transition: "background-color 0.25s",
          backgroundColor: isTouched ? "rgba(124, 124, 124, 0.1)" : "rgba(124, 124, 124, 0)"
        }}>
        <Box sx={{ overflow: "hidden", position: "relative" }}>
          <Box sx={{
            position: "absolute",
            zIndex: 1,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center", /* horizonatal center */
            alignItems: "center" /* vertical center */
          }}>
            <ArrowIcon sx={{
              width: "20%", 
              height: "100%",
              transition: "color 0.25s, filter 0.25s",
              color: isHovered ? "rgba(255, 255, 255, 0)" : "rgba(255, 255, 255, 0.75)",
              filter: isHovered ? "drop-shadow(3px 3px 3px rgba(0, 0, 0, 0))" : "drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.5))",
            }} />
          </Box>
          <CardMedia
            component="img"
            image={image}
            alt={alt}
            sx={{
              transition: "transform 0.25s, filter 0.25s", 
              transform: isHovered ? "scale(1.10)" : "scale(1.05)",
              filter: isHovered ? "brightness(0.9) blur(0px)" : "brightness(0.75) blur(3px)"
            }}
          />
        </Box>
        <CardContent>
          {title}
        </CardContent>
      </CardActionArea>
    </Card>
  )
};
