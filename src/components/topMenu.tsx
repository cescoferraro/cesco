import React, { Fragment } from 'react'
import { Container, Hidden } from "@material-ui/core"
import { navigate, Link } from "gatsby"



const styles = {
    li: {
        padding: '0px 10px',
        border: '1px solid transparent'
    }
}



const TopMenu = () => {


function hoverOnItem(e) {
    e.target.style.color = '#000'  
}
function hoverOffItem(e) {
    e.target.style.color = '#AAA'
}
function hoverOnContact(e) {
    e.target.style.color = '#000'
    e.target.style.border = '2px solid #FFCC00'
    e.target.style.padding = '0px 9px'
}
function hoverOffContact(e) {
    e.target.style.color = '#AAA'
    e.target.style.border = '1px solid #FFCC00'
    e.target.style.padding = '1px 10px'
}


    return (
        <Fragment>
            <Container style={{ 
                display: 'flex', 
                maxWidth: '1280px',
                alignItems: 'flex-end',
                padding: '0px 120px',
                height: 155,
                }}>
                <Container style={{ alignContent: 'flex-start' }}>
                    <Link style={{ boxShadow: 'none' }} to="/">
                        <img src="https://user-images.githubusercontent.com/36003926/87722225-1a5ff080-c78e-11ea-8a61-001dafc83634.png"
                            alt="logo-black"
                            style={{ margin: 16}}
                        />
                    </Link>
                </Container>
                <Hidden smDown>
                    <Container style={{ display: 'flex' }}>
                        <ul style={{ color: "#AAA", listStyle: 'none', display: 'flex', justifyContent: 'space-evenly', padding: 8 }}>
                            <li onMouseOver={hoverOnItem} onMouseOut={hoverOffItem} onClick={() => navigate("/")}
                                style={styles.li}
                            >
                                TRABALHOS
                            </li>
                            <li onMouseOver={hoverOnItem} onMouseOut={hoverOffItem} onClick={() => navigate("/about")}
                                style={styles.li}
                            >
                                SOBRE
                            </li>
                            <li onMouseOver={hoverOnItem} onMouseOut={hoverOffItem} onClick={() => navigate("/news")}
                                style={styles.li}
                            >
                                NEWS
                            </li>
                            <li onMouseOver={hoverOnItem} onMouseOut={hoverOffItem} onClick={() => navigate("/clients")}
                                style={styles.li}
                            >
                                CLIENTES
                            </li>
                            <li onMouseOver={hoverOnContact} onMouseOut={hoverOffContact} onClick={() => navigate("/contact")}
                                style={{ padding: '1px 10px', border: '1px solid #FFCC00' }}
                            >
                                CONTATO
                            </li>
                        </ul>
                    </Container>
                </Hidden>
            </Container>
        </Fragment>
        
    )
}

export default TopMenu