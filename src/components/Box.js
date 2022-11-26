import React from "react";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

const Box = ({
    items: { category, originalPrice, keywords, currency, index, name },
}) => {
    return (
        <Grid item sm={6} md={4} xs={12}>
            <Card
                sx={{
                    maxWidth: "100%",
                }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={`https://picsum.photos/id/${index}/200/200`}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography
                        sx={{ fontWeight: "bold" }}
                        gutterBottom
                        variant="h6"
                        component="div">
                        Name - {name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        Category - {category}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        Keywords - {keywords || "No keywords."}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        OriginalPrice - {`${originalPrice} ${currency}`}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"></Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Box;
