    'use strict' 

    addEventListener('DOMContentLoaded', function() {
        const buttons = document.querySelectorAll('.buttons button');
        const display = document.querySelector('.display');

        let firstOperand = '', secondOperand = '', operator = '', result = '';
        
        const initialize = () => {
        firstOperand = '', secondOperand = '', operator = '', result = '', display.textContent = '0';
        inputKph.value = '0'
        inputMph.value = '0.000'
        inputMph2.value = '0'
        inputKph2.value = '0.000'
        inputC1.value = '0'
        inputF1.value = '0.000'
        inputC2.value = '0.000'
        inputF2.value = '0'
        }

        const clearEntry = () => {
            if(secondOperand) {
                secondOperand = secondOperand.slice(0, -1);
                display.textContent = secondOperand + operator + firstOperand
            }
            else if(operator) {
                operator = '';
                display.textContent = firstOperand;
            }
            else {
                firstOperand = firstOperand.slice(0, -1);
                display.textContent = firstOperand
                if(!firstOperand) { 
                    initialize();
                    return;
                }
            }
        }

        buttons.forEach(button => {
            button.addEventListener('click', event => {
                const buttonPressed = event.target.textContent;

                if(buttonPressed === 'C') {
                    initialize();
                    return;
                }

                if(buttonPressed === 'CE') {
                    clearEntry();
                    return;
                }
                
                if(['/', '*', '-', '+'].includes(buttonPressed)) {
                    if(firstOperand && !operator) {
                    operator = buttonPressed;
                    display.textContent = operator;
                    }
                    return;
                }

                if(buttonPressed === '=') {
                    if(firstOperand && operator && secondOperand) {
                    const num1 = parseFloat(firstOperand);
                    const num2 = parseFloat(secondOperand)

                    switch(operator) {
                        case '/': result = num1 / num2; break;
                        case '*': result = num1 * num2; break;
                        case '-': result = num1 - num2; break;    
                        case '+': result = num1 + num2; break;
                    }

                    display.textContent = result;
                    firstOperand = result.toString();
                    secondOperand = '';
                    operator = '';
                }
                return;
                }
                if (!operator) {
                    firstOperand += buttonPressed;
                    display.textContent = firstOperand;
                }
                else {
                    secondOperand += buttonPressed;
                    display.textContent = secondOperand;
                }
            })
        })


    const bmiCalculatorButton = document.querySelector('.bmi');
    const simpleCalculatorButton = document.querySelector('.simple');
    const percentageCalculatorButton = document.querySelector('.percentage')
    const speedConversionButton = document.querySelector('.speed');
    const weightConversionButton = document.querySelector('.weight');
    const temperatureConversionButton = document.querySelector('.temperature')

    const bmiCalculator = document.querySelector('.bmi-calculator');
    const simpleCalculator = document.querySelector('.simple-calculator');
    const percentageCalculator = document.querySelector('.percentage-calculator');
    const speedConversion = document.querySelector('.speed-conversion')
    const weightConversion = document.querySelector('.weight-conversion');
    const temperatureConversion = document.querySelector('.temperature-conversion')


    const toggleCalculator = function (calculatorToShow) {
        const calculators = [simpleCalculator, bmiCalculator, percentageCalculator, speedConversion, weightConversion, temperatureConversion];

        calculators.forEach(calculator => {
            // console.log(`toggling: ${calculator.className}`);
            if(calculator === calculatorToShow) {
                calculator.classList.remove('hidden');
                // console.log(`showing: ${calculator.className}`);
            }else{
                calculator.classList.add('hidden')
                // console.log(`hiding: ${calculator.className}`);
            }
        })

        //  get rid of MPH=KPH trace FIXME 
        
        if (calculatorToShow === temperatureConversion) {
            inputC2.classList.remove('hidden');
            inputF2.classList.remove('hidden');
            inputC1.classList.remove('hidden');
            inputF1.classList.remove('hidden');
            inputsC.classList.remove('hidden');
            inputsF.classList.remove('hidden');
            
        }else {
            inputC2.classList.add('hidden');
            inputF2.classList.add('hidden');
            inputC1.classList.add('hidden');
            inputF1.classList.add('hidden');
            inputsC.classList.add('hidden');
            inputsF.classList.add('hidden')
        }

        if (calculatorToShow === speedConversion) {
            inputKph.classList.remove('hidden');
            inputKph2.classList.remove('hidden');
            inputMph.classList.remove('hidden');
            inputMph2.classList.remove('hidden');
            document.querySelectorAll('.garbage').forEach(label => {
                label.classList.remove('hidden');
            document.querySelector('.equals').classList.remove('hidden')
            });
        } else {
            inputKph.classList.add('hidden');
            inputKph2.classList.add('hidden');
            inputMph.classList.add('hidden');
            inputMph2.classList.add('hidden');
            document.querySelectorAll('.garbage').forEach(label => {
                label.classList.add('hidden');
            document.querySelector('.equals').classList.add('hidden')
            });
        }
    }
                                                        
    bmiCalculatorButton.addEventListener('click', function() {
        toggleCalculator(bmiCalculator);
    });

    simpleCalculatorButton.addEventListener('click', function() {
        toggleCalculator(simpleCalculator);
    });

    percentageCalculatorButton.addEventListener('click', function() {
        toggleCalculator(percentageCalculator);
    })
    speedConversionButton.addEventListener('click', function() {
        toggleCalculator(speedConversion);
    });
    weightConversionButton.addEventListener('click', function() {
        toggleCalculator(weightConversion);
    })
    temperatureConversionButton.addEventListener('click', function() {
        toggleCalculator(temperatureConversion);
    })
    

    const weightInput = document.getElementById('inputWeight');
    const heightInput = document.getElementById('inputHeight');
    const weightSlider = document.getElementById('myWeight');
    const heightSlider = document.getElementById('myHeight');
    const calculate = document.querySelector('.gumb')


        const showValWeight = (val) => {
            weightInput.value = val;
        }
        const showValHeight = (val) => {
            heightInput.value = val;
        }
        weightSlider.addEventListener('input', function() {
            showValWeight(this.value);
        })
        weightInput.addEventListener('input', function () {
            weightSlider.value = this.value;
        })
        heightSlider.addEventListener('input', function() {
            showValHeight(this.value);
        })
        heightInput.addEventListener('input', function() {
            heightSlider.value = this.value;
        })
        calculate.addEventListener('click', function() {
            const weight = parseFloat(weightInput.value);
            const height = parseFloat(heightInput.value);

            console.log(weight);
            console.log(height);

            const heightMeter = (val) => {
                if(val >= 100) {
                    return val / 100;
                }
                return val;
            }

            const heightInMeters = heightMeter(height);
            const bmi = weight / (heightInMeters * heightInMeters);
            console.log(bmi);

            const message = document.getElementById('evaluationMessage');
            const bmiResult = document.getElementById('yourbmi');


            bmiResult.textContent = bmi.toFixed(2);
            
            if(bmi < 18.5) {
                message.textContent = 'underweight';
                message.style.color = "red"
            }
            else if(bmi > 18.5 && bmi < 24.9) {
                message.textContent = 'normal weight';
                message.style.color = "green"
            }
            else if(bmi >= 25 && bmi < 29.9) {
                message.textContent = 'overweight';
                message.style.color = "yellow"
            }
            else if(bmi >= 30 && bmi < 40) {
                message.textContent = 'obese';
                message.style.color = "red"
            }
            else if(bmi >= 40) {
                message.textContent = 'YOU\\RE A FAT MONSTER'
                message.style.fontSize = '50px'
                message.style.color = "black"
                return;
            }
        });
        const results = document.querySelectorAll('.right')

        function calculateAndUpdate(part, index) {
            const inputs = part.querySelectorAll('input[type="number"]');
            const num1 = parseFloat(inputs[0].value);
            const num2 = parseFloat(inputs[1].value);

            let result;
            if(part.classList.contains('part1')) {
                result = (num1 / 100) * num2;
            }else if(part.classList.contains('part2')){
                result = (num1 / num2) * 100;
            }else if(part.classList.contains('part3')){
                result = num1 + (num1 * num2 / 100);
            }else if(part.classList.contains('part4')){
                result = (num1 / num2) * 100;
            }
            results[index].textContent = isNaN(result) ? '' : result.toFixed(2)
        }


        document.querySelectorAll('.part').forEach((part, index) => {
        part.querySelectorAll('input[type="number"]').forEach(input => {
            input.addEventListener('input', () => {
                calculateAndUpdate(part, index);
            })
        })
        })

        function sliceZero (input) {
            if(input.value.charAt(0) === '0') 
                input.value = input.value.slice(1);
        }

        const btnSpeed = document.querySelectorAll('.btnSpeed');
        const inputsMPH = document.querySelector('.inputs-mph');
        const inputsKPH = document.querySelector('.inputs-kph');
        const h2 = document.querySelector('.text')
       
        
        btnSpeed.forEach(button => {
        button.addEventListener('click', function() {
            initialize();
            if(button.parentElement.classList.contains('mph')){
                inputsMPH.classList.remove('hidden');
                inputsKPH.classList.add('hidden');
            }
            else if(button.parentElement.classList.contains('kph')) {
                inputsKPH.classList.remove('hidden');
                inputsMPH.classList.add('hidden');
            }
            h2.classList.add('hidden')
        })
    })
    const inputKph = document.getElementById('input-kph');
    const inputMph = document.getElementById('input-mph');
    const inputMph2 = document.getElementById('input-mph-2');
    const inputKph2 = document.getElementById('input-kph-2');

        inputKph.addEventListener('input', function() {
            sliceZero(inputKph);
            const kph = parseFloat(inputKph.value);
            const mph = kph * 0.621371; 
            inputMph.value = mph.toFixed(3);
        });
    
        inputMph2.addEventListener('input', function() {
            sliceZero(inputMph2)
            const mph = parseFloat(inputMph2.value);
            const kph = mph / 0.621371; 
            inputKph2.value = kph.toFixed(3);
        });
        inputKph.classList.add('hidden')
        inputMph2.classList.add('hidden');
        inputKph2.classList.add('hidden');
        inputMph.classList.add('hidden'); 
         
        document.querySelectorAll('.inputs-mph input, .inputs-kph input').forEach(input => {
            input.value = ''; 
        });

        function initializeObjects (nameForVariable, className) {
            const element = document.querySelector(`.${className}`);
            window[nameForVariable] = element;
        }
        function initializeById(nameForVariable, idName) {
            const element = document.getElementById(idName);
            window[nameForVariable] = element;
        }
        
        initializeById('kgInput', 'kg');
        initializeById('lbInput', 'lb');
        initializeById('ozInput', 'oz');
        initializeById('stInput', 'st');
        
        function assignMeasurements(measurementType) {
            if (measurementType === 'kg') {
                const kilograms = parseFloat(kgInput.value);
                lbInput.value = (kilograms * 2.20462).toFixed(2);
                ozInput.value = (kilograms * 35.274).toFixed(2);
                stInput.value = (kilograms * 0.157473).toFixed(2);
            } else if (measurementType === 'lb') {
                const pounds = parseFloat(lbInput.value);
                kgInput.value = (pounds / 2.20462).toFixed(2);
                ozInput.value = (pounds * 16).toFixed(2);
                stInput.value = (pounds * 0.0714286).toFixed(2);
            } else if (measurementType === 'oz') {
                const ounces = parseFloat(ozInput.value);
                kgInput.value = (ounces / 35.274).toFixed(2);
                lbInput.value = (ounces / 16).toFixed(2);
                stInput.value = (ounces * 0.00446429).toFixed(2);
            } else if (measurementType === 'st') {
                const stones = parseFloat(stInput.value);
                kgInput.value = (stones / 0.157473).toFixed(2);
                lbInput.value = (stones / 0.0714286).toFixed(2);
                ozInput.value = (stones / 0.00446429).toFixed(2);
            }
        }
        
        function addEvents(input) {
            input.addEventListener('input', function() {
                assignMeasurements(input.id);
            });
        }
        
        addEvents(kgInput);
        addEvents(lbInput);
        addEvents(ozInput);
        addEvents(stInput);

        const tmpButtons = document.querySelectorAll('.btnTemp');
        const inputsF = document.querySelector('.inputs-fahrenheit');
        const inputsC = document.querySelector('.inputs-celcius');

        console.log(inputsF, inputsC);

        const inputC1 = document.getElementById('input-celcius');
        const inputF1 = document.getElementById('input-fahrenheit');
        const inputC2 = document.getElementById('input-celcius-2');
        const inputF2 = document.getElementById('input-fahrenheit-2');
    
        tmpButtons.forEach(button => {
            button.addEventListener('click', function () {
                initialize();
                if (button.parentElement.classList.contains('fahrenheit')) {
                    inputsF.classList.remove('hidden');
                    inputsC.classList.add('hidden');
                } else if (button.parentElement.classList.contains('celcius')) {
                    inputsC.classList.remove('hidden');
                    inputsF.classList.add('hidden');
                }
            });
        });
        
        inputC1.addEventListener('input', function () {
            sliceZero(inputC1)
            const celcius = parseFloat(inputC1.value);
            const fah = (9/5 * celcius) + 3;
            inputF1.value = fah.toFixed(3);
        }) 

        inputF2.addEventListener('input', function() {
            sliceZero(inputF2)
            const fah = parseFloat(inputF2.value);
            const celcius = (fah - 32) * 5 / 9;
            inputC2.value = celcius.toFixed(3);
        })

        // The conversion formula for a temperature that is expressed on the Celsius (°C) scale to its Fahrenheit (°F) formula is given below: °F = (9/5 × °C) + 3
    });
