import React from "react";
import corazonVacio from "../../img/corazonVacio.svg";
import {
  Button,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@mui/material";
const FavDrawerEmpty = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "18rem",
      }}
    >
      <img
        style={{ marginTop: "5rem", width: "50px" }}
        src={corazonVacio}
        alt="Corazón vacío"
      />
      <Typography variant="h6" style={{ textAlign: "center" }}>
        Todavía no tenés agregado ningún producto <span className="text-[#fe98cb]">favorito</span>
      </Typography>
      <Typography
        variant="body6"
        style={{
          textAlign: "center",
          width: "260px",
          marginTop: "1rem",
          fontWeight: "bold",
        }}
      >
        Hacé  <span className="text-[#fe98cb]">click </span>sobre el corazón que está dentro de cada producto y comenzá a
        armar tu lista.
      </Typography>
    </div>
  );
};

export default FavDrawerEmpty;
