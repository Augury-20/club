function checkAnswer(button, status) {
    // 找到當前的問題區域
    const question = button.closest('.question');
    
    // 禁用所有按鈕
    const buttons = question.querySelectorAll('button');
    buttons.forEach(btn => btn.disabled = true);

    // 根據回答狀態改變按鈕顏色
    if (status === 'correct') {
        button.classList.add('correct');
    } else {
        button.classList.add('wrong');
        // 顯示正確答案
        question.querySelector('.correct-answer').classList.remove('hidden');
    }
}

