import React from 'react';
import Slider from '../../components/Slider/Slider';
import VolunteerNeedsNow from '../../components/VolunteerNeedsNow/VolunteerNeedsNow';
import FAQs from '../../components/FAQs/FAQs';
import Testimonials from '../../components/Testimonials/Testimonials';

const HomePage = () => {
    return (
        <div className='max-w-7xl px-2 mx-auto dark:bg-[#181818]'>
            <Slider/>
            <VolunteerNeedsNow/>
            <Testimonials/>
            <FAQs/>
        </div>
    );
};

export default HomePage;