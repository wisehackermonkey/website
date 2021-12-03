import React from "react"
import Tilt from 'react-parallax-tilt';
import { CssBaseline, Typography, Paper } from "@mui/material";
import "./Title.css"
import "typeface-turret-road";
export default function Title() {
    return <>

        <Tilt>
            <div style={{ height: '100px', padding: "10px" }}>
                <CssBaseline />
                <Paper elevation={10}>
                    <Typography
                        variant="h3"
                        gutterBottom
                        style={{ fontFamily: "Turret Road", color: "black" }}
                    >
                        Orans🦾website
                    </Typography>
                </Paper>
            </div>
        </Tilt>

    </>
}