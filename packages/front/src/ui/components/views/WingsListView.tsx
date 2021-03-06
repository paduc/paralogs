import React from "react";
import { Container, Fab, List, makeStyles, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../../core-logic/reduxStore";

import { roundButtonStyle } from "../commun/styles";
import { AddWingModal } from "../wing/AddWingModal";
import { wingActions } from "../../../core-logic/useCases/wings/wings.actions";
import { WingsListItem } from "../wing/WingsListItem";
import { DisplayError } from "../commun/DisplayError";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  listWrapper: {
    width: "100%",
  },
  ...roundButtonStyle(theme),
}));

export const WingsListView: React.FC = () => {
  const classes = useStyles();
  const isAddWingFormVisible = useSelector(
    ({ wings }: RootState) => wings.isAddWingFormVisible,
  );
  const { data: wings, error } = useSelector((state: RootState) => state.wings);
  const dispatch = useDispatch();

  return (
    <Container maxWidth="sm" className={classes.paper}>
      <Typography variant="h5">
        Your wings
        {!isAddWingFormVisible && (
          <Fab
            color="primary"
            className={classes.roundButton}
            onClick={() => dispatch(wingActions.showAddWingForm())}
          >
            <AddIcon />
          </Fab>
        )}
      </Typography>
      <DisplayError error={error} />
      <AddWingModal />
      <List className={classes.listWrapper}>
        {wings.map(wing => (
          <WingsListItem key={wing.id} {...wing} />
        ))}
      </List>
    </Container>
  );
};
