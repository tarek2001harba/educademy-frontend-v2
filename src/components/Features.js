import React from 'react'
import Feature from './Feature'
import SupportImage from '../assets/img/support-feature.jpg'
import GrowthImage from '../assets/img/growth-feature.jpg'
import EducatorsImage from '../assets/img/educators-feature.jpg'
const Features = () => {
    return (
        <div>
            <Feature
                image={SupportImage}
                title="Membership with a meaning"
                desc="With so much to explore, real projects to
                create, and the support of fellow-creatives,
                Skillshare empowers you to accomplish real
                growth."
                bg="var(--darkGrey)"
            />
            <Feature
                image={GrowthImage}
                title="Best value for money"
                desc="Our subscription plans takes into
                consideration all the economics, and gives
                back the best value, with thousands of infeluential leaders and educators who
                provide you with precious content."
                dir="rev"
            />
            <Feature
                image={EducatorsImage}
                title="World’s best educators"
                desc="Get your education from world-leading
                inventors, entrpenures, and artists. We have
                over 1000 infeluential people who will teach
                you their secrets."
                bg="var(--darkGrey)"
            />
        </div>
    )
}

export default Features
