import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  media: {
    flexGrow: "1",
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    height: "100%",
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white",
  },
  overlay2: {
    position: "absolute",
    top: "40px",
    right: "40px",
    color: "white",
  },
  grid: {
    display: "flex",
  },
  details: {
    position: "absolute",
    marginLeft: "1rem",
    bottom: "1rem",
    left: "1rem",
    color: "white !important",
  },
  description: {
    position: "absolute",
    marginLeft: "1rem",
    left: "1rem",
    fontSize: "3rem",
    bottom: "6rem",
    color: "white !important",
  },
  zutaten: {
    position: "absolute",
    marginLeft: "1rem",
    left: "1rem",
    fontSize: "3rem",
    bottom: "3rem",
    color: "white !important",
  },
  title: {
    padding: "0 16px",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
});
