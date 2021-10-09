import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import colors from '../../constants/colors';
import baseStylesInitial from '../../constants/baseStyles';

const Heading = (props) => {
    const classes = styles();
    const commonClasses = baseStylesInitial();
    return (
        <Grid className={classes.root}>
            <Grid
                container={true}
                direction="row"
                justify="center"
                alignItems="flex-start"
                className={classes.headingRoot}
            >
                <Typography
                    className={clsx(commonClasses.montserrat_bold_22, classes.heading)}
                >
                    Conquering Tops
            </Typography>
            </Grid>
            <Grid
                container={true}
                direction="row"
                justify="center"
                alignItems="flex-start"
            >
                <Typography
                    className={
                        clsx(commonClasses.montserrat_bold_18,
                            classes.subHeading)
                    }
                >
                    Here is the description
            </Typography>
            </Grid>
        </Grid>
    );
};
const styles = makeStyles((theme) => ({
    headingRoot: {
        paddingTop: '5rem'
    },
    heading: {
        color: colors.white,
        fontSize: '44px !important'
    },
    subHeading: {
        color: colors.white
    },
    root: {
        background: colors.blue,
        height: '30vh'
    }
}));
export default Heading;