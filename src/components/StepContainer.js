import React from 'react';
import { Steps } from 'antd';
const { Step } = Steps;
const StepContainer = ({ steps, currentStep, onChangeStep }) => {
  return (
    <Steps type="navigation" current={currentStep} onChange={onChangeStep}>
      {steps.map((item) => (
        <Step {...item}>{item?.content}</Step>
      ))}
    </Steps>
  );
};

export default StepContainer;
