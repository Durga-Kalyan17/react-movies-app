export const incrementCount = () => ({
    type: 'INCREMENT',
});

export const decrementCount = () => ({
    type: 'DECREMENT',
});

export const setDate = (date) => ({
    type: 'SELECT_DATE',
    date,
})

export const setTime = (time) => ({
    type: 'SELECT_TIME',
    time,
})



