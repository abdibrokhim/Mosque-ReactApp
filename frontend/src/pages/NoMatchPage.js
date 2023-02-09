import PrimaryPageWrapper from '.././components/PrimaryPageWrapper';

function NoMatchPage() {
    return (
        <>
            <PrimaryPageWrapper>
                <div 
                    style={{
                        fontSize: '10rem',
                        }}>
                    404
                </div>
                <div 
                    style={{
                        fontSize: '2rem',
                    }}>
                    Page not found
                </div>
            </PrimaryPageWrapper>
        </>
    );
}

export default NoMatchPage;
