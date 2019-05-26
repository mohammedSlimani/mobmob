import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
//import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
//import Icon from "@material-ui/core/Icon";
// @material-ui/icons
/*import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
*/
// core components
import GridItem from "../../components/Grid/GridItem.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import Table from "../../components/Table/Table.jsx";
//import Tasks from "../../components/Tasks/Tasks.jsx";
//import CustomTabs from "../../components/CustomTabs/CustomTabs.jsx";
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
//import CardIcon from "../../components/Card/CardIcon.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
//import CardFooter from "../../components/Card/CardFooter.jsx";
import CardAvatar from "../../components/Card/CardAvatar.jsx";
import avatar from "../../assets/img/faces/morty.png";
import Button from "../../components/CustomButtons/Button.jsx";


//import { bugs, website, server } from "../../variables/general.jsx";

/*import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "../../variables/charts.jsx";
*/
import dashboardStyle from "../../assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import { List, ListItem } from "@material-ui/core";
import Apk from "../../components/Apk/Apk.js";

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>

           <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="warning">
                <h4 className={classes.cardTitleWhite}>childrens</h4>
                <p className={classes.cardCategoryWhite}>
                  children's informations 
                </p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="warning"
                  tableHead={["ID", "FirstName", "LastName"]}
                  tableData={[
                    ["1", "Toto", "TaTa"],
                    ["2", "BOBO","BABA"],
                    ["3", "LOLO", "LALA"],
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
            <Card profile>
              <CardAvatar profile>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={avatar} alt="..." />
                </a>
              </CardAvatar>
              <CardBody profile>
                <h6 className={classes.cardCategory}>Kid</h6>
                <h4 className={classes.cardTitle}>Toto Tata</h4>
                <p className={classes.description}>
                  What the mentor is saying about the kid. He is Creative and he is 
                  improving so much. 
              </p>
                <Button color="primary" round>
                  Update informations
              </Button>
              </CardBody>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="warning">
                <h4 className={classes.cardTitleWhite}>Installed Applications</h4>
                <p className={classes.cardCategoryWhite}>
                  installed applications on your phone
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

                </List>
              </CardBody>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Tutor's choice(not installed yet)</h4>
                <p className={classes.cardCategoryWhite}>
                  Suggested applications to install
                </p>
              </CardHeader>
              <CardBody>
                <List>
                  <ListItem>
                    <Apk/>
                  </ListItem>
                  <ListItem>
                    <Apk />
                  </ListItem>
                  <ListItem>
                    <Apk/>
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
