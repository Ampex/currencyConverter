import React from 'react'
import {
  Grid,
  Typography,
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Fade,
  Button
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'

const light = '#d3d3d31A'

const Historical = props => {
  const rows =
    props.entries &&
    props.entries.map((row, index) => (
      <Fade key={index} timeout={200} in>
        <TableRow hover>
          <TableCell component='th' scope='row'>
            {row.time}
          </TableCell>
          <TableCell align='right'>
            {row.value}
            {row.selectFrom}
          </TableCell>
          <TableCell align='center'>
            <ArrowRightAltIcon />
          </TableCell>
          <TableCell align='right'>
            {row.after}
            {row.selectTo}
          </TableCell>
        </TableRow>
      </Fade>
    ))

  return (
    <Grid container>
      <Grid container direction='column' justify='space-around' item xs={10}>
        <Box style={{ background: light }}>
          <TableContainer style={{ maxHeight: '500px' }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>Data</TableCell>
                  <TableCell align='right'>Przed konwersją</TableCell>
                  <TableCell></TableCell>
                  <TableCell align='right'>Po konwersji</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{rows}</TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box style={{ background: light }} className='reset'>
          <Button onClick={() => localStorage.removeItem('history')}>
            Wyczyść historię
          </Button>
        </Box>
      </Grid>
      <Grid container justify='center' item xs={2}>
        <Box style={{ background: light }} className='tab'>
          <CloseIcon fontSize='large' />
          <Typography display='inline' variant='h5'>
            Historia
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Historical
