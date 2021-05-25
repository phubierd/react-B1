



const stateDefault = {
    mangSinhVien:[
        {maSinhVien:'1',tenSinhVien:'PhuCT',soDienThoai:'0101010101010',email:'abc@abc.abc'},
        {maSinhVien:'2',tenSinhVien:'PhuCT2',soDienThoai:'0202020202020',email:'abc2@abc.abc'},
        
    ],
    sinhVienSua:
    {maSinhVien:'',tenSinhVien:'',soDienThoai:'',email:''}
}


export const quanLySinhVienReducer = (state=stateDefault,action)=>{


    switch (action.type){
        case 'THEM_SINH_VIEN':
            {
                let mangSinhVienCapNhat = [...state.mangSinhVien];

                mangSinhVienCapNhat.push(action.sinhVien);

                //cap nhat lai state
                state.mangSinhVien= mangSinhVienCapNhat;
                return {...state}
            }

        case 'XOA_SINH_VIEN':
            {
                let mangSinhVienCapNhat = [...state.mangSinhVien];

                mangSinhVienCapNhat = mangSinhVienCapNhat.filter(sv => sv.maSinhVien !== action.maSinhVien);

                //cap nhat lai state
                state.mangSinhVien= mangSinhVienCapNhat;
                return{...state}
            }
        case 'SUA_SINH_VIEN':
            {
                state.sinhVienSua = action.sinhVien;
                return {...state}
            }
        default : {return state}
    }
}