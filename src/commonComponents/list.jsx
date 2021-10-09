import React from 'react';
// Load Material  components
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// Load Material icons
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
// Load colors
import colors from '../constants/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: '-134px',
        marginTop: '2rem'
    },
    text: (props) => ({
        color: props.textColor ? props.textColor : colors.white
    }),
    greyFont: {
        color: colors.grey1
    },
    iconRoot: (props) => ({
        color: props.iconColor ? props.iconColor : colors.white,
    }),
    iconItemRoot: {
        minWidth: 33
    }
}));

const InsetList = (props) => {
    const { list, iconColor, textColor, row, secondaryText } = props;
    const classes = useStyles({ iconColor, textColor });
    return (
        <List className={classes.root}>
            {
                list.map((item, index) => (
                    <ListItem button>
                        <ListItemIcon classes={{ root: classes.iconItemRoot }}>
                            <FiberManualRecordIcon
                                fontSize="small"
                                classes={{ root: classes.iconRoot }}
                            />
                        </ListItemIcon>
                        <ListItemText
                            primary="Chelsea Otakan"
                            secondary={secondaryText ?
                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '
                                : ''}
                            classes={{ primary: row && index !== 0 ? classes.greyFont : classes.text }}
                        />
                    </ListItem>
                ))
            }
        </List>
    );
}
export default InsetList;