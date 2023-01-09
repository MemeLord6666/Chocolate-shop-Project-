import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ContactsUs from '../components/ContactUs/ContactsUs';

const ContactsPage = () => {
    return (
        <Box>
            <Grid>
                <ContactsUs/>
            </Grid>
        </Box>
    );
};

export default ContactsPage;