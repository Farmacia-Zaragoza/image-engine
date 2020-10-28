import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { motion } from 'framer-motion';

import data from './db.json';

const useStyles = makeStyles({
    container: {
        padding: '0px 15px'
    }
});

const containerVariants = {
    hidden: {
        opacity: 1,
        scale: 0
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.2
        }
    }
}

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
}

const ListView = ({ setShowModal, setImg,getFullScreenCarousel }) => {
    const classes = useStyles();
    const setImgToShowOnModal = (item) => {
        setShowModal(true);
        setImg(item);
    }
    return (
        <motion.div className={classes.container}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div className="row"
                variants={itemVariants}
            >
                {data.map(item => (
                    <div className="col-xs-12 pb-2" key={item.id}>
                        <div className="list__item">
                            <div className="list__img">
                                <img src={`/img/${item.img}`} alt=""/>
                            </div>
                            <div className="list__info">
                                <span>26 December 2019</span>
                                <h4>Lorem ipsum dolor</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ex officia maiores laborum. Expedita eos magnam placeat consequatur eius doloremque?</p>
                                <button onClick={() => setImgToShowOnModal(item)}>View</button>
                                <button onClick={getFullScreenCarousel} style={{ marginLeft: 5 }}>View Fullscreen</button>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </motion.div>
    );
}

export default ListView;
