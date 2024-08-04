/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { Typography, Card, Divider, Dialog, DialogContent } from "@mui/material";
import { css } from "@emotion/react";
import axios from 'axios';

const bucketName = 'blogbucket';
const bucketRegion = 'us-east-2';
const prefix = ''; // Add prefix if your images are in a subfolder

const styles = {
    gridCont: css({
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '3px',
        padding: '20px'
    }),
    imgStyle: css({
        width: '100%',
        alignSelf: 'center',
    }),
    cardCont: css({
        height: '100%',
        alignSelf: 'center',
        display: 'flex',
        '&:hover':{
            filter: 'brightness(0.6)',
        },
        backgroundColor: '#f2eeed',
    }),
    dialogImg: css({
        maxWidth: '100%',
        maxHeight: '80vh',
        
    }),
};

function Gallery(num = "0000") {
    const [images, setImages] = useState([]);
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleClickOpen = (url) => {
        setSelectedImage(url);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedImage(null);
    };

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get(`https://${bucketName+num?.num}.s3.${bucketRegion}.amazonaws.com?list-type=2&prefix=${prefix}`);
                const parser = new DOMParser();
                const xml = parser.parseFromString(response.data, 'application/xml');
                const contents = xml.getElementsByTagName('Contents');
                const imageUrls = [];

                for (let i = 0; i < contents.length; i++) {
                    const key = contents[i].getElementsByTagName('Key')[0].textContent;
                    const url = `https://${bucketName+num?.num}.s3.${bucketRegion}.amazonaws.com/${key}`;
                    imageUrls.push(url);
                }
                setImages(imageUrls);
            } catch (error) {
                console.error('Error fetching data from S3:', error);
            }
        };

        fetchImages();
    }, []);

    return (
        <>
            <div css={styles.gridCont}>
                {images.map((url, index) => (
                    <div key={index} css={styles.cardCont} onClick={() => handleClickOpen(url)}>
                        <img src={url} alt={`S3 content ${index}`} css={styles.imgStyle} />
                    </div>
                ))}
            </div>
            <Dialog open={open} onClose={handleClose} maxWidth="md">
                <DialogContent>
                    {selectedImage && <img src={selectedImage} alt="Selected content" css={styles.dialogImg} />}
                </DialogContent>
            </Dialog>
        </>
    );
}

export default Gallery
