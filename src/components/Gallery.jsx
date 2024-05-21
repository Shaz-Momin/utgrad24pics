import React, { Suspense, lazy } from 'react'
import Nav from './Nav'

const images = ['AKR08280.jpg', 'AKR08282.jpg', 'AKR08283.jpg', 'AKR08288.jpg', 'AKR08289.jpg', 'AKR08295.jpg', 'AKR08297.jpg', 'AKR08303.jpg', 'AKR08305.jpg', 'AKR08307.jpg', 'AKR08311.jpg', 'AKR08325.jpg', 'AKR08336.jpg', 'AKR08343.jpg', 'AKR08352.jpg', 'AKR08364.jpg', 'AKR08372.jpg', 'AKR08375.jpg', 'AKR08376.jpg', 'AKR08384.jpg', 'AKR08388.jpg', 'AKR08411.jpg', 'AKR08413.jpg', 'AKR08448.jpg', 'AKR08465.jpg', 'AKR08467.jpg', 'AKR08496.jpg', 'AKR08570.jpg', 'AKR08574.jpg', 'AKR08592.jpg', 'AKR08595.jpg', 'AKR08600.jpg', 'AKR08602.jpg', 'AKR08605.jpg', 'AKR08610.jpg', 'AKR08618.jpg', 'AKR08621.jpg', 'AKR08628.jpg', 'AKR08633.jpg', 'AKR08639.jpg', 'AKR08645.jpg', 'AKR08652.jpg', 'AKR08661.jpg', 'AKR08665.jpg', 'AKR08667.jpg', 'AKR08672.jpg', 'AKR08676.jpg', 'AKR08685.jpg', 'AKR08691.jpg', 'AKR08694.jpg', 'AKR08699.jpg', 'AKR08704.jpg', 'AKR08726.jpg', 'AKR08733.jpg', 'AKR08738.jpg', 'AKR08743.jpg', 'AKR08745.jpg', 'AKR08753.jpg', 'AKR08762.jpg', 'AKR08763.jpg', 'AKR08773.jpg', 'AKR08781.jpg', 'AKR08795.jpg', 'AKR08798.jpg', 'AKR08804.jpg', 'AKR08809.jpg', 'AKR08820.jpg', 'AKR08826.jpg', 'AKR08835.jpg', 'AKR08841.jpg', 'AKR08845.jpg', 'AKR08850.jpg', 'AKR08865.jpg']

const Gallery = () => {
    return (
        <div className="min-h-screen w-full">
            <Nav />
            <div className="uppercase font-light tracking-widest py-16 text-2xl">Graduation Photos</div>
            <div className="flex flex-wrap mb-16 mx-12 items-center justify-center">
                {images.map((image, index) => (
                    <div key={index} className="flex lg:w-80 md:w-80 w-96 p-1" onClick={() => window.location.href = `/utgrad24pics/assets/${image}`}>
                        <Suspense fallback={<div>Loading...</div>}>
                        <img src={`/utgrad24pics/assets/${image}`} alt="Graduation" className="object-contain" />
                        </Suspense>
                    </div>
                ))}
            </div>
            {/* <div className="grid xl:grid-cols-4 xl:grid-rows-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mb-16 md:mx-32 mx-10 gap-2">
                {images.map((image, index) => (
                    <div key={index} className="flex items-center justify-center" onClick={() => window.location.href = `/utgrad24pics/assets/${image}`}>
                        <Suspense fallback={<div>Loading...</div>}>
                        <img src={`/utgrad24pics/assets/${image}`} alt="Graduation" className="object-contain" />
                        </Suspense>
                    </div>
                ))}
            </div> */}
        </div>
    )
}

export default Gallery