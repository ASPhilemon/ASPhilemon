import React from 'react';
import { useInView } from 'react-intersection-observer';
import { styled } from '@mui/system';
import { Box } from '@mui/material';

interface StyledBoxProps {
  inview: string;
}

const StyledBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'inview',
})<StyledBoxProps>(({ inview }) => ({
  transform: inview === 'true' ? 'translateY(0)' : 'translateY(150px)',
  transition: 'transform 1.5s ease-out',
  willChange: 'transform',
}));

export function SlideBox({ children }: { children: React.ReactNode }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <StyledBox ref={ref} inview={inView.toString()}>
      {children}
    </StyledBox>
  );
}
