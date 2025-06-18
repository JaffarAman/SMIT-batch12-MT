import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';

export default function BlogCard({ cardDetails, actionBtn, setRefresh }) {

    console.log("cardDetails", cardDetails)


    const deleteHandler = async () => {
        await deleteDoc(doc(db, "blogs", cardDetails.id))
        setRefresh((prevValue) => !prevValue)
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={cardDetails.image}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {cardDetails.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {cardDetails.desc}
                </Typography>
            </CardContent>
            {actionBtn && <CardActions>
                <Button size="small">Edit</Button>
                <Button size="small" onClick={deleteHandler}  >Delete</Button>
            </CardActions>}
        </Card>
    );
}
