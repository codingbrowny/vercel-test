import { Grid } from '@mui/material'
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import React from 'react'
import { GridItem, Statistics } from '..'

const StatisticsBar = () => {
    return (
        <>
            <Grid container spacing={2}>
                <GridItem xs={12} sm={6} md={3}>
                    <Statistics title={'Total Sales'} value={'GHC230K'} icon={<TrendingUpOutlinedIcon />} />
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
                    <Statistics title={'Total Orders'} value={'GHC230K'} icon={<LocalMallOutlinedIcon />} />
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
                    <Statistics title={'Total Revenue'} value={'GHC230K'} icon={<NotificationsOutlinedIcon />} />
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
                    <Statistics title={'Total Customers'} value={'GHC230K'} icon={<PeopleOutlinedIcon />} />
                </GridItem>
            </Grid>
        </>
    )
}

export default StatisticsBar