import { Typography } from '@material-ui/core';

const TypographyComponent = () => {
    return (
        <>
            <Typography variant="h3">Hii, This is Numan</Typography>
            <Typography variant="h5">Hii, This is Numan</Typography>

            <br />

            <Typography variant="h4" align="center" color="secondary">
                Hii, This is Numan
            </Typography>

            <Typography variant="h4" align="right">
                Hii, This is Numan
            </Typography>

            <Typography variant="h4" display="inline">
                Hii, This is Numan
            </Typography>


            <Typography variant="body1" display="inline">
                <b>inline take the Content width only</b>
                <br />
                Hey, this is Numan, a Full Stack Developer from INDIA
                Hey, this is Numan, a Full Stack Developer from INDIA
                Hey, this is Numan, a Full Stack Developer from INDIA
            </Typography>

            <Typography variant="body2">
                Hey, this is Numan, a Full Stack Developer from INDIA
                Hey, this is Numan, a Full Stack Developer from INDIA
                Hey, this is Numan, a Full Stack Developer from INDIA
                Hey, this is Numan, a Full Stack Developer from INDIA
            </Typography>

            <Typography variant="subtitle1">
                Hey, this is Numan, a Full Stack Developer from INDIA
                Hey, this is Numan, a Full Stack Developer from INDIA
                Hey, this is Numan, a Full Stack Developer from INDIA
                Hey, this is Numan, a Full Stack Developer from INDIA
            </Typography>

            <Typography variant="subtitle1" align="justify" color="secondary"
                gutterBottom
            >
                Hey, this is Numan, a Full Stack Developer from INDIA
                Hey, this is Numan, a Full Stack Developer from INDIA
                Hey, this is Numan, a Full Stack Developer from INDIA
                Hey, this is Numan, a Full Stack Developer from INDIA
            </Typography>

            <Typography variant="subtitle1" color="primary" paragraph>
                Hey, this is Numan, a Full Stack Developer from INDIA
                Hey, this is Numan, a Full Stack Developer from INDIA
                Hey, this is Numan, a Full Stack Developer from INDIA
                Hey, this is Numan, a Full Stack Developer from INDIA
            </Typography>

        </>
    );
}

export default TypographyComponent;
