import React from 'react';
import Slider from '../../components/Slider/Slider';
import VolunteerNeedsNow from '../../components/VolunteerNeedsNow/VolunteerNeedsNow';
import FAQs from '../../components/FAQs/FAQs';

const HomePage = () => {
    return (
        <div>
            <Slider/>
            <VolunteerNeedsNow/>
            <FAQs/>
        </div>
    );
};

export default HomePage;