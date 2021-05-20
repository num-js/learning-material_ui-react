import { Box } from '@material-ui/core';

const BoxComponent = () => {
    return (
        <>
            <Box width={500} boxShadow={10} p={3} component="">
                <h1>Box Component is Like Div</h1>
                <p>
                    Hey, this is Numan, a Full Stack Developer from INDIA
                    Hey, this is Numan, a Full Stack Developer from INDIA
                    Hey, this is Numan, a Full Stack Developer from INDIA
                    Hey, this is Numan, a Full Stack Developer from INDIA
                </p>
            </Box>

            <br />

            <Box width={500} boxShadow={10} p={3} component="section">
                <h1>Box Component is Like Div</h1>
                <p>
                    Hey, this is Numan, a Full Stack Developer from INDIA
                    Hey, this is Numan, a Full Stack Developer from INDIA
                    Hey, this is Numan, a Full Stack Developer from INDIA
                    Hey, this is Numan, a Full Stack Developer from INDIA
                </p>
            </Box>

            <br />

            <Box width={500} boxShadow={10} p={3} component="article">
                <h1>Box Component is Like Div</h1>
                <p>
                    Hey, this is Numan, a Full Stack Developer from INDIA
                    Hey, this is Numan, a Full Stack Developer from INDIA
                    Hey, this is Numan, a Full Stack Developer from INDIA
                    Hey, this is Numan, a Full Stack Developer from INDIA
                </p>
            </Box>
        </>
    );
}

export default BoxComponent;
