import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import colors from '../../constants/colors';
import baseStylesInitial from '../../constants/baseStyles';
import SubHeading from '../../commonComponents/subHeading';

const MainContainer = (props) => {
    const classes = styles();
    const commonClasses = baseStylesInitial();
    return (
        <Grid
            container={true}
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
        >
            <span className={classes.root}>
                <Grid item={true} xs={12}>
                    <SubHeading
                        title={'Allquam Risus'}
                        subtitle={'Justo'}
                        color={colors.blue}
                    />
                </Grid>
                <Grid item={true} xs={12}>
                    <SubHeading
                        title={'24 March, 2018'}
                        subtitle={'| Justo by Risus'}
                        color={colors.black}
                        subTitleColor={colors.grey1}
                        size={18}
                    />
                </Grid>
                <Grid className={commonClasses.inlineFlex}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV-9JyPag1OZNxviG9_NTOkhebELq1MSFuUg&usqp=CAU"
                        alt="logo"
                        className={classes.imageRoot}
                    />
                    <Typography
                        className={clsx(commonClasses.montserrat_regular_20, classes.text)}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Quos blanditiis tenetur unde suscipit,
                        quam beatae rerum inventore consectetur,
                        neque doloribus, cupiditate numquam dignissimos
                        laborum fugiat deleniti? Eum quasi quidem quibusdam.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Quos blanditiis tenetur unde suscipit,
                        quam beatae rerum inventore consectetur,
                        neque doloribus, cupiditate numquam dignissimos
                        laborum fugiat deleniti? Eum quasi quidem quibusdam.
                </Typography>
                </Grid>
                <Typography
                    className={clsx(commonClasses.montserrat_regular_20, classes.text)}
                >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quos blanditiis tenetur unde suscipit,
                    quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos
                    laborum fugiat deleniti? Eum quasi quidem quibusdam.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quos blanditiis tenetur unde suscipit,
                    quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos
                    laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
                <Button
                    variant="contained"
                    classes={{ root: classes.btnRoot }}
                >
                    Read More
                </Button>
                <Button
                    variant="contained"
                    classes={{ root: classes.btnRoot }}
                >
                    Comments
                </Button>
            </span>
            <span className={classes.root}>
                <Grid item={true} xs={12}>
                    <SubHeading
                        title={'Allquam Risus'}
                        subtitle={'Justo'}
                        color={colors.blue}
                    />
                </Grid>
                <Grid item={true} xs={12}>
                    <SubHeading
                        title={'24 March, 2018'}
                        subtitle={'| Justo by Risus'}
                        color={colors.black}
                        subTitleColor={colors.grey1}
                        size={18}
                    />
                </Grid>
                <Grid>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEtNOrCuduI5SDDZCbkin1kMwmpNuwe73dpA&usqp=CAU"
                        alt="logo"
                        className={classes.image2}
                    />
                    <Typography
                        className={clsx(commonClasses.montserrat_regular_20, classes.text)}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Quos blanditiis tenetur unde suscipit,
                        quam beatae rerum inventore consectetur,
                        neque doloribus, cupiditate numquam dignissimos
                        laborum fugiat deleniti? Eum quasi quidem quibusdam.
                </Typography>
                <Button
                    variant="contained"
                    classes={{ root: classes.btnRoot }}
                >
                    Read More
                </Button>
                <Button
                    variant="contained"
                    classes={{ root: classes.btnRoot }}
                >
                    Comments
                </Button>
                </Grid>
            </span>
        </Grid>
    );
};
const styles = makeStyles((theme) => ({
    imageRoot: {
        margin: '0px 10px 10px 0px',
    },
    text: {
        color: colors.grey1,
    },
    image2: {
        width: '90%',
        height: '23vh'
    },
    root: {
        marginBottom: '1rem'
    },
    btnRoot: {
        color: colors.blue,
        textTransform: 'capitalize',
        fontWeight: 'bold',
        margin: '15px 10px 10px 0px'
    }
}));
export default MainContainer;