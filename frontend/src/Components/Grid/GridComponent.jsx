import { Box, Grid } from '@chakra-ui/react'
import React from 'react'
import CardBox from '../CardBox/CardBox'

function GridComponent() {
  return (
     // {base:"",sm:"",md:"",lg:"",xl:""}
    <Box w={"85%"}  m={"auto"}>
        <Grid templateColumns={{base:"repeat(1,1fr)",sm:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(3,1fr)",xl:"repeat(3,1fr)"}} gap={3} >
            <CardBox />
            <CardBox />
            <CardBox />
            <CardBox />
            <CardBox />
            <CardBox />
            <CardBox />
            <CardBox />
            <CardBox />

        </Grid>

    </Box>
  )
}

export default GridComponent