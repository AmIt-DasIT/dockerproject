import { AspectRatio, VariantProp } from '@mui/joy';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { SxProps } from '@mui/joy/styles/types';
import { Link } from 'react-router-dom';
import { baseUrl } from '../../config';

type CardContainerType = {
  varient: VariantProp;
  sx: SxProps;
  cardData: any[];
}

export default function CardContainer({ varient, sx, cardData }: CardContainerType) {

  return (
    <Box
      sx={{
        width: '100%',
        ...sx
      }}
    >
      {
        cardData?.map((data: any) => (
          <Link to={`/post/${data.post_id}`} key={data.post_id} style={{ textDecoration: 'none' }}>
            <Card variant={varient}
              sx={{
                '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
                '--Card-radius': (theme) => theme.vars.radius.md
              }}
            >
              <CardContent>
                <AspectRatio sx={{mb: 2}}>
                  <img src={`${baseUrl}uploads/${data?.banner_image}`} alt="" loading="lazy" />
                </AspectRatio>
                <Typography sx={{my: 1}} level='body-sm'>{data?.createdAt.substring(0, 10)}</Typography>
                <Typography level="title-lg">{data?.title}</Typography>
                <Typography sx={{my: 1}}>{data?.description}</Typography>
                <Typography></Typography>
              </CardContent>
            </Card>
          </Link>
        ))
      }
    </Box>
  );
}
