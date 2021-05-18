import { combineReducers, createStore } from 'redux';

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
                    if (gioHangUpdate[index].soLuong < 1){
                        gioHangUpdate[index].soLuong -= action.soLuong
                    }
                }
                return gioHangUpdate;
            }
        }
        return state;
    },

    // stateABC:(state=[],action)=>{
    //     return state;
    // }
});

export const store = createStore(rootReducer);