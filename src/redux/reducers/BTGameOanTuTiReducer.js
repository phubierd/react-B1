const stateDefaultGameOanTT = {
    soBanThang: 0,
    soBanChoi:0,
    txtThongBao:'Bạn Hòa !! ',
    mangPlayerClick: [
        {ma:'keo',hinhAnh:'./img/imgGame1/keo.png',datCuoc:false},
        {ma:'bua',hinhAnh:'./img/imgGame1/bua.png',datCuoc:false},
        {ma:'bao',hinhAnh:'./img/imgGame1/bao.png',datCuoc:true},
    ],
    npc:{ma:'keo',hinhAnh:'./img/imgGame1/keo.png'}
}

export const BTGameOanTuTiReducer = (state = stateDefaultGameOanTT,action)=>{
    console.log('action OanTuTi:',action)

    switch(action.type){
        case 'PLAYER_CHON':{
            // console.log('action PLAYER_CHON',action)
            //reset mảng cược => sẽ set false hết
            let mangPlayerClickUpdate = [...state.mangPlayerClick]
            mangPlayerClickUpdate = mangPlayerClickUpdate.map((item,index)=>{
                return {...item,datCuoc:false}
            })
            // console.log('mangPlayerClickUpdate',mangPlayerClickUpdate)

            //tìm ra mã cược để change trạng thái đặt cược ứng với mã cược đó
            let index = mangPlayerClickUpdate.findIndex(item => item.ma === action.maCuoc);
            if (index !== -1){  
                mangPlayerClickUpdate[index].datCuoc = true;
            }

                //set state của mảng cược => render lại giao diện
            state.mangPlayerClick = mangPlayerClickUpdate;
            return {...state}
        }

        case 'NPC_RANDOM':{
            // console.log('npc random',action)
            let soNgauNhien = Math.floor(Math.random() *3)
            let quanCuocNgauNhien = state.mangPlayerClick[soNgauNhien]
            state.npc = quanCuocNgauNhien;
            return {...state}
        }

        case 'END_GAME':{
            state.soBanChoi +=1;
            // console.log('end-game',action)
            let player = state.mangPlayerClick.find(item => item.datCuoc === true);
            let npc = state.npc;
            
            switch (player.ma){
                case 'keo':
                    if (npc.ma === 'keo'){
                        state.txtThongBao = 'Hòa Nhau !!! ';
                    }else if (npc.ma ==='bua'){
                        state.txtThongBao = 'Bạn thua SML !!!';
                    }else{
                        state.soBanThang+=1;
                        state.txtThongBao = 'Iron man WIN !!!';
                    };break;
                case 'bua':
                    if (npc.ma === 'keo'){
                        state.soBanThang+=1;
                        state.txtThongBao = 'Iron man WIN !!!';
                    }else if (npc.ma ==='bua'){
                        state.txtThongBao = 'Hòa Nhau !!!';
                    }else{
                        state.txtThongBao = 'Bạn thua SML !!!';
                    };break;
                case 'bao':
                    if (npc.ma === 'keo'){
                        state.txtThongBao = 'Bạn thua SML !!!';
                    }else if (npc.ma ==='bua'){
                        state.soBanThang+=1;
                        state.txtThongBao = 'Iron man WIN !!!';
                    }else{
                        state.txtThongBao = 'Hòa Nhau !!!';
                    }

                return {...state}
            }

            

            

            return {...state}
        }


        default: return {...state}


    }
    return state;
}