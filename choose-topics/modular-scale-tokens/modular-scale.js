const slider = document.querySelector('#ratio-slider');
const rows = document.querySelector('#scale-rows');
const output = document.querySelector('#ratio-output');
const ratioName = document.querySelector('#ratio-name');

const steps = [
    ['xs', -2], ['sm', -1], ['md', 0], ['lg', 1],
    ['xl', 2], ['2xl', 3], ['3xl', 4]
];

const namedRatios = [
    { value: 1.1, name: 'minor second' },
    { value: 1.2, name: 'minor third' },
    { value: 1.25, name: 'major third' },
    { value: 1.333, name: 'perfect fourth' },
    { value: 1.5, name: 'perfect fifth' }
];

function nearestRatioName(value) {
    return namedRatios.reduce((nearest, ratio) => {
        return Math.abs(ratio.value - value) < Math.abs(nearest.value - value) ? ratio : nearest;
    }).name;
}

function updateScale() {
    const ratio = Number(slider.value);
    document.documentElement.style.setProperty('--ratio', ratio);
    output.value = ratio.toFixed(3);
    output.textContent = ratio.toFixed(3);
    ratioName.textContent = nearestRatioName(ratio);

    rows.innerHTML = steps.map(([name, exponent]) => {
        const pixels = 18 * Math.pow(ratio, exponent);
        const sign = exponent > 0 ? '+' : '';
        const expression = exponent === 0
            ? 'var(--base)'
            : `calc(var(--base) * pow(var(--ratio), ${exponent}))`;

        return `<tr>
            <th scope="row">--font-size-${name}</th>
            <td>${sign}${exponent}</td>
            <td><code>${expression}</code></td>
            <td>${pixels.toFixed(2)}px</td>
        </tr>`;
    }).join('');
}

slider.addEventListener('input', updateScale);
updateScale();
