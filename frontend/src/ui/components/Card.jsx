// Core
import { useDispatch, useSelector } from 'react-redux';

// Engine
import { deleteLink } from '../../engine/core/user/actions';
import { selectors } from '../../engine/core/user/selectors';

// Parts
import {Box, Grid, Typography, Button} from '@mui/material';

const Card = function (props) {
    const { data } = props;
    const links = useSelector(selectors.links);
    const dispatch = useDispatch();

    const handleDelete = async () => {
        dispatch(deleteLink(links, data._id));
    }

    return (
        <Grid
            item
            xs={12}
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                backgroundColor: '#fff',
                padding: 2,
                marginTop: 2,
                borderRadius: '8px',
            }}
        >
            <Box
                sx={{
                    overflowX: 'auto',
                }}
            >
                <Typography component='p' marginBottom={1}><b>From:</b> {data.from}</Typography>
                <Typography component='p' marginBottom={1}>
                    <b>To:</b> <a href={data.to} target='_blanck' rel='noopener noreferrer'>{data.to}</a>
                </Typography>
                <Typography component='p' marginBottom={1}><b>Clicks:</b> {data.clicks}</Typography>
                <Typography component='p'><b>Date:</b> {new Date(data.date).toLocaleDateString()}</Typography>
            </Box>
            <Button variant='text' onClick={handleDelete}>Delete</Button>
        </Grid>
    )
}

export default Card;