import React from "react";
import {connect} from"react-redux";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "../../components/Header/Header.jsx";
import HeaderLinks from "../../components/Header/HeaderLinks.jsx";
//import Footer from "components/Footer/Footer.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";
import Button from "../../components/CustomButtons/Button.jsx";
import Card from "../../components/Card/Card.jsx";
import CardBody from "../../components/Card/CardBody.jsx"; 
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardFooter from "../../components/Card/CardFooter.jsx";
import CustomInput from "../../components/CustomInput/CustomInput.jsx";

import loginPageStyle from "../../assets/jss/material-kit-react/views/loginPage.jsx";

import image from "../../assets/img/bg10.jpg";

import validateInput from "./../../validations/signIn.js"
import { userActions } from '../../actions';


//const trans = { backgroundColor: "rgba(255,255,255,0.8)" }

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    // reset login status
    this.props.dispatch(userActions.logout());

    // we use this to make the card to appear after the page has been rendered
    this.state = {
      signIn:{
        email:"",
        password:"",
        errors:{
          email:"",
          password:""
        },
        isLoading: false, 
      },
      signUp: {
        first_name: "",
        last_name: "",
        email:"",
        password:"",
        errors: {},
        isLoading: false,
      },
      cardAnimaton: "cardHidden"
    };
    this.isSignInValid = this.isSignInValid.bind(this);
  }

  handleSignIn(event){
    event.preventDefault();
    console.log(this.state.signIn);
    console.log("We need to validate and send data");
    if (this.isSignInValid()){
      this.setState({signIn:{errors:{},isLoading:true}});
      const { dispatch } = this.props;
      dispatch(userActions.login(this.state.signIn.email, this.state.signIn.password));
    }
  }

  handleSignInInputChange(event){
    const target = event.target;
    console.log("inside handleInputChange");
    console.log(target.id);
    console.log(target.value);
    this.setState({ signIn: { ...this.state.signIn, [target.id]: target.value } });
  }

  isSignInValid(){
    const {errors, isValid } = validateInput(this.state.signIn)
    console.log(isValid);
    console.log(errors);
    if(!isValid){
      this.setState({ signIn: { ...this.state.signIn, errors: errors } });
    }
    return isValid;
  }

  handleSignUp(event) {
    event.preventDefault();
    console.log(this.state.signUp);
    console.log("We need to validate and send data");
  }

  handleSignUpInputChange(event) {
    const target = event.target;
    console.log("inside handleInputChange");
    console.log(target.id);
    console.log(target.value);
    this.setState({ signUp: { ...this.state.signUp, [target.id]: target.value } });
  }


  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          absolute
          color="transparent"
          brand="Emobadara"
          rightLinks={<HeaderLinks />}
          {...rest}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="space-around" alignItems="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]}  >
                  <form className={classes.form}>
                    <CardHeader color="danger" className={classes.cardHeader}>
                      <h4>Login</h4>
                      
                    </CardHeader>
                    <CardBody>
                      <CustomInput
                        labelText="Email..."
                        id="email"
                        onChange={this.handleSignInInputChange.bind(this)}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "email",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Password"
                        id="password"
                        onChange={this.handleSignInInputChange.bind(this)}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "password",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon className={classes.inputIconsColor}>
                                lock_outline
                              </Icon>
                            </InputAdornment>
                          )
                        }}
                      />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button simple color="danger" size="lg" onClick={this.handleSignIn.bind(this)}>
                        Log in
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]} >
                  <form className={classes.form}>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <h4>Register</h4>

                    </CardHeader>
                    <p className={classes.divider}>Please fill in prcisely</p>
                    <CardBody>
                      <CustomInput
                        labelText="First Name..."
                        id="first_name"
                        onChange={this.handleSignUpInputChange.bind(this)}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Last Name.."
                        id="last_name"
                        onChange={this.handleSignUpInputChange.bind(this)}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Email..."
                        id="email"
                        onChange={this.handleSignUpInputChange.bind(this)}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "email",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Password"
                        id="password"
                        onChange={this.handleSignUpInputChange.bind(this)}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "password",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon className={classes.inputIconsColor}>
                                lock_outline
                              </Icon>
                            </InputAdornment>
                          )
                        }}
                      />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button simple color="primary" size="lg" onClick={this.handleSignUp.bind(this)}>
                        Get started
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  return {
    loggingIn
  };
}

const connectedLoginPage = connect(mapStateToProps)(withStyles(loginPageStyle)(LoginPage));

export default connectedLoginPage; 