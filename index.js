let integerMode = false;
let middlePoint = NaN;

const minInput = document.getElementById('min-input');
const maxInput = document.getElementById('max-input');

const middlePointSpan = document.getElementById('middle-point-span');

const lessButton = document.getElementById('less-button');
const greaterButton = document.getElementById('greater-button');

const integerModeCheckbox = document.getElementById('integer-mode-checkbox');

integerModeCheckbox.checked = integerMode;

const updateMiddlePoint = () => {
    const min = parseFloat(minInput.value);
    const max = parseFloat(maxInput.value);

    if (Number.isNaN(min) || Number.isNaN(max)) {
        return;
    }

    if (max < min) {
        return;
    }

    middlePoint = (min + max) / 2;
    if (integerMode) {
        middlePoint = Math.floor(middlePoint);
    }

    middlePointSpan.textContent = middlePoint.toString();
};

lessButton.addEventListener('click', () => {
    if (Number.isNaN(middlePoint)) {
        return;
    }

    maxInput.value = middlePoint;
    updateMiddlePoint();
});

greaterButton.addEventListener('click', () => {
    if (Number.isNaN(middlePoint)) {
        return;
    }

    minInput.value = middlePoint;
    updateMiddlePoint();
});

integerModeCheckbox.addEventListener('change', () => {
    integerMode = !integerMode;
    updateMiddlePoint();
})

minInput.addEventListener('input', updateMiddlePoint);
maxInput.addEventListener('input', updateMiddlePoint);