import React from 'react';
// Load Material  components
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
// Load colors
import colors from '../constants/colors';
// Load common css classes
import baseStylesInitial from '../constants/baseStyles';

const SubHeading = ({ title, size, color, subtitle, subTitleColor }) => {
    const classes = styles({ size, color, subTitleColor });
    const commonClasses = baseStylesInitial();
    return (
        <span className={commonClasses.inlineFlex}>
            <Typography
                variant="body1"
                classes={{ body1: clsx(classes.heading) }}
            >
                {title}
            </Typography>
            {
                subtitle ?
                    <Typography
                        variant="body1"
                        classes={{ body1: clsx(classes.subHeading) }}
                    >
                        {subtitle}
                    </Typography>
                    : null
            }
        </span>
    );
};
const styles = makeStyles((theme) => ({
    heading: (props) => ({
        color: props.color ? props.color : colors.white,
        marginBottom: 18,
        fontSize: props.size ? props.size : 20,
        fontWeight: 'bold',
        fontFamily: 'Montserrat',
    }),
    subHeading: (props) => ({
        color: props.subTitleColor ? props.subTitleColor : colors.black,
        marginBottom: 18,
        fontSize: props.size ? props.size : 20,
        fontWeight: 'bold',
        fontFamily: 'Montserrat',
        marginLeft: 7
    })
}));
export default SubHeading;