import React, { Component } from 'react'
import Header from '../../components/Header/Header';
import HeaderLinks from '../../components/Header/HeaderLinks';
import Parallax from '../../components/Parallax/Parallax';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import Button from '../../components/CustomButtons/Button';
import dashboardRoutes from '../../routes';
import landingPageStyle from '../../assets/jss/material-kit-react/views/landingPage';
import { withStyles } from '@material-ui/core';

export class AppsListing extends Component {
    render() {
        const { classes, ...rest } = this.props;
        return (
            <>
                <Header
                    color="transparent"
                    routes={dashboardRoutes}
                    brand="E-MOBADARA"
                    rightLinks={<HeaderLinks />}
                    fixed
                    changeColorOnScroll={{
                        height: 400,
                        color: "white"
                    }}
                    {...rest}
                />
                <Parallax filter image={require("../../assets/img/apps-bg.jpg")}>
                    <div className={classes.container}>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={6}>
                                <h1 className={classes.title}>Everyone Matters.</h1>
                                <h4>
                                    “Happiness is not something ready made. It comes from your own actions.” – Dalai Lama
                                </h4>
                                <br />
                                <Button
                                    color="danger"
                                    size="lg"
                                    href="/login"
                                    rel="noopener noreferrer"
                                >
                                    Get Started
                                </Button>
                            </GridItem>
                        </GridContainer>
                    </div>
                </Parallax>  
            </>
        )
    }
}

export default withStyles(landingPageStyle)(AppsListing);

