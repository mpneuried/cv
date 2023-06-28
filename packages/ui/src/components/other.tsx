import { SlideFade } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

interface SlideInFadeProps {
    from: 'left' | 'right';
}

export function SlideInFade({ children, from }: PropsWithChildren<SlideInFadeProps>) {
    const offSetX = from === 'right' ? '50vw' : '-50vw';
    return (
        <SlideFade in unmountOnExit offsetX={offSetX} transition={{ enter: { duration: 0.2 } }}>
            {children}
        </SlideFade>
    );
}
