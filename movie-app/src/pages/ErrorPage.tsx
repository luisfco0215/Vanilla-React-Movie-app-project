import { Box, Center, Heading } from "@chakra-ui/react"
import { isRouteErrorResponse, useRouteError } from "react-router-dom"
import NavBar from "../components/NavBar";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <>
            <div>
                <NavBar />
                <Box padding={5} bg="gray.700" margin={50} borderRadius='10' color="gray.100">
                    {
                        isRouteErrorResponse(error) ?
                            <Heading as="h1" size="lg">404 Page not found</Heading> :
                            <Heading as="h1" size="lg">An error occurred</Heading>
                    }
                </Box>
            </div>

        </>
    );

}

export default ErrorPage;