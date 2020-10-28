import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AnimatePresence, motion } from 'framer-motion';
import CancelIcon from '@material-ui/icons/CancelOutlined'
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles({
    backdrop: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 11,
        background: 'rgba(0, 0, 0, .6)'
    },
    modal: {
        width: '100%',
        height: '100%',
        padding: 50,
        boxSizing: 'border-box',
        position: 'relative'
    },
    modal_img: {
        width: '100%',
        height: '100%',
        objectFit: 'contain'
    },
    cancel__icon: {
        position: 'absolute',
        top: 10,
        right: 10
    }
})

const Modal = ({ showModal, setShowModal, img }) => {
    const classes = useStyles();
    return (
        <AnimatePresence>
            {showModal && (
                <motion.div className={classes.backdrop}
                    initial={{
                        opacity: 0,
                        scale: 0
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        delay: 0.2,
                        when: 'beforeChildren',
                        staggerChildren: 0.2
                    }}
                >
                    <motion.div className={classes.modal}
                        initial={{
                            opacity: 0,
                            scale: 0
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1
                        }}
                        transition={{
                            delay: 0.6
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0
                        }}
                    >
                        <IconButton onClick={() => setShowModal(false)}  className={classes.cancel__icon}><CancelIcon style={{ color: '#fff' }} /></IconButton>
                        <img className={classes.modal_img} src={`/img/${img.img}`} alt="card"/>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default Modal;
