import React from 'react';
// Load Material  components
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// Load colors
import colors from '../../constants/colors';
// Load Required components
import ImageGallery from './imageGallery';
import SubFooterComponent2 from './subFooterComponent2';
import SubFooterComponent3 from './subFooterComponent3';

const FooterHome = (props) => {
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
            <Grid item={true} xs={12} sm={6} md={3} lg={3}>
                <ImageGallery />
            </Grid>
            <Grid item={true} xs={12} sm={6} md={4} lg={4}>
                <SubFooterComponent2 />
            </Grid>
            <Grid item={true} xs={12} sm={6} md={3} lg={3}>
                <SubFooterComponent3 />
            </Grid>
        </Grid>
    );
};
const styles = makeStyles((theme) => ({
    root: {
        background: colors.blue,
        height: 'fit-content',
    }
}));
export default FooterHome;