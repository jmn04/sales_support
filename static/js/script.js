function toggleAccordion(button) {
    const accordionItem = button.parentElement.querySelector('.accordion-item');

    if (button.textContent === '+') {
        button.textContent = '-';
    } else {
        button.textContent = '+';
    }
}

function checkSelect(select) {
    const companySelect = document.getElementById('companySelect');
    const personSelect = document.getElementById('personSelect1');
    const personSelects = document.querySelectorAll('[id^="personSelect"]');
    // 企業が選択された場合、担当者セレクトボックスを有効化
    companySelect.disabled = select.value === "";
    if (select.value > 0) {
        personSelects.forEach(select => {
            select.disabled = false; // 企業が選択された場合、すべての担当者を有効化
        });
    } else {
        personSelects.forEach(select => {
            select.value = 0;
            select.disabled = true; // 企業が選択されていない場合、すべての担当者を無効化
        });
    }
}