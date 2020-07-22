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
  Button,
  IconButton,
  Grow
} from '@material-ui/core'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'

const isMobile = window.innerWidth <= 1200

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
            {row.value} {row.from}
          </TableCell>
          <TableCell align='center'>
            <ArrowRightAltIcon />
          </TableCell>
          <TableCell align='right'>
            {row.after} {row.to}
          </TableCell>
        </TableRow>
      </Fade>
    ))

  return (
    <Grid container alignItems='flex-start'>
      <Grid container direction='column' justify='space-around' item xs={10}>
        <Box>
          <TableContainer style={{ height: '490px' }}>
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
            {!props.entries.length && (
              <Typography style={{ height: '80%' }} className='flex-center'>
                Brak historii konwersji walut
              </Typography>
            )}
          </TableContainer>
        </Box>
        <Box className='reset'>
          <Button
            disabled={!props.entries.length}
            color='secondary'
            style={{ textDecoration: 'underline' }}
            onClick={props.clear}
          >
            Wyczyść historię
          </Button>
        </Box>
      </Grid>
      <Grid container justify='center' item xs={2}>
        <Box className='tab'>
          <Grow in={props.status || props.entries.length !== 0}>
            <IconButton
              style={
                props.status
                  ? {
                      transform: `${
                        isMobile ? 'rotate(270deg)' : 'rotate(180deg)'
                      }`
                    }
                  : {
                      transform: `${
                        isMobile ? 'rotate(90deg)' : 'rotate(0deg)'
                      }`
                    }
              }
              onClick={props.toogle}
              color='secondary'
            >
              <KeyboardArrowRightIcon />
            </IconButton>
          </Grow>
          <Typography
            style={props.status ? { color: 'inherit' } : { color: '#adc8f5' }}
            variant='h6'
          >
            Historia
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Historical
