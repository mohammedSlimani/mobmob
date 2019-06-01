import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "../../components/Grid/GridItem.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import CustomInput from "../../components/CustomInput/CustomInput.jsx";
import Button from "../../components/CustomButtons/Button.jsx";
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardAvatar from "../../components/Card/CardAvatar.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import CardFooter from "../../components/Card/CardFooter.jsx";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};  
class UserProfile extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user: {
        user_name: "",
        first_name: "",
        last_name: "",
        image: 0,
        Description: "",
        organization: "",
        city: "",
        country: "",
        emailAdress: "",
        postalCode: ""
      },
      updated_user_data: {
        user_name: "",
        first_name: "",
        last_name: "",
        image: 0,
        Description: "",
        organization: "",
        city: "",
        country: "",
        emailAdress: "",
        postalCode: ""
      }
    }

    this.UpdateUserData = this.UpdateUserData.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("inside handleSubmit");
    if (JSON.stringify(this.state.updated_user_data) !== JSON.stringify(this.state.user)) { this.UpdateUserData(); }
    else{
      alert("no changes were submited");
    }
  }

  handleInputChange(event) {
    event.preventDefault();
    console.log("inside handleInputChange");
    const target = event.target;
    console.log("inside handleInputChange : "+ target.id);

    this.setState({ updated_user_data: { ...this.state.updated_user_data, [target.id]: target.value } });
  }

  UpdateUserData(){
    console.log(this.state.user);
    console.log(this.state.updated_user_data);
    this.setState((state)=>({
      user:state.updated_user_data
    }));
    // I need to add the link of user updating data
    /*let res = await axios.post('http://localhost:3000/users/', user);
    console.log(res.data);*/
   }

componentDidMount(){
  this.setState({
     user:{ user_name: "AbdellahRS", last_name: "Rsmouki", first_name: "Abdellah", image: require("./../../assets/img/apk.png"),description:"this is a short description about me"},
    updated_user_data: { user_name: "AbdellahRS", last_name: "Rsmouki", first_name: "Abdellah", image: require("./../../assets/img/apk.png"), description: "this is a short description about me" }
  });
}

  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
                <p className={classes.cardCategoryWhite}>Update your profile</p>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={5}>
                    <CustomInput
                      labelText={this.state.updated_user_data.organization}
                      id="organization"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <CustomInput
                      labelText={this.state.updated_user_data.user_name}
                      value={this.state.updated_user_data.user_name}
                      id="user_name"
                      formControlProps={{
                        fullWidth: true
                      }}
                      onChange={this.handleInputChange.bind(this)}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText={this.state.updated_user_data.emailAdress}
                      value={ this.state.updated_user_data.emailAdress }
                      id="emailAddress"
                      formControlProps={{
                        fullWidth: true
                      }}
                      onChange={this.handleInputChange.bind(this)}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText={this.state.updated_user_data.first_name}
                      value={this.state.updated_user_data.first_name}
                      id="first_name"
                      formControlProps={{
                        fullWidth: true
                      }}
                      onChange={this.handleInputChange.bind(this)}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText={this.state.updated_user_data.last_name}
                      value={this.state.updated_user_data.last_name}
                      id="last_name"
                      formControlProps={{
                        fullWidth: true
                      }}
                      onChange={this.handleInputChange.bind(this)}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText={this.state.updated_user_data.city}
                      value={ this.state.updated_user_data.city }
                      id="city"
                      formControlProps={{
                        fullWidth: true
                      }}
                      onChange={this.handleInputChange.bind(this)}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText={this.state.updated_user_data.country}
                      value={this.state.updated_user_data.country}
                      id="country"
                      formControlProps={{
                        fullWidth: true
                      }}
                      onChange={this.handleInputChange.bind(this)}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText={this.state.updated_user_data.postalCode}
                      value={this.state.updated_user_data.postalCode}
                      id="postalCode"
                      formControlProps={{
                        fullWidth: true
                      }}
                      onChange={this.handleInputChange.bind(this)}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <InputLabel style={{ color: "#AAAAAA" }}>About me</InputLabel>
                    <CustomInput
                      labelText={this.state.updated_user_data.description}
                      value={ this.state.updated_user_data.description }
                      id="description"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 5
                      }}
                      onChange={this.handleInputChange.bind(this)}
                    />
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter>
                <Button color="primary" onClick={this.handleSubmit.bind(this)}>Update Profile</Button>
              </CardFooter>
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
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
} 

export default withStyles(styles)(UserProfile);
