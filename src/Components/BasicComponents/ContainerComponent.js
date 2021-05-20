import React from 'react';
import { Box, Typography, Container } from '@material-ui/core';

const ContainerComponent = () => {
    return (
        <>
            <Container maxWidth="sm">
                <Typography variant="h4">Container is used for Responsive Design</Typography>
                <Typography Variant="subtitle1">
                    Hey, this is Numan, a Full Stack Developer from INDIA
                    Hey, this is Numan, a Full Stack Developer from INDIA
                    Hey, this is Numan, a Full Stack Developer from INDIA
                    Hey, this is Numan, a Full Stack Developer from INDIA
                </Typography>
            </Container>

            <br />
            <br />
            <br />

            <Container disableGutters={true}>
                <Typography variant="h4">disableGutters - removed padding margin of a Container</Typography>
                <Typography Variant="subtitle1">
                    Hey, this is Numan, a Full Stack Developer from INDIA
                    Hey, this is Numan, a Full Stack Developer from INDIA
                    Hey, this is Numan, a Full Stack Developer from INDIA
                    Hey, this is Numan, a Full Stack Developer from INDIA
                </Typography>
            </Container>
        </>
    );
}

export default ContainerComponent;