import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import colors from '../../constants/colors';
import SubHeading from '../../commonComponents/subHeading';
import InsetList from '../../commonComponents/list';

const SubFooterComponent3 = (props) => {
    const classes = styles();
    const listItems = ['Item1', 'Item2', 'Item3', 'Item4'];
    return (
        <Grid
            container={true}
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
        >
            <span className={classes.root}>
                <SubHeading title={'Lorem ipsum'} />
            </span>
            <InsetList list={listItems} />
        </Grid>
    );
};
const styles = makeStyles((theme) => ({
    root: {
        marginBottom: 8
    },
    iconRoot: {
        color: colors.white,
    },
}));
export default SubFooterComponent3;