const stateDefaultGame = {
    ketQuaChon: false,  //false : xiu, true: tai,
    soBanThang: 1,
    tongSoBanChoi: 0,
    mangXucXac: [
        { hinhAnh: './img/imgGame/1.png', diem: 1 },
        { hinhAnh: './img/imgGame/1.png', diem: 1 },
        { hinhAnh: './img/imgGame/1.png', diem: 1 }
    ]
}

export const baiTapGameXucXacReducer = (state = stateDefaultGame, action) => {
    console.log('action XucXac', action)

    switch (action.type) {
        case 'CHON_TAI_XIU': {
            state.ketQuaChon = action.ketQuaChon;
            console.log('state ket qua chon', state);
            //tính chất bất biến (immutable) của redux đối với kiểu dữ liệu là object hoặc array => chép ra object, array mới
            return { ...state };
        }

        case 'PLAY-GAME': {
            let mangXXNN = [];

            //random 3 lan để tạo ra 3 xúc xắc ngẫu nhiên
            for (var i = 1; i <= 3; i++) {
                //tạo ra 1 con số ngẫu nhiên
                let soNN = Math.floor(Math.random() * 6) + 1;
                //từ số ngẫu nhiên tạo ra 1 object xúc xắc;
                let xxnn = { hinhAnh: `./img/imgGame/${soNN}.png`, diem: soNN }
                mangXXNN.push(xxnn);
            }
            //cập nhạt lại state
            state.mangXucXac = mangXXNN;


            //tính điểm và trả kết quả
            let tongDiem = mangXXNN.reduce((diem, xxnn, index) => {
                return diem += xxnn.diem;
            }, 0)

            //so sánh xử lý kết quả
            if ((tongDiem > 11 && state.ketQuaChon === true) || (tongDiem <= 11 && state.ketQuaChon === false)) {
                state.soBanThang += 1;
            }
            //xử lý tăng bàn chơi
            state.tongSoBanChoi += 1;
            return { ...state }
        }
    }

    return state;
}