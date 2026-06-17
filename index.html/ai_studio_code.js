document.getElementById('generateBtn').addEventListener('click', function() {
    // 1. Get Input Values
    const bust = parseFloat(document.getElementById('bust').value);
    const waist = parseFloat(document.getElementById('waist').value);
    const hips = parseFloat(document.getElementById('hips').value);
    const shoulder = parseFloat(document.getElementById('shoulder').value);
    const neck = parseFloat(document.getElementById('neck').value);
    const backLength = parseFloat(document.getElementById('backLength').value);

    if (!bust || !waist || !hips) {
        alert("Please fill in all basic measurements.");
        return;
    }

    // 2. Drafting Formulas (Standard Ease Included)
    const ease = 2; // Standard 2-inch total ease for a fitted garment

    // Bodice Dimensions
    const armholeDepth = (bust / 6) + 1.5;
    const neckWidth = neck / 5;
    const frontBustWidth = (bust / 4) + 0.5; // Front is usually wider
    const backBustWidth = (bust / 4) - 0.5;
    
    // Skirt Dimensions
    const skirtHipWidth = (hips / 4) + 0.25;
    const waistQuarter = (waist / 4) + 1; // 1 inch added for dart

    // 3. Display Results
    document.querySelector('.placeholder-text').style.display = 'none';
    document.getElementById('patternOutputs').style.display = 'block';

    const frontList = document.getElementById('frontBodiceList');
    frontList.innerHTML = `
        <li><span>Drafting Square Width:</span> <strong>${frontBustWidth.toFixed(2)}"</strong></li>
        <li><span>Armhole Depth:</span> <strong>${armholeDepth.toFixed(2)}"</strong></li>
        <li><span>Neckline Width:</span> <strong>${neckWidth.toFixed(2)}"</strong></li>
        <li><span>Neckline Depth:</span> <strong>${(neckWidth + 0.5).toFixed(2)}"</strong></li>
        <li><span>Waist Line:</span> <strong>${waistQuarter.toFixed(2)}"</strong></li>
    `;

    const backList = document.getElementById('backBodiceList');
    backList.innerHTML = `
        <li><span>Drafting Square Width:</span> <strong>${backBustWidth.toFixed(2)}"</strong></li>
        <li><span>Back Length:</span> <strong>${backLength.toFixed(2)}"</strong></li>
        <li><span>Back Neck Depth:</span> <strong>0.75"</strong></li>
        <li><span>Shoulder Slope:</span> <strong>1.5"</strong></li>
    `;

    const skirtList = document.getElementById('skirtList');
    skirtList.innerHTML = `
        <li><span>Hip Line Width (Quarter):</span> <strong>${skirtHipWidth.toFixed(2)}"</strong></li>
        <li><span>Waist to Hip Depth:</span> <strong>8.0" (Standard)</strong></li>
        <li><span>Total Quarter Waist:</span> <strong>${waistQuarter.toFixed(2)}"</strong></li>
        <li><span>Standard Dart Intake:</span> <strong>1.0"</strong></li>
    `;
});