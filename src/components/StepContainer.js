import React from 'react';
import { Steps } from 'antd';
const { Step } = Steps;
const StepContainer = ({ steps, currentStep, onChangeStep }) => {
  return (
    <p>
      <Steps current={currentStep} onChange={onChangeStep}>
        {steps.map((item) => (
          <Step {...item}>{item?.content}</Step>
        ))}
      </Steps>
    </p>
  );
};

export default StepContainer;
