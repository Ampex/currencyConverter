import React, { useEffect } from 'react'
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
import useAPIcontext from '../hooks/useAPIcontext'

const isMobile = window.innerWidth <= 1200

const Historical = () => {
  const { history, addHistory, open, toogleOpen } = useAPIcontext()

  useEffect(() => {
    localStorage.getItem('history') &&
      addHistory(JSON.parse(localStorage.getItem('history')) || [])
  }, [addHistory])

  useEffect(() => {
    localStorage.setItem('history', JSON.stringify(history))
  }, [history])

  const handleClear = () => {
    localStorage.removeItem('history')
    addHistory([])
  }

  const rows =
    history &&
    history.map((row, index) => (
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
            {!history.length && (
              <Typography style={{ height: '80%' }} className='flex-center'>
                Brak historii konwersji walut
              </Typography>
            )}
          </TableContainer>
        </Box>
        <Box className='reset'>
          <Button
            disabled={!history.length}
            color='secondary'
            style={{ textDecoration: 'underline' }}
            onClick={handleClear}
          >
            Wyczyść historię
          </Button>
        </Box>
      </Grid>
      <Grid container justify='center' item xs={2}>
        <Box className='tab'>
          <Grow in={open || history.length !== 0}>
            <IconButton
              style={
                open
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
              onClick={() => toogleOpen()}
              color='secondary'
            >
              <KeyboardArrowRightIcon />
            </IconButton>
          </Grow>
          <Typography
            style={open ? { color: 'inherit' } : { color: '#adc8f5' }}
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
