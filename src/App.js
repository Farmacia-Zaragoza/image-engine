import React, { useState, useRef } from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import GridIcon from '@material-ui/icons/ViewModule';
import ListIcon from '@material-ui/icons/ViewList';
import Tooltip from '@material-ui/core/Tooltip'

import { AnimatePresence, motion } from 'framer-motion';
import screenfull from 'screenfull';

import GridView from './GridView';
import ListView from './ListView';
import Modal from './Modal';
import FullScreenSlider from './FullScreenSlider';


const useStyles = makeStyles({
  root: {
    // background: '#BC72FB',
    // border: 0,
    // borderRadius: 3,
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    // color: 'white',
    // height: 48,
    padding: '75px 20px',
  },
  appbar: {
    background: '#fff',
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '5px 15px',
    boxSizing: 'border-box',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 10,
    boxShadow: '0px 0px 8px rgba(252,56,56, 0.9)',
    // borderBottom: '1px solid rgba(252,56,56, 0.9)'
  },
  title: {
    color: 'rgba(252,56,56, 0.9)',
    margin: 0,
    fontWeight: 600
  }
});

function App() {
  const classes = useStyles();
  const [isGrid, setGrid] = useState(true);
  const [isList, setList] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [img, setImg] = useState(null);
  const [isFull, setfull] = useState(false);

  const sliderRef = useRef(null);

  const setGridHandler = () => {
    setGrid(true);
    setList(false);
  }

  const setListHandler = () => {
    setList(true);
    setGrid(false);
  }
  const getFullScreenCarousel = () => {
    setfull(true)
    setTimeout(() => {
      if (screenfull.isEnabled) {
        screenfull.request(sliderRef.current);
        // console.log(sliderRef.current)
        screenfull.on('change', () => {
            if(!screenfull.isFullscreen) {
                setfull(false);
            }
        });
      }
    }, 500)
  }
  return (
    <div className={classes.root}>
      {/* modal */}
      <Modal showModal={showModal} setShowModal={setShowModal} img={img} />
      {/* header */}
      <div className={classes.appbar} position="fixed" >
          <div className="header_left">
              <motion.h4 className={classes.title}
                initial={{ y: -200 }}
                animate={{ y: 0 }}
              >Image Engine</motion.h4>
          </div>
          <div className="header_right">
            <Tooltip title="View as Grid" arrow style={{ marginRight: 5 }}>
              <IconButton onClick={setGridHandler} edge="end"><GridIcon style={{ color: 'rgba(252,56,56, 0.9)' }} /></IconButton>
            </Tooltip>
            <Tooltip title="View as List" arrow arrow>
              <IconButton onClick={setListHandler} edge="end"><ListIcon style={{ color: 'rgba(252,56,56, 0.9)' }} /></IconButton>
            </Tooltip>
          </div>
      </div>

    {/* grid */}
    {isFull && <div ref={sliderRef}><FullScreenSlider /></div> }
    <AnimatePresence exitBeforeEnter>
    {isGrid && <GridView  setShowModal={setShowModal} setImg={setImg} getFullScreenCarousel={getFullScreenCarousel} />}
    {isList && <ListView  setShowModal={setShowModal} setImg={setImg} getFullScreenCarousel={getFullScreenCarousel} />}
    </AnimatePresence>
    </div>
  );
}

export default App;
