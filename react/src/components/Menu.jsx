import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Chip, Stack, CssBaseline } from '@mui/material';

import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

import "../App.css"
import "./Menu.css"
import LINKS from "../../../links.json"
export default function IconMenu() {
    return (
        <>
            <CssBaseline />
            <Box sx={{ width: '100%', maxWidth: 360 }}>
                {/* <Grid item xs={12} md={6}> */}
                {/* <List  > */}
                <Stack spacing={1}>

                    {
                        LINKS.links.map((link, key) => {
                            return (
                                <ListItem key={key}>
                                    <AwesomeButton type="primary">{link.text} </AwesomeButton>
                                    {/* <Button variant='contained' href={link.link}> {link.text} </Button> */}
                                </ListItem>
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