import React, { useEffect, useState } from "react";
import data from "./data/page.json";
import Box from "./components/Box";
import { Container, Grid } from "@mui/material";

const App = () => {
    const { data: ListData } = data;
    return (
        <>
            <Container>
                <Grid container spacing={4} mt={2}>
                    {ListData.map((items, index) => (
                        <Box items={{ ...items, index }} />
                    ))}
                </Grid>
            </Container>
        </>
    );
};

export default App;
