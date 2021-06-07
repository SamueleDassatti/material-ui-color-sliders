import React, { useContext } from "react";
import Slider from "@material-ui/core/Slider";
import makeStyles from "@material-ui/core/styles/makeStyles";
import tinyColor from "tinycolor2";
import RGBSliderContext from "./RGBSliderContext";

const useStyles = makeStyles({
  rail: {
    background: "linear-gradient(to right, #000, #f00)",
    height: "8px",
    borderRadius: "4px",
    opacity: 1,
  },
  thumb: {
    width: "20px",
    height: "20px",
    marginTop: "-6px",
    color: "white",
    boxShadow: ({ red }) =>
      "0px 0px 0px 2px " + tinyColor({ r: red, g: 0, b: 0 }),
    "&:hover": {
      boxShadow: ({ red }) =>
        "0px 0px 0px 8px " + tinyColor({ r: red, g: 0, b: 0 }).setAlpha(0.16),
    },
    "&.Mui-focusVisible": {
      boxShadow: ({ red }) =>
        "0px 0px 0px 8px " + tinyColor({ r: red, g: 0, b: 0 }).setAlpha(0.16),
    },
    "&.MuiSlider-active": {
      boxShadow: ({ red }) =>
        "0px 0px 0px 14px " + tinyColor({ r: red, g: 0, b: 0 }).setAlpha(0.16),
    },
  },
});

export default ({
  style,
  onChange = () => {},
  onChangeCommitted = () => {},
}) => {
  const { red, setRed } = useContext(RGBSliderContext);
  const { rail, thumb } = useStyles({ red });

  return (
    <Slider
      track={false}
      classes={{ rail, thumb }}
      min={0}
      max={255}
      style={style}
      onChange={(_, value) => {
        setRed(value);
        onChange(value);
      }}
      value={red}
      onChangeCommitted={onChangeCommitted}
    />
  );
};
