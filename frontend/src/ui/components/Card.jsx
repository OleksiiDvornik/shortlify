import {Box, Grid, Typography, Button} from '@mui/material';

const Card = function (props) {
    const { data } = props;

    return (
        <Grid
            item
            md={12}
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                backgroundColor: '#fff',
                padding: 2,
                marginTop: 2,
                borderRadius: '8px',
            }}
        >
            <Box sx={{

            }}>
                <Typography component='p' marginBottom={1}><b>From:</b> {data.from}</Typography>
                <Typography component='p' marginBottom={1}>
                    <b>To:</b> <a href={data.to} target='_blanck' rel='noopener noreferrer'>{data.to}</a>
                </Typography>
                <Typography component='p' marginBottom={1}><b>Clicks:</b> {data.clicks}</Typography>
                <Typography component='p'><b>Date:</b> {new Date(data.date).toLocaleDateString()}</Typography>
            </Box>
            <Button variant='text'>Delete</Button>
        </Grid>
    )
}

export default Card;