import { combineReducers, createStore } from 'redux';
import {baiTapGameXucXacReducer} from './reducers/baiTapGameXucXacReducer'
import {BTGameOanTuTiReducer} from './reducers/BTGameOanTuTiReducer'
import { onTapFormQLSVReducer } from './reducers/onTapFormQLSV';
import {quanLySinhVienReducer} from './reducers/quanLySinhVienReducer'
const stateDefault = [
    {
        "maSP": 1,
        "tenSP": "VinSmart Live",
        "giaBan": 1000,
        "soLuong": 2,
        "hinhAnh": "https://picsum.photos/200"
    },
    {
        "maSP": 2,
        "tenSP": "Iphone",
        "giaBan": 2000,
        "soLuong": 2,
        "hinhAnh": "https://picsum.photos/200"
    }
]

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

const rootReducer = combineReducers({
    // Nơi chứa toàn bộ state của ứng dụng
    stateGioHang: (state = stateDefault, action) => {
        switch (action.type) {
            case 'THEM_GIO_HANG': {
                const gioHangUpdate = [...state];
                //kiem tra sp co trong gio hang chua dựa vào action gửi len
                const index = gioHangUpdate.findIndex(spGH => spGH.maSP === action.spGioHang.maSP);
                if (index !== -1) {
                    gioHangUpdate[index].soLuong += 1;
                } else {
                    gioHangUpdate.push(action.spGioHang);
                }
                return gioHangUpdate;
            }

            case 'XOA_GIO_HANG': {
                let gioHangUpdate = [...state];
                //lọc ra các sản phẩm ko chứa mã sản phẩm xóa
                gioHangUpdate = gioHangUpdate.filter(spGH => spGH.maSP !== action.maSPClick)

                //return về state mới => các hàm mapStateToProps từ state này sẽ tự động render lại
                return gioHangUpdate;
            }

            case 'TANG_GIAM_SO_LUONG': {
                let gioHangUpdate = [...state];

                let index = gioHangUpdate.findIndex(spGH => spGH.maSP === action.maSPClick);
                //neu tim thay
                if (index !== -1) {
                    gioHangUpdate[index].soLuong += action.soLuong;
                    if (gioHangUpdate[index].soLuong < 1) {
                        gioHangUpdate[index].soLuong -= action.soLuong
                    }
                }
                return gioHangUpdate;
            }
        }
        return state;
    },



    // baiTapGameXucXacReducer:baiTapGameXucXacReducer
    baiTapGameXucXacReducer,
    // baiTapGameXucXacReducer: (state = stateDefaultGame, action) => {
    //     console.log('action XucXac', action)

    //     switch (action.type) {
    //         case 'CHON_TAI_XIU': {
    //             state.ketQuaChon = action.ketQuaChon;
    //             console.log('state ket qua chon', state);
    //             //tính chất bất biến (immutable) của redux đối với kiểu dữ liệu là object hoặc array => chép ra object, array mới
    //             return { ...state };
    //         }

    //         case 'PLAY-GAME': {
    //             let mangXXNN = [];

    //             //random 3 lan để tạo ra 3 xúc xắc ngẫu nhiên
    //             for (var i = 1; i <= 3; i++) {
    //                 //tạo ra 1 con số ngẫu nhiên
    //                 let soNN = Math.floor(Math.random() * 6) + 1;
    //                 //từ số ngẫu nhiên tạo ra 1 object xúc xắc;
    //                 let xxnn = { hinhAnh: `./img/imgGame/${soNN}.png`, diem: soNN }
    //                 mangXXNN.push(xxnn);
    //             }
    //             //cập nhạt lại state
    //             state.mangXucXac = mangXXNN;


    //             //tính điểm và trả kết quả
    //             let tongDiem = mangXXNN.reduce((diem, xxnn, index) => {
    //                 return diem += xxnn.diem;
    //             }, 0)

    //             //so sánh xử lý kết quả
    //             if ((tongDiem > 11 && state.ketQuaChon === true) || (tongDiem <= 11 && state.ketQuaChon === false)) {
    //                 state.soBanThang += 1;
    //             }
    //             //xử lý tăng bàn chơi
    //             state.tongSoBanChoi += 1;
    //             return { ...state }
    //         }
    //     }

    //     return state;
    // }


    BTGameOanTuTiReducer,
    quanLySinhVienReducer,
    onTapFormQLSVReducer,
});

export const store = createStore(rootReducer);