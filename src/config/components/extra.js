import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Extra(props) {
    const { image,head,pera,btn,price,className } = props;
    return (
        <Card className={className} sx={{ maxWidth: 400 }}>
            <CardMedia
                component="img"
                height="200"
                image={image} alt="green iguana"

            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {head} Bedrooms
                </Typography>
                <Typography variant="h5" color="text.secondary">
                Services {pera} 
                </Typography>
                <Typography variant="h6" color="text.secondary">
                   Price {price} 
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">{btn}</Button>
            </CardActions>
        </Card>
    );
}
