let html_1 = '';
for (let a_1 = 1; a_1 <= 6; a_1++) {
    for (let b_1 = 1; b_1 <= 6; b_1++) {
        html_1 += '*&nbsp;';
    }
    html_1 += '<br>';
}

document.getElementById('1_pattern').innerHTML = html_1;


let html_2 = '';
for (let a_2 = 1; a_2 <= 6; a_2++) {
    for (let b_2 = 1; b_2 <= a_2; b_2++) {
        html_2 += '*&nbsp;';
    }
    html_2 += '<br>';
}

document.getElementById('2_pattern').innerHTML = html_2;


let html_3 = '';
for (let a_3 = 1; a_3 <= 6; a_3++) {
    for (let b_3 = 1; b_3 <= 6; b_3++) {
        if (a_3 === 1 || a_3 === 6 || b_3 === 1 || b_3 === 6) {
            html_3 += '*&nbsp;';
        }
        else {
            html_3 += '&nbsp;&nbsp;&nbsp;';
        }
    }
    html_3 += '<br>';
}

document.getElementById('3_pattern').innerHTML = html_3;


let html_4 = '';
for (let a_4 = 1; a_4 <= 6; a_4++) {
    for (let b_4 = 6; b_4 >= a_4; b_4--) {
        html_4 += '*&nbsp;';
    }
    for (let c_4 = 1; c_4 <= a_4; c_4++) {
        html_4 += '&nbsp;';
    }
    html_4 += '<br>';
}

document.getElementById('4_pattern').innerHTML = html_4;


let html_5 = '';
for (let a_5 = 1; a_5 <= 6; a_5++) {
    for (let b_5 = 6; b_5 >= a_5; b_5--) {
        html_5 += '&nbsp;&nbsp;&nbsp;';
    }
    for (let c_5 = 1; c_5 <= a_5; c_5++) {
        html_5 += '*&nbsp;';
    }
    html_5 += '<br>';
}

document.getElementById('5_pattern').innerHTML = html_5;


let html_6 = '';
for (let a_6 = 1; a_6 <= 6; a_6++) {
    for (let c_6 = 1; c_6 <= a_6; c_6++) {
        if (a_6 == c_6) {
            html_6 += '*&nbsp;';
        } else {
            if (c_6==1 || a_6==6) {
                html_6 += '*&nbsp;';
            } else {
                html_6 += '&nbsp;&nbsp;&nbsp;';
            }

        }
    }
    html_6 += '<br>';
}

document.getElementById('6_pattern').innerHTML = html_6;


let html_7 = '';
for (let a_7 = 1; a_7 <= 6; a_7++) {
    for (let c_7 = 1; c_7 <= a_7; c_7++) {
        html_7 += '*&nbsp;';
    }
    html_7 += '<br>';
}

document.getElementById('7_pattern').innerHTML = html_7;