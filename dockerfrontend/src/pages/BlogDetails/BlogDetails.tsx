import { AspectRatio, Box, Typography } from '@mui/joy';
import { useParams } from 'react-router-dom';
import { baseUrl } from '../../config';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


function BlogDetails() {
  const { id } = useParams();

  // const { data, loaded } = useAxios({
  //   method: 'GET',
  //   url: `${baseUrl}blogs/post/${id}`
  // })

  const { isPending, error, data, isLoading } = useQuery({
    queryKey: ['data'],
    queryFn: () =>
      axios.get(`${baseUrl}blogs/post/${id}`)
  })

  console.log(data?.data)

  return (
    <Box>
      <Box sx={{
        width: '100%',
        display: 'grid',
        justifyItems: 'center',
      }}>
        <Box sx={{
          width: 800,
        }}>
          <AspectRatio sx={{ mb: 2, borderRadius: 20 }} >
            {!isLoading ? <img src={`${baseUrl}uploads/${data?.data?.data?.banner_image}`} alt="" loading="lazy" /> : "Loading..."}
          </AspectRatio>
          <Typography>Post Details</Typography>
        </Box>
      </Box>
      <ReactQueryDevtools initialIsOpen />
    </Box>
  )
}

export default BlogDetails;
