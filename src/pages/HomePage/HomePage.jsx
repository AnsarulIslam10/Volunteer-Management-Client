import React from 'react';
import Slider from '../../components/Slider/Slider';
import VolunteerNeedsNow from '../../components/VolunteerNeedsNow/VolunteerNeedsNow';
import FAQs from '../../components/FAQs/FAQs';
import Testimonials from '../../components/Testimonials/Testimonials';

const HomePage = () => {
    return (
        <div>
            <Slider/>
            <VolunteerNeedsNow/>
            <Testimonials/>
            <FAQs/>
        </div>
    );
};

export default HomePage;