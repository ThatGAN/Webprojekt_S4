import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  ButtonBase,
} from "@material-ui/core/";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { likeRecipe, deleteRecipe } from "../../../actions/recipes";
import useStyles from "./styles";

const Rezept = ({ recipe, setCurrentId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));

  const Likes = () => {
    if (recipe?.likes?.length > 0) {
      return recipe.likes.find(
        (like) => like === (user?.result?.googleId || user?.result?._id)
      ) ? (
        <>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp;
          {recipe.likes.length > 2
            ? `You and ${recipe.likes.length - 1} others`
            : `${recipe.likes.length} like${
                recipe.likes.length > 1 ? "s" : ""
              }`}
        </>
      ) : (
        <>
          <ThumbUpAltOutlined fontSize="small" />
          &nbsp;{recipe.likes.length}{" "}
          {recipe.likes.length === 1 ? "Like" : "Likes"}
        </>
      );
    }

    return (
      <>
        <ThumbUpAltOutlined fontSize="small" />
        &nbsp;Like
      </>
    );
  };
  const openPost = (e) => {
    navigate(`/Rezepte/${recipe._id}`);
  };
  return (
    <Card className={classes.card} raised elevation={6}>
      <ButtonBase
        component="span"
        name="test"
        className={classes.cardAction}
        onClick={openPost}
      >
        <CardMedia
          className={classes.media}
          image={
            recipe.selectedFile ||
            "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
          }
          // title={recipe.title}
        />
        <div className={classes.overlay}>
          <Typography variant="h5">{recipe.title}</Typography>
          <Typography variant="body2">
            {moment(recipe.createdAt).fromNow()}
          </Typography>
        </div>

        {(user?.result?.googleId === recipe?.creator ||
          user?.result?._id === recipe?.creator) && (
          <div className={classes.overlay2} name="edit">
            <Button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentId(recipe._id);
              }}
              style={{ color: "white" }}
              size="small"
            >
              <MoreHorizIcon fontSize="medium" />
            </Button>
          </div>
        )}
        <div className={classes.details}>
          <Typography variant="body2" component="h2">
            #{recipe.tags.map((tag) => `${tag} `)}
          </Typography>
        </div>
        <div className={classes.zutaten}>
          <Typography>
            {recipe.zutaten?.split(" ").splice(0, 10).join(" ")}...
          </Typography>
        </div>
        <div className={classes.description}>
          <Typography>
            {recipe.description.split(" ").splice(0, 10).join(" ")}...
          </Typography>
        </div>
      </ButtonBase>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          disabled={!user?.result}
          onClick={() => dispatch(likeRecipe(recipe._id))}
        >
          <Likes />
        </Button>
        <Typography>kcal:{recipe.kcal}</Typography>
        {user?.result?._id === recipe?.creator && (
          <Button
            size="small"
            color="secondary"
            onClick={() => dispatch(deleteRecipe(recipe._id))}
          >
            <DeleteIcon fontSize="small" /> Löschen
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Rezept;
