import { images } from './categoryImages';
import React from "react";


export const columns = React.useMemo(
    () => [
    {
        Header: 'Category',
        accessor: 'category',
    },
    {
        Header: 'Word',
        accessor: 'word',
    },
    {
        Header: 'Translation',
        accessor: 'translation',
    },
    {
        Header: 'Trained',
        accessor: 'trained',
    },
    {
        Header: 'Correct',
        accessor: 'correct',
    },
    {
        Header: 'Incorrect',
        accessor: 'incorrect',
    },
    {
        Header: 'Percentage',
        accessor: 'percentage',
    },
], []
)