import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import colors from '../../constants/colors';
import baseStylesInitial from '../../constants/baseStyles';
import SubHeading from '../../commonComponents/subHeading';

const SubFooterComponent2 = (props) => {
    const classes = styles();
    const commonClasses = baseStylesInitial();
    return (
        <Grid
            container={true}
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
        >
            <SubHeading title={'Lorem ipsum'} />
            <Grid className={classes.marginBottom}>
                <Typography
                    className={clsx(commonClasses.montserrat_regular_16, classes.text)}
                >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quos blanditiis tenetur unde suscipit,
                    quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos
                    laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
            </Grid>
            <Grid>
                <Typography
                    className={clsx(commonClasses.montserrat_regular_16, classes.text)}
                >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quos blanditiis tenetur unde suscipit,
                    quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos
                    laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
            </Grid>
        </Grid>
    );
};
const styles = makeStyles((theme) => ({
    imageRoot: {
        height: '4rem',
        width: '4rem'
    },
    text: {
        color: colors.white,
    },
    marginBottom: {
        marginBottom: 10
    }
}));
export default SubFooterComponent2;