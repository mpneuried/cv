'use client';

import React from 'react';
import { useTechStackLogos } from '../hooks/useTechStackLogos';
import { Ticker, VStack, Box } from 'ui';

function splitArrayInHalf(arr: any[]) {
    const midIndex = Math.ceil(arr.length / 2);
    const firstHalf = arr.slice(0, midIndex);
    const secondHalf = arr.slice(midIndex);
    return [firstHalf, secondHalf];
}

export function TechStack() {
    const logos = useTechStackLogos();
    const [firstHalf, secondHalf] = splitArrayInHalf(logos.sort((a, b) => a.name.localeCompare(b.name)));
    return (
        <VStack spacing={6}>
            <Ticker direction='left'>
                {firstHalf.map(({ logo }, index) => (
                    <Box key={index} height={'32px'} px={6}>
                        {logo}
                    </Box>
                ))}
            </Ticker>
            <Ticker direction='right'>
                {secondHalf.map(({ logo }, index) => (
                    <Box key={index} height={'32px'} px={6}>
                        {logo}
                    </Box>
                ))}
            </Ticker>
        </VStack>
    );
}