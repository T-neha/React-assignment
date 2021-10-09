import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import colors from '../../constants/colors';
import SubHeading from '../../commonComponents/subHeading';
import InsetList from '../../commonComponents/list';

const MenuList = (props) => {
    const classes = styles();
    const listItems = ['Item1', 'Item2', 'Item3', 'Item4'];
    return (
        <Grid>
            <Grid
                container={true}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >
                <span className={classes.root}>
                    <SubHeading
                        title={'Sidebar'}
                        subtitle={'Menu'}
                        color={colors.blue}
                    />
                </span>
                <InsetList
                    list={listItems}
                    iconColor={colors.blue}
                    textColor={colors.blue}
                    row={true}
                />
            </Grid>
            <Grid
                container={true}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >
                <span className={classes.root}>
                    <SubHeading title={'Sponsors'} color={colors.black} />
                </span>
                <span className={classes.listRoot}>
                <InsetList
                    list={listItems}
                    iconColor={colors.blue}
                    textColor={colors.blue}
                    row={true}
                    secondaryText={true}
                />
                </span>
            </Grid>
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
    listRoot: {
        marginLeft: 44
    }
}));
export default MenuList;