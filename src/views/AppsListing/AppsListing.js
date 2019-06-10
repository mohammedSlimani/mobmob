import React from "react";
import PropTypes from "prop-types";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "../../components/Grid/GridItem.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import Table from "../../components/Table/Table.jsx";
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import CardAvatar from "../../components/Card/CardAvatar.jsx";
import avatar from "../../assets/img/faces/morty.png";
import Button from "../../components/CustomButtons/Button.jsx";

import dashboardStyle from "../../assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import { List, ListItem } from "@material-ui/core";
import Apk from "../../components/Apk/Apk.js";

class Dashboard extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="warning">
                <h4 className={classes.cardTitleWhite}>All Apps</h4>
                <p className={classes.cardCategoryWhite}>
                  These are all the apps developed by the students
                </p>
              </CardHeader>
              <CardBody>
                <List>
                  <ListItem>
                    <Apk />
                  </ListItem>
                  <ListItem>
                    <Apk />
                  </ListItem>
                  <ListItem>
                    <Apk />
                  </ListItem>
                  <ListItem>
                    <Apk />
                  </ListItem>
                  <ListItem>
                    <Apk />
                  </ListItem>
                  <ListItem>
                    <Apk />
                  </ListItem>
                </List>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
