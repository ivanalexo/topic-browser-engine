import React from 'react';
import { IconButton, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar({ onChange, operations, refetch, models}: any) {
  return (
    <>
        <TextField
            id="search-bar"
            onChange={(e) => operations ?
                operations.updateFilter(e.target.value) : onChange(e.target.value)
            }
            label="Enter your topic"
            variant="filled"
            placeholder="Search..."
            size="small"
        />
        <IconButton onClick={() => refetch({ name: models.filters.name })}>
            <SearchIcon />
        </IconButton>
    </>
  )
};
