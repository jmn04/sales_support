function toggleAccordion(button) {
    const accordionItem = button.parentElement.querySelector('.accordion-item');

    if (button.textContent === '+') {
        // accordionItem.style.display = 'block';
        button.textContent = '-';
    } else {
        // accordionItem.style.display = 'none';
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
        personSelect.disabled = false; // 有効化
    } else {
        // personSelect.selectedIndex = 0; // 選択をリセット
        personSelects.forEach(select => {
            select.value = 0;
            select.disabled = true; // 企業が選択されていない場合、すべての担当者を無効化
        });
    }
}

function selectNextItem(select, nextElemId) {
    const personSelect = document.getElementById(nextElemId);
    // 企業が選択された場合、担当者セレクトボックスを有効化
    personSelect.disabled = select.value === "";
    if (select.value > 0) {
        personSelect.disabled = false; // 有効化
    } else {
        personSelect.disabled = true; // 無効化
        personSelect.selectedIndex = 0; // 選択をリセット
    }
}

// function toggleImportant() {
//     const checkBox = document.getElementById('importantCheck');
//     const elemBody = document.getElementById('body');
//     // チェックボックスの状態に応じて背景色を変更
//     if (checkBox.checked) {
//         elemBody.style.background = '#ffff7f';
//     } else {
//         elemBody.style.background = '#fff';
//     }
// }