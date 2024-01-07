import Breadcrumbs from '@mui/joy/Breadcrumbs';
import { KeyboardArrowRight } from '@mui/icons-material';
import { Link, useParams } from 'react-router-dom';
import { Typography, useColorScheme } from '@mui/joy';
import { useMemo } from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { SxProps } from '@mui/joy/styles/types';

type BreadcrumbsWithIconType = {
  sx?: SxProps;
  path: string;
}

export default function BreadcrumbsWithIcon({ sx, path }: BreadcrumbsWithIconType) {

  const { mode } = useColorScheme()

  const color = useMemo(() => {
    return mode === "dark" ? "white" : "black"
  }, [mode])

  const { id } = useParams();

  const middlePathArray = path.replace("/", "").split("/");
  const lastPathItem = middlePathArray.pop();


  return (
    <Breadcrumbs separator={<KeyboardArrowRight sx={{ pt: 0.2 }} />} sx={{ ...sx }} aria-label="breadcrumbs">
      <Link to={"/"} style={{ textDecoration: 'none', paddingTop: 4 }}><HomeRoundedIcon /></Link>
      {middlePathArray?.map((item) => (
        <Link key={item} style={{ textDecoration: 'none', color: color, fontWeight: 700 }} to={`/${item}`} >
          {item}
        </Link>
      ))}
      <Typography>{lastPathItem === ':id' ? id : lastPathItem}</Typography>
    </Breadcrumbs>
  );
}