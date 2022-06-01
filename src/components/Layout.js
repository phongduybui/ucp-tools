import React, { useState } from 'react';
import { Layout as AntdLayout } from 'antd';
import StepContainer from './StepContainer';
import Step1 from './Step1';
import { useSelector } from 'react-redux';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
const { Header, Footer, Content } = AntdLayout;

const Layout = () => {
  const [current, setCurrent] = useState(0);
  const ucpData = useSelector((state) => state.ucp.data);

  const onChangeStep = (curr) => setCurrent(curr);
  const onNextStep = () => {
    if (current <= 3) {
      setCurrent(current + 1);
    }
  };
  const onPrevStep = () => {
    if (current >= 1) {
      setCurrent(current - 1);
    }
  };

  const steps = [
    {
      title: 'UUCW',
      description: 'Unadjusted Use Case Weight.',
      subTitle: ucpData?.uucw?.total || '',
      content: <Step1 onNextStep={onNextStep} onPrevStep={onPrevStep} />,
    },
    {
      title: 'UAW',
      description: 'Unadjusted Actor Weight.',
      subTitle: ucpData?.uaw?.total || '',
      content: <Step2 onNextStep={onNextStep} onPrevStep={onPrevStep} />,
    },
    {
      title: 'TCF',
      description: 'Technical Complexity Factor.',
      subTitle: ucpData?.tcf?.total?.toFixed(2) || '',
      content: <Step3 onNextStep={onNextStep} onPrevStep={onPrevStep} />,
    },
    {
      title: 'ECF',
      description: 'Environment Complexity Factor.',
      subTitle: ucpData?.ecf?.total?.toFixed(2) || '',
      content: <Step4 onNextStep={onNextStep} onPrevStep={onPrevStep} />,
    },
    {
      title: 'UCP',
      description: 'Result.',
      subTitle: ucpData?.finalResult?.toFixed(2) || '',
      content: <Step5 onPrevStep={onPrevStep} />,
    },
  ];

  return (
    <AntdLayout>
      <Header className="text-white text-xl flex justify-center items-center">
        Use Case Point Calculator Tool
      </Header>
      <Content className="min-h-[78vh] p-10">
        <StepContainer
          steps={steps}
          currentStep={current}
          onChangeStep={onChangeStep}
        />
        <div className="steps-content">{steps[current].content}</div>
      </Content>
      <Footer>Make by G7 Team</Footer>
    </AntdLayout>
  );
};

export default Layout;
