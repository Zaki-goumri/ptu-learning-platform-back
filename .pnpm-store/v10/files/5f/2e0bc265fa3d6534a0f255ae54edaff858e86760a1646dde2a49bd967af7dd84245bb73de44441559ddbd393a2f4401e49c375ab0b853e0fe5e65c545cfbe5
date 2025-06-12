import React, { useState } from 'react';
import { Box, Button } from "../../index.js";
import { Step, Stepper } from "./index.js";
const steps = [{
  number: 1,
  label: 'Do this first'
}, {
  number: 2,
  label: "Don't forget this"
}, {
  number: 3,
  label: 'And finally this'
}];
export const clickableSteps = () => {
  const [currentStep, setCurrentStep] = useState(1);
  return /*#__PURE__*/React.createElement(Stepper, null, steps.map(({
    number,
    label
  }) => /*#__PURE__*/React.createElement(Step, {
    key: number,
    active: currentStep === number,
    completed: currentStep > number,
    onClick: idx => setCurrentStep(idx),
    number: number
  }, label)));
};
export const stepsWithBottomNavigation = () => {
  const [currentStep, setCurrentStep] = useState(1);
  return /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Stepper, null, steps.map(({
    number,
    label
  }) => /*#__PURE__*/React.createElement(Step, {
    key: number,
    active: currentStep === number,
    completed: currentStep > number,
    onClick: idx => setCurrentStep(idx),
    number: number
  }, label))), /*#__PURE__*/React.createElement(Box, {
    mt: "xl"
  }, /*#__PURE__*/React.createElement(Button, {
    disabled: currentStep === 1,
    mr: "default",
    onClick: () => setCurrentStep(currentStep - 1)
  }, "Previous Step"), /*#__PURE__*/React.createElement(Button, {
    disabled: currentStep === 3,
    variant: "primary",
    onClick: () => setCurrentStep(currentStep + 1)
  }, "Next Step")));
};
const meta = {
  title: 'DesignSystem/Molecules/Stepper',
  component: Stepper
};
export default meta;