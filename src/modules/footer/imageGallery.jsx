import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import colors from '../../constants/colors';
import baseStylesInitial from '../../constants/baseStyles';
import SubHeading from '../../commonComponents/subHeading';

const ImageGallery = (props) => {
    const classes = styles();
    const commonClasses = baseStylesInitial();
    return (
        <>
            <SubHeading title={'Image Gallery'} />
            <Grid
                container={true}
                direction="row"
                justify="space-between"
                alignItems="flex-start"
                className={classes.marginBottom}
            >
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV-9JyPag1OZNxviG9_NTOkhebELq1MSFuUg&usqp=CAU"
                    alt="logo"
                    className={classes.imageRoot}
                />
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEtNOrCuduI5SDDZCbkin1kMwmpNuwe73dpA&usqp=CAU"
                    alt="logo"
                    className={classes.imageRoot}
                />
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXj-X9qEDwxDAwZiozDKPAYZziNd4ldb6vGw&usqp=CAU"
                    alt="logo"
                    className={classes.imageRoot}
                />
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ZhV1zWfcoS0mh6RXu8clt4hgFxVATZhf5g&usqp=CAU"
                    alt="logo"
                    className={classes.imageRoot}
                />
            </Grid>
            <Grid
                container={true}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >
                <SubHeading title={'Lorem ipsum'} />
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
        </>
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
export default ImageGallery;