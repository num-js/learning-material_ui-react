import { makeStyles, Typography, Box } from '@material-ui/core';


const useStyles = makeStyles({
    myBox: {
        color: 'red',
        background: 'pink',
        boxShadow: "10px 10px 10px 10px rgba(5, 8,6, 0.8)"
    }
})

const CssInJS = () => {

    const myStyles = useStyles();

    return (
        <Box className={myStyles.myBox}>
            <Typography variant="h1">
                Hi!, This is Numan
        </Typography>
        </Box>
    );
}

export default CssInJS;
