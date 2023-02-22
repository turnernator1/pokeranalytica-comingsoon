import React from 'react'
import Icon1 from '../../images/svg-4.svg'
import Icon2 from '../../images/svg-5.svg'
import Icon3 from '../../images/svg-6.svg'
import{ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, SerivesH2, ServicesP
} from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <SerivesH2>Reduce Expenses</SerivesH2>
                <ServicesP>We help reduce your fees and increase
                    your overall revenue
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <SerivesH2>Virtual Offices</SerivesH2>
                <ServicesP>You can access our platform anyhwere in the world, from any device
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <SerivesH2>Premium Benefits</SerivesH2>
                <ServicesP>Unlock our platinum VIP content to earn rewards and access the latest
                    features 
                </ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
