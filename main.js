function mudar() {
    var result = document.getElementById('result');
    var top = document.getElementById('top').value;
    var bottom = document.getElementById('bottom').value;
    var right = document.getElementById('right').value;
    var left = document.getElementById('left').value;
    var shape = document.getElementById('shape').style.borderRadius = `${top}% ${100 - top}% ${100 - bottom}% ${bottom}% / ${100 - left}% ${100 - right}% ${right}% ${left}%`;
    result.innerHTML = `<p> Medidas da borda em %</p><strong><p>${Math.round(top)}% ${Math.round(100 - top)}% ${Math.round(100 - bottom)}% ${Math.round(bottom)}% / ${Math.round(100 - left)}% ${Math.round(100 - right)}% ${Math.round(right)}% ${Math.round(left)}%</strong></p>`;
}
