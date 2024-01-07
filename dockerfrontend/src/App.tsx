import './App.css'
import { Box, useColorScheme } from '@mui/joy';
import { Suspense, lazy, useMemo } from 'react';
const RoutesDetails = lazy(() => import("./routes/RoutesDetails"));
const Header = lazy(() => import("./components/Header/Header"));
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient();

function App() {


    const { mode } = useColorScheme()

    const backgroundColor = useMemo(() => {
        return mode === "dark" ? "#0B0D0E" : "white"
    }, [mode])



    return (
        <QueryClientProvider client={queryClient}>
            <Suspense fallback={<div>Loading...</div>}>
                <Box sx={{ height: '100vh', background: backgroundColor }}>
                    <Header />
                    <RoutesDetails />
                </Box>
            </Suspense>
        </QueryClientProvider>
    )
}

export default App
