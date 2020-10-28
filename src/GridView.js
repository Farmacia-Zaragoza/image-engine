import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { motion } from 'framer-motion';

import data from './db.json';

const useStyles = makeStyles({
    container: {
        padding: '0px 15px'
    },
    card: {
        background: '#fff',
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-end',
        boxShadow: '0px 7px 10px rgba(0,0,0,0.5)',
        transition: '0.5s ease-in-out',
        '&::before': {
            position: 'absolute',
            content: '',
            top: 0,
            left: 0,
            display: 'block',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to bottom, rgba(0, 176, 155, 0.5), rgba(150,201,61, 1))',
            zIndex: 2,
            transition: '0.5s all',
            opacity: 1
        }
    },
    card_img: {
        minHeight: 250,
        objectFit: 'cover',
        width: '100%',
        borderRadius: 5,
        cursor: 'pointer'
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


const GridView = ({ setShowModal, setImg, getFullScreenCarousel }) => {
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
            <div className="row">
            {data?.map(item => (
                <motion.div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3 p-2"
                    variants={itemVariants}
                    whileHover={{
                        scale: 1.02
                    }}
                >
                    <div className="card">
                    <img src={`/img/${item.img}`} alt="card"/>
                    <div className="card__info">
                        <h5>{item.title}</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non corrupti nam, nostrum enim reprehenderit dignissimos consectetur eaque provident sapiente? Voluptates.</p>
                        <button onClick={() => setImgToShowOnModal(item)} className="card_btn">View</button>
                        <button onClick={getFullScreenCarousel} className="card_btn" style={{ marginLeft: 5 }}>FullScreen</button>
                    </div>
                    </div>
                </motion.div>
            ))}
            </div>
        </motion.div>
    );
}

export default GridView;
