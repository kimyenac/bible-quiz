import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const RoutesLayout = () => {
    return (
        <RecoilRoot>
            <Suspense fallback={<></>}>
                <BrowserRouter>
                    <Routes>
                        <Route path={'/'} element={<div>hello</div>} />
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </RecoilRoot>
    );
};

export default RoutesLayout;
