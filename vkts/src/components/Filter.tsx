import * as React from 'react';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { Box, Chip } from '@mui/joy';
import Grid from '@mui/joy/Grid';
import Input from '@mui/joy/Input';
import '../style/style.css'

export const Filter = () => {
    return (
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
            <Grid xs={4}>
                <p className='text_filter'>Жанр</p>
                <Select
                    size='md'
                    multiple
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', gap: '0.25rem' }}>
                            {selected.map((selectedOption) => (
                                <Chip variant="soft" color="primary">
                                    {selectedOption.label}
                                </Chip>
                            ))}
                        </Box>
                    )}
                    sx={{
                        minWidth: '15rem',
                    }}
                    slotProps={{
                        listbox: {
                            sx: {
                                width: '100%',
                            },
                        },
                    }}
                >
                    <Option value="dog">Dog</Option>
                    <Option value="cat">Cat</Option>
                    <Option value="fish">Fish</Option>
                    <Option value="bird">Bird</Option>
                </Select>
            </Grid>
            <Grid xs={4}>
                <p className='text_filter'>Рейтинг</p>
                <Input variant="soft" type="number" placeholder='от'/>
                <Input variant="soft" type="number" placeholder='до'/>
            </Grid>
            <Grid xs={4}>
                <p className='text_filter'>Год</p>
                <Input variant="soft" type="number" placeholder='от'/>
                <Input variant="soft" type="number" placeholder='до'/>
            </Grid>
        </Grid>
    );
}