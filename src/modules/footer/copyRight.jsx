import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import colors from '../../constants/colors';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const CopyRightComponent = (props) => {
    const classes = styles();
    return (
        <Grid
            container={true}
            direction="row"
            alignItems="center"
            className={classes.root}
        >
            <Grid item={true} xs={12} sm={12} md={2} lg={2} />
            <Grid item={true} xs={12} sm={12} md={6} lg={6}>
                <Typography
                    variant="body1"
                    classes={{ body1: classes.title }}
                >
                    © 2021 abc Inc. All rights reserved.
            </Typography>
            </Grid>
            <Grid item={true} xs={12} sm={12} md={4} lg={4}>
                <Button classes={{ root: classes.btnRoot }}>
                    Home
                </Button>
                <Button classes={{ root: classes.otherBtn }}>Blog</Button>
                <Button classes={{ root: classes.otherBtn }}>Support</Button>
                <Button classes={{ root: classes.otherBtn }}>About Us</Button>
                <Button classes={{ root: classes.otherBtn }}>Contact US</Button>
            </Grid>
        </Grid>
    );
};
const styles = makeStyles((theme) => ({
    root: {
        background: colors.grey,
        height: 'fit-content',
        padding: 10
    },
    btnRoot: {
        color: colors.blue,
        textTransform: 'capitalize',
        fontWeight: 'bold',
    },
    otherBtn: {
        textTransform: 'capitalize',
        fontWeight: 'bold',
    },
    title: {
        color: colors.grey1,
        marginBottom: 18,
        fontSize: 16,
        paddingTop: 12,
        fontFamily: 'Montserrat',
    }
}));
export default CopyRightComponent;