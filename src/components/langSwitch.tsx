import React, { Fragment } from 'react'
import { Box, Button } from '@material-ui/core'
import { makeStyles, createStyles } from "@material-ui/core/styles"
import * as cs from "classnames"

const useStyles = makeStyles(() =>
  createStyles({
    box: {
      width: 60,
      border: 'none',
      display: 'flex',
      paddingBottom: 110,
    },
    buttonInactive: {
        fontSize: 12,
        height: 30,
        width: 30,
        background: 'white',
        borderRadius: 0,
        border: 'none',
        outline: 'none !important',
        "&:hover": {
            background: 'white',
            boxShadow: '0px 0px 0px 2px #FFCC00 inset'
        }
    },
    buttonActive: {
        fontSize: 12,
        height: 30,
        width: 30,
        background: '#FFCC00',
        borderRadius: 0,
        border: 'none',
        outline: 'none !important',
        "&:hover": {
            background: '#FFCC00',
            boxShadow: '0px 0px 0px 2px #FFCC00 inset'
        }
    }
  }),
)

export default function LangSwitch() {
const classes = useStyles()

const [state, setState] = React.useState({
    PT: true,
    EN: false
  })

const handleChangePT = () => {
    setState({ PT: true, EN: false })
}

const handleChangeEN = () => {
    setState({ PT: false, EN: true })
}

const { buttonInactive, buttonActive } = useStyles()
const PTButtonClass = cs({ [buttonInactive]: state.EN, [buttonActive]: state.PT })
const ENButtonClass = cs({ [buttonInactive]: !state.EN, [buttonActive]: !state.PT })


    return (
        <Fragment>
            <Box className={classes.box}>
                <button onClick={handleChangePT} className={PTButtonClass}>
                    PT
                </button>
                <button onClick={handleChangeEN} className={ENButtonClass}>
                    EN
                </button>
            </Box>
        </Fragment>

    )
}
