import { useColorScheme } from '@mui/joy/styles';
import Button from '@mui/joy/Button';

export default function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  return (
    <Button
      variant="soft"
      color="primary"
      onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
    >
      {mode === 'dark' ? 'Light' : 'Dark'}
    </Button>
  );
}
