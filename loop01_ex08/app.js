function play() {
    let fromrange = parseInt(prompt("Bắt đầu: "));
    let torange = parseInt(prompt("Kết thúc: "));
    let random = Math.floor(Math.random() * (torange - fromrange) ) + fromrange;
    let choose = parseInt(prompt("Bạn chọn số nào? "));
    while (choose <= torange && choose >=fromrange) {
        if ( choose === random) {
            alert("Chúc mừng bạn đã chọn đúng!");
            break;
        } else if (choose > random) {
            choose = parseInt(prompt("Số lớn hơn. Chọn lại: "));
        } else {
            choose = parseInt(prompt("Số nhỏ hơn. Chọn lại: "));
        }
    }
}