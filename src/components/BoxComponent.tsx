import { Box } from '@mui/material';

interface BoxProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const BoxComponent: React.FC<BoxProps> = ({ children, className, style }) => {
  return (
    <Box
      sx={{
        backgroundColor: 'rgba(37,36,37,255)',
        color: 'white',
        borderRadius: '0.75rem',
        height: 'fit-content',
        width: '100%',
        overflowY: 'auto',
        ...style,
      }}
    >
      {children}
    </Box>
  );
};

export default BoxComponent;
