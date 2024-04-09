import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ColorButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" color="success">
        Encontrar Usuários
      </Button>
    </Stack>
  );
}