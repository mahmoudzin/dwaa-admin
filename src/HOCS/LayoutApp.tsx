
import Error from '../components/Error';
import useInitialData from '../hooks/useInitialData';
import Loading from '../components/Loading';
import Layout from './../components/layout/Layout';




const layoutApp = (App:React.FC) => {
    return () => {
        const {loading, error} = useInitialData();

        return (
            loading ? 
                <Loading /> 
            :error ? 
                <Error /> 
            :<>
                <Layout>
                    <App />
                </Layout>
            </>   
        )
    }
    
}

export default layoutApp