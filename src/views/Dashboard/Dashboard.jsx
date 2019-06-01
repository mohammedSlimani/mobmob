import React from "react";
import PropTypes from "prop-types";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";

import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';




// core components
import GridItem from "../../components/Grid/GridItem.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import Table from "../../components/Table/Table.jsx";
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardBody from "./../../components/Card/CardBody.jsx";
import CardAvatar from "../../components/Card/CardAvatar.jsx";
import Button from "../../components/CustomButtons/Button.jsx";


import dashboardStyle from "./../../assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import { List, ListItem } from "@material-ui/core";
import Apk from "../../components/Apk/Apk.js";

import MaterialTable from "./../../components/Table/materialTable";
import axios from "axios";


class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      selectedChild:{
        value:"",
        placeHolderValue:""
      },
      ChildsList:{},
      // in our case this user has the children informations
      user:{
        user_name:"",
        first_name:"",
        last_name:"",
        image:0,
        Description:""
      },
      childrens_table_data:[],
      installed_apps_table_data:[
        {
        image:0,
        title:"",
        description:""
        }
      ],
      not_installed_apps_table_data:[
        {
          image: 0,
          title: "",
          description: ""
        }
      ],
    };
    this.handleChange = this.handleChange.bind(this); 
    this.handleChildChange = this.handleChildChange.bind(this); 
    this.setDashboardChild = this.setDashboardChild.bind(this); 
  }
  
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  componentDidMount(){
    /*var outside;

    fetch(fetchURL + image)
      //                         vvvv
      .then(response => response.blob())
      .then(images => {
        // Then create a local URL for that image and print it 
        outside = URL.createObjectURL(images)
        console.log(outside)
      })*/

    this.setState((state)=>({
      childrens_table_data: [
        ["1", "Toto", "TaTa"],
        ["2", "BOBO", "BABA"],
        ["3", "LOLO", "LALA"],
      ],
      ChildsList: 
        ["Toto","Bobo","Lolo"]
      ,
      selectedChild:
        {
          value: "Toto",
          placeHolderValue: "Select"
        },
      installed_apps_table_data: [
        {image:require("./../../assets/img/apk.png"),title:"app1",description:"description of app 1"},
        {image:require("./../../assets/img/apk.png"),title:"app2",description:"description of app 2"}
      ],
      not_installed_apps_table_data: [
        { image: require("./../../assets/img/apk.png"), title: "app1", description: "not installed yet 1" },
        { image: require("./../../assets/img/apk.png"), title: "app2", description: "not installed yet 2" }
      ],
      user:{ user_name: "AbdellahRS", last_name: "Rsmouki", first_name: "Abdellah", image: require("./../../assets/img/apk.png"),description:"this is a short description about me"}
    }));
  }

  handleChildChange(value,label){
    console.log(value);
  this.setState((state)=>({ selectedChild:{...state.selectedChild, value:value} }));
    this.setDashboardChild();
}
setDashboardChild(){
  // make API CALLL to get child data

  // then change DashBoard data
  this.setState((state) => ({
    installed_apps_table_data: [
      { image: require("./../../assets/img/apk.png"), title: "application1", description: "description of application 1" },
      { image: require("./../../assets/img/apk.png"), title: "application2", description: "description of application 2" }
    ],
    not_installed_apps_table_data: [
      { image: require("./../../assets/img/apk.png"), title: "app1", description: "not installed yet 1" },
      { image: require("./../../assets/img/apk.png"), title: "app2", description: "not installed yet 2" }
    ],
    user: { user_name: "hassan", last_name: "Rsmouki", first_name: "elhassan", image: require("./../../assets/img/apk.png"), description: "This is a short description about me" }
  }));
}





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
                  tableData={this.state.childrens_table_data}
                />
              </CardBody>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
            <Card profile>
              <CardAvatar profile>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={this.state.user.image} alt="..." />
                </a>
              </CardAvatar>
              <CardBody profile>
                <h6 className={classes.cardCategory}>{this.state.user.user_name}</h6>
                <h4 className={classes.cardTitle}>{this.state.user.last_name} {this.state.user.first_name}</h4>
                <p className={classes.description}>
                  {this.state.user.description}
                </p>

                <div className="container">
                  <div className="row">
                    <div className="col-md-8"></div>
                    <div className="col-md-8">
                      <Select
                        options={["Toto", "Bobo", "Lolo"]} 
                       value={this.state.selectedChild.value} 
                       onChange={this.handleChildChange}
                        getOptionLabel={option => option}
                        getOptionValue={option => option}
                        placeholder={this.state.selectedChild.placeHolderValue}
                        >
                        {this.state.selectedChild.value}  
                        </Select>
                    </div>
                    <div className="col-md-8"></div>
                  </div>
                </div>
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
                  {this.state.installed_apps_table_data.map(application => {
                    return (
                      <ListItem>
                        <Apk
                          image={application.image}
                          title={application.title}
                          description={application.description}
                          />
                      </ListItem>
                    )
                  })}
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
                  {this.state.not_installed_apps_table_data.map(application => {
                    return (
                      <ListItem>
                        <Apk
                          image={application.image}
                          title={application.title}
                          description={application.description}
                        />
                      </ListItem>
                    )
                  })}
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
