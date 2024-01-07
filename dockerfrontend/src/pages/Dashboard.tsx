import CardContainer from "../components/Common/Card";
import { baseUrl } from "../config";
import useAxios from "../hooks/useAxios";

export default function Dashboard() {

    const { data } = useAxios({
        method: 'GET',
        url: `${baseUrl}blogs`
      });


    return (
        <>
            
            <CardContainer
                varient={'soft'}
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
                    gap: 2,
                    p: 3
                }}
                cardData={data}
            />
        </>
    )
}