import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import { Button, Chip, Stack, CssBaseline, Typography } from '@mui/material';

import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import "typeface-turret-road";
import "../App.css"
import "./Menu.css"
import LINKS from "../../links.json"

export default function IconMenu() {
    return (
        <>
            <CssBaseline />
            <Box sx={{ width: '100%', maxWidth: 360 }}>
                {/* <Grid item xs={12} md={6}> */}
                {/* <List  > */}
                <Stack spacing={1} alignItems="center">

                    {
                        LINKS.links.map((link, key) => {
                            return (
                                // <ListItem key={key}>
                                    <AwesomeButton type="primary" href={link.link}>
                                        <Typography
                                            style={{ fontFamily: "Turret Road", color: "white" }}
                                        >
                                            {link.text}
                                        </Typography>
                                    </AwesomeButton>
                                    // {/* <Button variant='contained' href={link.link}> {link.text} </Button> */}
                                // </ListItem>
                                // <Chip sx={{ width: "300px" }}
                                //     label={link.text}
                                //     component="a"
                                //     href={link.link}
                                //     variant="outlined"
                                //     clickable
                                // />

                            )
                        })
                    }

                </Stack>

                {/* </List> */}
                {/* </Grid> */}
            </Box>
        </>
    );
}