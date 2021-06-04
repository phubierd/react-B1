const stateDefault = {
    mangSV: [
        {
            maSinhVien: '1',
            tenSinhVien: 'nguyen van a',
            soDienThoai: '123123123',
            email: 'ngueyvana@gmail.com'
        },
        {
            maSinhVien: '2',
            tenSinhVien: 'nguyen van b',
            soDienThoai: '123123213321',
            email: 'ngueyvanb@gmail.com'
        },


    ],


    sinhVienSua:{
        maSinhVien: '1',
        tenSinhVien: 'nguyen van a',
        soDienThoai: '123123123',
        email: 'ngueyvana@gmail.com'
    }
}


export const onTapFormQLSVReducer = (state = stateDefault,action)=>{
    switch(action.type){
        case'THEM_SINH_VIEN':{
            let mangSVCapNhat = [...state.mangSV]

            mangSVCapNhat.push(action.sinhVien)
            state.mangSV = mangSVCapNhat;
            return {...state}
        }
        case 'XOA_SINH_VIEN':{
            let mangSVCapNhat = [...state.mangSV]

            mangSVCapNhat = mangSVCapNhat.filter(sv=>sv.maSinhVien !== action.maSinhVien)

            //cap nhat lai state
            state.mangSV = mangSVCapNhat;
            return{...state}
        }
        case 'SUA_SINH_VIEN':{
            state.sinhVienSua = action.sinhVien
            return{...state}
        }




        default: {return state}
    }
}

