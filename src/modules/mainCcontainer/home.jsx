import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import colors from '../../constants/colors';
import MenuList from './menuList';
import MainContainer from './mainContainer';

const Home = (props) => {
    const classes = styles();
    return (
        <Grid
            container={true}
            direction="row"
            alignItems="flex-start"
            className={classes.root}
            spacing={2}
        >
            <Grid item={true} xs={12} sm={12} md={2} lg={2}/>
            <Grid item={true} xs={12} sm={12} md={6} lg={6}>
                <MainContainer />
            </Grid>
            <Grid item={true} xs={12} sm={12} md={4} lg={4}>
                <MenuList />
            </Grid>
        </Grid>
    );
};
const styles = makeStyles((theme) => ({
    root: {
        background: colors.grey,
        height: 'fit-content',
        padding: 10
    }
}));
export default Home;